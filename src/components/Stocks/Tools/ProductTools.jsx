import React from 'react'
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

const ProductTools = () => {
  return (
    <div>
    <div className="container topMargine">
      <div className="mt-3 " style={{ display:"flex",justifyContent:"space-between",alignItems:"center" }}>  
          <h4>Products and Tools</h4>
      </div>
      <Row className="gap-2">
      <Card style={{ width: '14rem' }}>
      <Card.Img variant="top" src="https://storage.googleapis.com/groww-assets/web-assets/img/stock/fno_mint_light.svg" style={{width:"70px",height:"70px" ,margin:"10px auto"}} />
      <Card.Body>
      <Card.Title className='text-center'>Card Title</Card.Title>
      </Card.Body>
    </Card>
      <Card style={{ width: '14rem' }}>
      <Card.Img variant="top" src="	https://storage.googleapis.com/groww-assets/web-assets/img/stock/calendar_mint_light.svg" style={{width:"70px",height:"70px" ,margin:"10px auto"}} />
      <Card.Body>
      <Card.Title className='text-center'>Card Title</Card.Title>
      </Card.Body>
    </Card>
      <Card style={{ width: '14rem' }}>
      <Card.Img variant="top" src="https://storage.googleapis.com/groww-assets/web-assets/img/stock/intraday_mint_light.svg" style={{width:"70px",height:"70px" ,margin:"10px auto"}} />
      <Card.Body>
      <Card.Title className='text-center'>Card Title</Card.Title>
      </Card.Body>
    </Card>
      <Card style={{ width: '14rem' }}>
      <Card.Img variant="top" src="https://storage.googleapis.com/groww-assets/web-assets/img/stock/ipo_mint_light.svg" style={{width:"70px",height:"70px" ,margin:"10px auto"}} />
      <Card.Body>
      <Card.Title className='text-center'>Card Title</Card.Title>
      </Card.Body>
    </Card>
      <Card style={{ width: '14rem' }}>
      <Card.Img variant="top" src="https://storage.googleapis.com/groww-assets/web-assets/img/stock/screener_mint_light.svg" style={{width:"70px",height:"70px" ,margin:"10px auto"}} />
      <Card.Body>
      <Card.Title className='text-center'>Card Title</Card.Title>
      </Card.Body>
    </Card>
        
      </Row>
    </div>
  </div>
  )
}

export default ProductTools