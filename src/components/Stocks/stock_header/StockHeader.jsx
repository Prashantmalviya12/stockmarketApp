import React from 'react'
import './Index.css'

const StockHeader = () => {
  return (
    <div>
        <div className="container topMargine">
        <div className="stock-folder">
            <div className="">
              <ul className="nav-links">
                <li>
                  <a href="#">stock</a>
                </li>
                <li className="center">
                  <a href="#">Matual Funds</a>
                </li>
              </ul>
            </div>
            <div className="timing-close">
              <p>Market Closes At 3:00AM Pacific Daylight Time</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default StockHeader