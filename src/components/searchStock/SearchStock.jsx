import React from 'react'

const SearchStock = ({searchData1}) => {
  return (
    <div>
        <Card style={{ width: "18rem" }} className="mt-4" key={index}>
    <Card.Body>
      <Card.Title>{searchData1["Meta Data"]["2. Symbol"]}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted mt-4">
        {searchData1["Time Series (Daily)"]["2024-05-14"]["1. open"]}
      </Card.Subtitle>
    </Card.Body>
  </Card>
  </div>
  )
}

export default SearchStock