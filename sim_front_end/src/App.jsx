import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/Home/Home";
import Donate from "./components/Donate/Donate";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Donate" element={<Donate />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
