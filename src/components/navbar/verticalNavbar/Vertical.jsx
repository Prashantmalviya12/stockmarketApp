import React, { useState } from "react";
import "./Vertical.css";
import { VscThreeBars } from "react-icons/vsc";
import { IoSearchSharp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

const Vertical = () => {
  const [scrolldown, setScrollDown] = useState(false);
  const [verSearch, setsearch] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const query = event.target.elements.search.value;
    console.log(query);
    // try {
    //   const response = await axios.get(`http://localhost:4000/search?q=${query}`);
    //   console.log(response.data); // Use the data however you need
    // } catch (error) {
    //   console.error('Error fetching data:', error);
    // }
  };

  return (
    <>
      <div className="vertical-navbar-items">
        <div className="vertical-icon">
          <form
            action=""
            className="search-ver"
            onSubmit={handleSubmit}
            name="search"
          >
            <input
              type="text"
              placeholder="search"
              name="search"
              className={`input-vertical ${
                verSearch ? "vertical-search-down" : "vertical-search-up"
              }`}
            />
            <IoSearchSharp
              className={` icon-search ${
                verSearch ? "vertical-search-down" : "vertical-search-up"
              }`}
            />
          </form>
          <IoSearchSharp
            className="icon"
            onClick={() => setsearch(!verSearch)}
          />
          {scrolldown ? (
            <RxCross1
              className="icon"
              onClick={() => {
                setScrollDown(false);
              }}
            />
          ) : (
            <VscThreeBars
              className="icon"
              onClick={() => {
                setScrollDown(true);
              }}
            />
          )}
        </div>
        <div
          className={`vertical-nav ${scrolldown ? "scrolldown" : "scrollUp"}`}
        >
          <ul className="vertical-links">
            <li>
              <a href="#">stock</a>
            </li>
            <li className="center">
              <a href="#">Matual Funds</a>
            </li>
            <li>
              <a href="#">Explore</a>
            </li>
            <li className="center">
              <a href="#">Investments</a>
            </li>
          </ul>
        </div>
        {/* <li className="upward">
                  <a href="#">
                    <IoIosNotificationsOutline />
                  </a>
                </li>
                <li className="forward">
                  <a href="#">
                    <CiWallet />
                  </a>
                </li>
                <li className="forward">
                  <a href="#">
                    <IoCartOutline />
                  </a>
                </li> */}
      </div>
    </>
  );
};

export default Vertical;
