import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '/app/src/css/button.css'
import { useHistory } from "react-router-dom";

function AutoList() {

    const [autos, setAutos] = useState([]);
    const fetchData = async () => {
        const autoUrl = `http://localhost:8100/api/automobiles/`;
        const response = await fetch(autoUrl);


        if (response.ok) {
            const data = await response.json();
            setAutos(data.autos);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container" id="formDiv">
            <h1 className="text-dark text-center my-3">Automobiles</h1>
            <h5
                className="text-center my-3">
                All of our current in stock vehicles are here!
            </h5>
            <p></p>
            <p className="text-center">
                <Link to="/automobiles/new" className="btn createOnList border full-rounded" >Add A New Automobile</Link>
            </p>
            <table className="table">
                <thead>
                    <tr>
                        <th>VIN</th>
                        <th>Color</th>
                        <th>Year</th>
                        <th>Model</th>
                        <th>Manufacturer</th>
                    </tr>
                </thead>
                <tbody>
                    {autos.map((auto, id) => {
                        return (
                            <tr key={id}>
                                <td>{auto.vin}</td>
                                <td>{auto.color}</td>
                                <td>{auto.year}</td>
                                <td>{auto.model.name}</td>
                                <td>{auto.model.manufacturer.name}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );

}

export default AutoList;
{/* <button className="full-rounded createOnList">
    <Link to="/automobiles/new" className="btn btn-secondary btn-md" >Create A New Automobile</Link>
    <span>Create a NewAutomobile</span>
    <div class="border full-rounded"></div>
</button> */}

{/* <Link to="/automobiles/new" className="btn btn-secondary btn-md" >Create A New Automobile</Link> */}
