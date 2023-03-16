import React, {useState, useEffect} from 'react';
import ManuForm from './ManuForm';
import ManuList from './ManuList';

function ManuWrapper(){
    const [manufacturers, setManufacturers] = useState([]);
    const fetchManufacturers = async () => {
        const listUrl = 'http://localhost:8100/api/manufacturers/';
        const response = await fetch(listUrl);

        if (response.ok) {
            const data = await response.json();
            setManufacturers(data.manufacturers);
        }
    }

    useEffect(() => {
        fetchManufacturers();
    }, []);

    return (
        <div className="row">
            <div className="col-md-6">
            <ManuForm fetchManufacturers ={fetchManufacturers}/>
            </div>
            <div className="col-md-6">
            <ManuList manufacturers={manufacturers}/>
            </div>
        </div>
        );
    }

export default ManuWrapper;
