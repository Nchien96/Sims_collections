// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract SimMarketplace is IERC721Receiver, Ownable {
    using SafeERC20 for IERC20;
    using Strings for uint256;
    IERC721Enumerable private nft;
    IERC20 private token;
    string private _urlpng;
    string public baseExtensionPng = ".png";

    receive() external payable {}

    struct ListDetail {
        address payable author;
        uint256 price;
        uint256 tokenId;
        string tokenPNG;
    }

    struct Bundle {
        address payable author;
        uint256 price;
        uint256[] tokenId;
    }

    uint256[] public bundles;
    mapping(uint256 => Bundle) public bundleInfo;

    event ListNFT(address indexed _from, uint256 _tokenId, uint256 _price);
    event UnlistNFT(address indexed _from, uint256 _tokenId);
    event BuyNFT(address indexed _from, uint256 _tokenId, uint256 _price);
    event UpdateListingNFTPrice(uint256 _tokenId, uint256 _price);
    event SetToken(IERC20 _token);
    event SetTax(uint256 _tax);

    event SetNFT(IERC721Enumerable _nft);

    uint256 private tax = 10;
    mapping(uint256 => ListDetail) listDetail;

    constructor(IERC20 _token, IERC721Enumerable _nft) {
        nft = _nft;
        token = _token;
    }

    function _basePNG() internal view returns (string memory _newBasePNG) {
        return _urlpng;
    }

    function setBasePng(string memory _newUrlPng) public onlyOwner {
        _urlpng = _newUrlPng;
    }

    function tokenPNG(uint256 tokenId) public view returns (string memory) {
        string memory currentBasePNG = _basePNG();
        return
            bytes(currentBasePNG).length > 0
                ? string(
                    abi.encodePacked(
                        currentBasePNG,
                        tokenId.toString(),
                        baseExtensionPng
                    )
                )
                : "";
    }

    function onERC721Received(
        address,
        address,
        uint256,
        bytes calldata
    ) external pure override returns (bytes4) {
        return
            bytes4(
                keccak256("onERC721Received(address,address,uint256,bytes)")
            );
    }

    function setTax(uint256 _tax) public onlyOwner {
        tax = _tax;
        emit SetTax(_tax);
    }

    function setToken(IERC20 _token) public onlyOwner {
        token = _token;
        emit SetToken(_token);
    }

    function setNft(IERC721Enumerable _nft) public onlyOwner {
        nft = _nft;
        emit SetNFT(_nft);
    }

    function getListedNft() public view returns (ListDetail[] memory) {
        uint balance = nft.balanceOf(address(this));
        ListDetail[] memory myNft = new ListDetail[](balance);

        for (uint i = 0; i < balance; i++) {
            myNft[i] = listDetail[nft.tokenOfOwnerByIndex(address(this), i)];
        }
        return myNft;
    }

    function listNft(uint256 _tokenId, uint256 _price) public {
        require(
            nft.ownerOf(_tokenId) == msg.sender,
            "You are not the owner of this NFT"
        );
        require(
            nft.getApproved(_tokenId) == address(this),
            "Marketplace is not approved to transfer this NFT"
        );

        listDetail[_tokenId] = ListDetail(
            payable(msg.sender),
            _price,
            _tokenId,
            tokenPNG(_tokenId)
        );

        nft.safeTransferFrom(msg.sender, address(this), _tokenId);
        emit ListNFT(msg.sender, _tokenId, _price);
    }

    function multiListNft(
        uint256[] calldata _tokenId,
        uint256[] calldata _price
    ) public {
        require(
            _tokenId.length == _price.length,
            "Input arrays must have the same lenght"
        );

        for (uint256 i; i < _tokenId.length; i++) {
            uint256 tokenId = _tokenId[i];
            uint256 price = _price[i];

            require(
                nft.ownerOf(tokenId) == msg.sender,
                "You are not the owner of this NFT"
            );
            require(
                nft.getApproved(tokenId) == address(this),
                "Marketplace is not approved to transfer this NFT"
            );

            listDetail[tokenId] = ListDetail(
                payable(msg.sender),
                price,
                tokenId,
                tokenPNG(tokenId)
            );

            nft.safeTransferFrom(msg.sender, address(this), tokenId);
            emit ListNFT(msg.sender, tokenId, price);
        }
    }

    function bundleList(
        uint256[] calldata _tokenId,
        uint256 bundlePrice
    ) external {
        require(
            _tokenId.length > 1,
            "At least two NFT must be included in the bundle"
        );

        for (uint256 i; i < _tokenId.length; i++) {
            uint256 tokenId = _tokenId[i];

            require(
                nft.ownerOf(tokenId) == msg.sender,
                "You are not the owner of this NFT"
            );
            require(
                nft.getApproved(tokenId) == address(this),
                "Marketplace is not approved to transfer this NFT"
            );

            nft.safeTransferFrom(msg.sender, address(this), tokenId);
        }

        uint bundleId = bundles.length;
        bundles.push(bundleId);

        bundleInfo[bundleId] = Bundle({
            author: payable(msg.sender),
            price: bundlePrice,
            tokenId: _tokenId
        });
    }

    function buyBundle(uint256 bundleId) public {
        Bundle storage bundle = bundleInfo[bundleId];
        require(bundle.author != address(0), "Bundle does not exist");
        require(
            token.balanceOf(msg.sender) >= bundle.price * (10 ** 18),
            "Insufficient account balance"
        );

        for (uint256 i = 0; i < bundle.tokenId.length; i++) {
            uint256 tokenId = bundle.tokenId[i];
            require(
                nft.ownerOf(tokenId) == address(this),
                "This NFT doesn't exist on marketplace"
            );
        }

        SafeERC20.safeTransferFrom(
            token,
            msg.sender,
            address(this),
            bundle.price * (10 ** 18)
        );

        for (uint256 i = 0; i < bundle.tokenId.length; i++) {
            uint256 tokenId = bundle.tokenId[i];
            nft.safeTransferFrom(address(this), msg.sender, tokenId);
        }

        token.transfer(
            bundle.author,
            ((bundle.price * (10 ** 18)) * (100 - tax)) / 100
        );
        delete bundleInfo[bundleId];
    }

    function unlistBundle(uint256 bundleId) public {
        Bundle storage bundle = bundleInfo[bundleId];
        require(
            bundle.author == msg.sender,
            "You are not the owner of this bundle"
        );

        for (uint256 i = 0; i < bundle.tokenId.length; i++) {
            uint256 tokenId = bundle.tokenId[i];
            require(
                nft.ownerOf(tokenId) == address(this),
                "This NFT doesn't exist on marketplace"
            );

            nft.safeTransferFrom(address(this), bundle.author, tokenId);
        }

        delete bundleInfo[bundleId];
    }

    function getBundleInfo(
        uint bundleId
    ) external view returns (address, uint, uint[] memory) {
        Bundle storage bundle = bundleInfo[bundleId];
        return (bundle.author, bundle.price, bundle.tokenId);
    }

    function updateListingNftPrice(uint256 _tokenId, uint256 _price) public {
        require(
            nft.ownerOf(_tokenId) == address(this),
            "This NFT doesn't exist on marketplace"
        );
        require(
            listDetail[_tokenId].author == msg.sender,
            "Only owner can update price of this NFT"
        );

        listDetail[_tokenId].price = _price;
        emit UpdateListingNFTPrice(_tokenId, _price);
    }

    function unlistNft(uint256 _tokenId) public {
        require(
            nft.ownerOf(_tokenId) == address(this),
            "This NFT doesn't exist on marketplace"
        );
        require(
            listDetail[_tokenId].author == msg.sender,
            "Only owner can unlist this NFT"
        );

        nft.safeTransferFrom(address(this), msg.sender, _tokenId);
        emit UnlistNFT(msg.sender, _tokenId);
    }

    function buyNft(uint256 _tokenId, uint256 _price) public {
        require(
            token.balanceOf(msg.sender) >= _price * (10 ** 18),
            "Insufficient account balance"
        );
        require(
            nft.ownerOf(_tokenId) == address(this),
            "This NFT doesn't exist on marketplace"
        );
        require(
            listDetail[_tokenId].price <= _price,
            "Minimum price has not been reached"
        );

        SafeERC20.safeTransferFrom(
            token,
            msg.sender,
            address(this),
            _price * (10 ** 18)
        );
        token.transfer(
            listDetail[_tokenId].author,
            ((_price * (10 ** 18)) * (100 - tax)) / 100
        );

        nft.safeTransferFrom(address(this), msg.sender, _tokenId);
        emit BuyNFT(msg.sender, _tokenId, _price);
    }

    function withdraw() public onlyOwner {
        payable(msg.sender).transfer(address(this).balance);
    }

    function withdrawToken(uint256 amount) public onlyOwner {
        require(
            token.balanceOf(address(this)) >= amount,
            "Insufficient account balance"
        );
        token.transfer(msg.sender, amount);
    }

    function withdrawErc20() public onlyOwner {
        token.transfer(msg.sender, token.balanceOf(address(this)));
    }
}
