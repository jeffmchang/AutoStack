import React from 'react';

function SalesPeopleList({salespersons}){
    return (
      <div className="container" id="formDiv">
        <h1 className="text-dark text-center my-3">Sales People</h1>
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th>Sales People</th>
                    <th>Employee #</th>
                </tr>
            </thead>
            <tbody>
                {salespersons.map((person) => {
                    return (
                        <tr key={person.id}>
                            <td>{person.name}</td>
                            <td>{person.employee_number}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
    )
  }

export default SalesPeopleList;
