import React, {useState, useEffect} from 'react';
import '/app/src/css/button.css'
import SalesPersonForm from './SalesPersonForm'
import SalesPeopleList from './SalesPeopleList'


function SalesWrapper() {
    const [salespersons, setsalespersons] = useState([]);
    const fetchSalesPeople = async () => {
      const salesPeopleUrl = 'http://localhost:8090/api/salespeople/'
      const response = await fetch(salesPeopleUrl)

      if (response.ok){
        const data = await response.json();
        setsalespersons(data.salespersons)
      }
    }

    useEffect(() => {
      fetchSalesPeople();
  }, []);

  return (
    <div className="row">
      <div className="col-md-6">
        <SalesPersonForm fetchSalesPeople ={fetchSalesPeople}/>
      </div>
      <div className="col-md-6">
        <SalesPeopleList salespersons={salespersons}/>
      </div>
    </div>
  );
}
export default SalesWrapper;
