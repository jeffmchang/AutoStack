import React from 'react';

function VehicleList( ){
    return (
        <div className="my-5 container">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Vehicle Model Name</th>
                        <th>Manufacturer</th>
                        <th>Picture</th>
                    </tr>
                </thead>
                <tbody>
                    {vehicles.map((vehicle, id) => {
                    return(
                        <tr key={id}>
                            <td>{ vehicle.name }</td>
                            <td>{ vehicle.manufacturer }</td>
                            <td>
                                <img src= { vehicle.picture_url } />
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
}
