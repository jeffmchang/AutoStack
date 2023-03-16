import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

function SalesList() {
    const navigate = useNavigate();
    // LIST----------------------------------------------------------------
    const [sales, setSale] = useState([]);
    const fetchData = async () => {
        const saleUrl = `http://localhost:8090/api/sales/`;
        const response = await fetch(saleUrl);

        if (response.ok) {
        const data = await response.json();
        setSale(data.sales);
        }
    };

    useEffect(() => {
        fetchData();

    }, []);

    const handleClick = () => {
        navigate('/sales/new');
    }

    return (
        <div className="container" id="formDiv">
        <h1 className="text-dark text-center my-3">
            All Sales History
        </h1>
        <p></p>
        <div className="text-center">
        <button onClick={handleClick} className="btn createOnList border full-rounded">Create a Sale</button>
        </div>
        <p></p>
        <table className="table">
            <thead>
            <tr>
                <th>Salesperson Name</th>
                <th>Employee Number</th>
                <th>Customer Name</th>
                <th>Automobile VIN</th>
                <th>Sale Price</th>
            </tr>
            </thead>
            <tbody>
            {sales.map((sale, id) => {
                return (
                <tr key={id}>
                    <td>{sale.salesperson}</td>
                    <td>{sale.employee_number}</td>
                    <td>{sale.customer}</td>
                    <td>{sale.vin}</td>
                    <td>{sale.sale_price}</td>
                </tr>
                );
            })}
            </tbody>
        </table>

        </div>
    );
}
export default SalesList;
