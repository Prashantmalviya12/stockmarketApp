import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import {useNavigate} from "react-router-dom"

const Index = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="container">
        <div className="topMargine " style={{ display:"flex",justifyContent:"space-between",alignItems:"center" }}>  
            <h4>Index</h4>
            <span onClick={() => {
              navigate('/allindices')
            }} >SEE MORE</span>
        </div>
        <Row className="gap-2">
          <Card style={{ width: "18rem" }} className="mt-4">
            <Card.Body>
              <Card.Title>Nifty 50</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                22,116.40<span>62.55(0.29%)</span>
              </Card.Subtitle>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className="mt-4">
            <Card.Body>
              <Card.Title>SENSEX</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                22,116.40<span>62.55(0.29%)</span>
              </Card.Subtitle>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className="mt-4">
            <Card.Body>
              <Card.Title>BANKNIFTY</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                22,116.40<span>62.55(0.29%)</span>
              </Card.Subtitle>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className="mt-4">
            <Card.Body>
              <Card.Title>FINNIFTY</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                21,26<span>62.55(0.29%)</span>
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Row>
      </div>
    </div>
  );
};

export default Index;
