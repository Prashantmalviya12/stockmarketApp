import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import "./index.css";

const TopGainer = () => {
  const navigate = useNavigate();
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/stocks");
        const data = await response.json();
        console.log(data);

        if (data.length !== 0) {
          setStocks(data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchStocks();
  }, []);

  return (
    <div className="container topMargine">
      <div className="mt-3">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h4>Stock Lists</h4>
          <span onClick={() => navigate("/allindices")}>SEE MORE</span>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Row className="gap-2">
            {Array.isArray(stocks) &&
              stocks.map((stock, index) => (
                <Card style={{ width: "18rem" }} className="mt-4" key={index}>
                  <Card.Body>
                    <Card.Title>{stock["Meta Data"]["2. Symbol"]}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted mt-4">
                      {stock["Time Series (Daily)"]["2024-05-14"]["1. open"]}
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              ))}
          </Row>
        )}
      </div>
    </div>
  );
};

export default TopGainer;
