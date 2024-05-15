import React from "react";
import Table from 'react-bootstrap/Table';


const Topgainer = () => {
  return (
    <div>
      <div className="container topMargine">
        <h4>All Top Gainer</h4>
        <div className="table-responsive">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Company Name</th>
                <th>Market Price</th>
                <th>52W Low</th>
                <th>53W High</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>Otto</td>
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

export default Topgainer;
