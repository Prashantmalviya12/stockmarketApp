import React, { useState } from "react";
import "./Navbar.css";
import { IoSearch } from "react-icons/io5";
import Vertical from "./verticalNavbar/Vertical";
import { useNavigate } from "react-router-dom";

const Navbar = ({searchData}) => {
  const [data1,setData] = useState();
  const navigate = useNavigate()
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const query = event.target.elements.search.value;
    setError(null);
    setData(null);
    try {
      const response = await axios.get(`http://localhost:4000/api/search?q=${query}`);
      const data = response.data;

      if (response.status === 200 && data) {
        console.log(data);
        setData(data);
        navigate('/searchStock');
      } else {
        setError('No data found for the given symbol');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data');
    }
    searchData(data1)
    console.log(query);
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
            <form className="nav-search" onSubmit={handleSubmit} >
              <input type="text" name="search" required />
              <IoSearch className="search-icon" />
            </form>
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
