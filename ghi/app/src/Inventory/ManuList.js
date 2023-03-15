import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ManuList() {
    const [manufacturers, setManufacturers] = useState([]);
    const fetchData = async () => {
        const listUrl = `http://localhost:8100/api/manufacturers/`;
        const response = await fetch(listUrl);


        if (response.ok) {
            const data = await response.json();
            setManufacturers(data.manufacturers);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container" id="formDiv">
            <h1 className="text-dark text-center my-3">Manufacturers</h1>
            <h5
                className="text-center my-3">
                These are all of our current manufacturers!
            </h5>
            <p></p>
            <p className="text-center">
                <Link to="/manufacturers/new" className="btn createOnList border full-rounded" >Create A New Manufacturer</Link>
            </p>
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
