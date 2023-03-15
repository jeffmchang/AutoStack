import React, {useState, useEffect} from 'react';
import '/app/src/css/button.css'
import TechnicianForm from './TechnicianForm'
import TechnicianList from './TechList'


function TechnicianWrapper() {
    const [technicians, setTechnicians] = useState([]);
    const fetchTechnicians = async () => {
      const technicianUrl = 'http://localhost:8080/api/technicians/'
      const response = await fetch(technicianUrl)

      if (response.ok){
        const data = await response.json();
        setTechnicians(data.technicians)
      }
    }

    useEffect(() => {
      fetchTechnicians();
  }, []);

  return (
    <div className="row">
      <div className="col-md-6">
        <TechnicianForm fetchTechnicians ={fetchTechnicians}/>
      </div>
      <div className="col-md-6">
        <TechnicianList technicians={technicians}/>
      </div>
    </div>
  );
}
export default TechnicianWrapper;
