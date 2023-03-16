import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

function ModelList(){
    const[models, setModels] = useState([]);
    const fetchData = async () => {
        const modelUrl = `http://localhost:8100/api/models/`;
        const response = await fetch(modelUrl);

        if (response.ok) {
            const data = await response.json();
            setModels(data.models)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (

        <div className="my-5 container" id="formDiv">
            <h1 className="text-dark text-center my-3">Vehicle Models</h1>
                <div className="text-center">
                <h5
                className="text-center my-3">
                All of our current models are here!
                </h5>
                </div>
                <p className="text-center">
                <Link to="/models/new" className="btn createOnList border full-rounded" >Create A New Model</Link>
                </p>
                <div className="listRow row">
                    {models.map((model, id) => {

                        return(
                                <div key={id} className="${{`col-${12 / 3} mb-3`}} carCard shadow mb-5 bg-body-tertiary rounded">
                                <img src={ model.picture_url } className='img-thumbnail' style={{ width: 300, height: 175 }}  />
                                <div className="card-body">
                                    <h5 className="card-title text-white">{ model.manufacturer.name }</h5>
                                    <p><small className="text-white">{ model.name }</small></p>

                                </div>
                                </div>
                        );
                    })}
            </div>
        </div>
    );
}

export default ModelList;
