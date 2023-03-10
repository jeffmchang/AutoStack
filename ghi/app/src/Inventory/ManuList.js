import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ManuList() {
    const [manufacturers, setManufacturers] = useState([]);
    const [load, setLoad] = useState(false);

    const fetchData = async () => {
        const listUrl = `http://localhost:8100/api/manufacturers/`;
        const response = await fetch(listUrl);


        if (response.ok) {
            const data = await response.json();
            setManufacturers(data.manufacturers);
        }
        if (true) {
            setLoad(!load);
        }
    }

    useEffect(() => {
        fetchData();
    }, [load]);

    return (
        <div className="container">
            <h1 className="card display-5 text-dark fw-bold text-center my-3">MANUFACTURERS</h1>
            <table className="table table-striped">
                <thead>
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
                    <tr><th><Link to="/manufacturers/new" className="btn btn-primary btn-md" >Create</Link></th></tr>
                </tbody>
            </table>
        </div>
    );

}

export default ManuList;
