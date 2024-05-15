import "./App.css";
import Footer from "./components/Stocks/Footer/Footer";
import Stock from "./components/Stocks/Stock";
import Allindices from "./components/allIndice/Allindices";
import Topgainer from "./components/alltopGainer/Topgainer";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Stock />} path="/" />
          <Route element={<Allindices/>} path="/allindices"/>
          <Route element={<Topgainer/>} path="/allTopGainer"/>    
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
