import React from 'react';

function ManuList({manufacturers}) {
    return (
        <div className="container" id="formDiv">
            <h1 className="text-dark text-center my-3">Manufacturers</h1>
            <h5
                className="text-center my-3">
                These are all of our current manufacturers!
            </h5>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>Manufacturers</th>
                    </tr>
                </thead>
                <tbody>
                    {manufacturers.map((manufacturer, id) => {
                        return (
                            <tr key={id}>
                                <td>{manufacturer.name}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );

}

export default ManuList;
