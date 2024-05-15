import React from "react";
import Table from 'react-bootstrap/Table';

const Allindices = () => {
  return (
    <div>
      <div className="container topMargine">
        <h4>All Indices</h4>
        <div className="table-responsive">
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Index Name</th>
        <th>Last Traded</th>
        <th>Day change</th>
        <th>High</th>
        <th>Low</th>
        <th>open</th>
        <th>prev.close</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>@mdo</td>
        <td>@mdo</td>
        <td>@mdo</td>
        <td>@mdo</td>
      </tr>
    </tbody>
  </Table>
</div>
      </div>
    </div>
  );
};

export default Allindices;
