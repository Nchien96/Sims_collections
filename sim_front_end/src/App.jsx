import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/Home/Home";
import Ico from "./components/Ico/Ico";
import Donate from "./components/Donate/Donate";
import Maketplace from "./components/Maketplace/Maketplace";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Donate" element={<Donate />}></Route>
        <Route path="/Ico" element={<Ico />}></Route>
        <Route path="/Maketplace" element={<Maketplace />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
