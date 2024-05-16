import React, { useState } from "react";
import "./Navbar.css";
import { IoSearch } from "react-icons/io5";
import Vertical from "./verticalNavbar/Vertical";

const Navbar = ({searchData}) => {
  const [data1,setData] = useState();
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const query = event.target.elements.search.value;
    try {
      const response = await axios.get(`http://localhost:4000/search?q=${query}`);
      const data = response.data;
      console.log(data);
      setData(data);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    searchData(data1)
  };
 
  return (
    <>
      <div className="navbar1">
        <div className="container">
          <div className="navbar-stock">
            <div className="logo">
              <div className="img-logo">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/017/744/376/small/stock-exchange-market-with-chart-png.png"
                  alt="..."
                />
              </div>
              <h4>Stock Market</h4>
            </div>
            <div className="nav-search" onSubmit={handleSubmit}>
              <input type="text" name="search" required />
              <IoSearch className="search-icon" />
            </div>
            <div className="">
              <ul className="nav-links">
                <li>
                  <a href="#">Explore</a>
                </li>
                <li className="center">
                  <a href="#">Investments</a>
                </li>
              </ul>
            </div>
            <div>
              <Vertical/>
            </div>
            
            {/* <div className="logo">
              <div className="img-logo">
                <img
                  src="https://cdn-icons-png.freepik.com/256/1077/1077063.png?semt=ais_hybrid"
                  alt=""
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
