import "./App";
import Header from "./components/Header";
import MySims from "./components/MySims";
import Footer from "./components/Footer";
import Sim from "./components/Sim";

function App() {
  return (
    <div className="">
      <div className="gradient-bg-hero">
        <Header />
        <Sim />
      </div>
      <MySims />
      <Footer />
    </div>
  );
}

export default App;
