import { useState } from "react";
import "./App.css";
import Footer from "./components/Stocks/Footer/Footer";
import Stock from "./components/Stocks/Stock";
import Allindices from "./components/allIndice/Allindices";
import Topgainer from "./components/alltopGainer/Topgainer";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchStock from "./components/searchStock/SearchStock";

function App() {
  const[searchData1,setSearchData1] = useState()
  const searchData = (data) => {
    setSearchData1(data)
  }
  return (
    <>
      <BrowserRouter>
        <Navbar searchData={searchData}/>
        <Routes>
          <Route element={<Stock />} path="/" />
          <Route element={<Allindices/>} path="/allindices"/>
          <Route element={<Topgainer/>} path="/allTopGainer"/>   
          <Route element={<SearchStock searchData1={searchData1}/>} path="/searchStock"/>   
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
