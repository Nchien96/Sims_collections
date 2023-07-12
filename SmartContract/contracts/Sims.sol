//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Context.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/AccessControlEnumerable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

interface ISim {
    function mint(address to) external returns (uint256);
}

contract Sim is ERC721Enumerable, Ownable, AccessControlEnumerable, ISim {
    using Counters for Counters.Counter;
    using Strings for uint256;
    Counters.Counter private _tokenIdTracker;
    string private _url;
    string public baseExtension = ".json";
    uint256 public maxSupply = 10000;
    bool public paused = false;
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    event Mint(address to, uint256 tokenid);

    constructor() ERC721("SimNft", "Sim") {
        _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
    }

    function _baseURI()
        internal
        view
        override
        returns (string memory _newBaseURI)
    {
        return _url;
    }

    function mint(address to) external override returns (uint256) {
        require(
            owner() == _msgSender() || hasRole(MINTER_ROLE, _msgSender()),
            "Caller is not a minter"
        );
        uint256 supply = totalSupply();
        require(!paused);
        require(supply++ <= maxSupply);
        _tokenIdTracker.increment();
        uint256 token_id = _tokenIdTracker.current();
        _mint(to, token_id);
        emit Mint(to, token_id);
        return token_id;
    }

    function listTokenIds(
        address owner
    ) external view returns (uint256[] memory tokenIds) {
        uint balance = balanceOf(owner);
        uint256[] memory ids = new uint256[](balance);

        for (uint i = 0; i < balance; i++) {
            ids[i] = tokenOfOwnerByIndex(owner, i);
        }
        return (ids);
    }

    function setBaseUrl(string memory _newUrl) public onlyOwner {
        _url = _newUrl;
    }

    function tokenURI(
        uint256 tokenId
    ) public view virtual override returns (string memory) {
        require(
            _exists(tokenId),
            "ERC721Metadata: URI query for nonexistent token"
        );

        string memory currentBaseURI = _baseURI();
        return
            bytes(currentBaseURI).length > 0
                ? string(
                    abi.encodePacked(
                        currentBaseURI,
                        tokenId.toString(),
                        baseExtension
                    )
                )
                : "";
    }

    function pause(bool _state) public onlyOwner {
        paused = _state;
    }

    function withdraw() public onlyOwner {
        payable(msg.sender).transfer(address(this).balance);
    }

    function supportsInterface(
        bytes4 interfaceId
    )
        public
        view
        virtual
        override(ERC721Enumerable, AccessControlEnumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
