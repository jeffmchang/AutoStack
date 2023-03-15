import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import '/app/src/css/button.css'

function AppointmentList( ){

    // fetch appointments & only show if property finished =false
    const[appointments, setAppointments] = useState([]);
    const fetchAppointments = async () => {
        const response = await fetch('http://localhost:8080/api/appointments/');
        const data = await response.json();
        if (response.ok){
            const finishedAppointments = data.appointments.filter((appointment) => !appointment.finished);
            setAppointments(finishedAppointments);
        }
    };

    useEffect(() => {
        fetchAppointments();
    }, []);

    //delete
    const deleteAppointment = async (event) => {
        const appointmentsUrl = `http://localhost:8080/api/appointment/${event.id}/`
        const fetchConfig = { method: "DELETE"};

        const response = await fetch(appointmentsUrl, fetchConfig)
        if (response.ok){
            fetchAppointments()
        }
    }

    //continuously update the appointments that are finished
    const handleFinished = async (event) =>{
        const data = {}
        data["finished"] = true
        const finishedUrl = `http://localhost:8080/api/appointment/${event.id}/`
        const response = await fetch(finishedUrl);
        const fetchConfig = {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        await fetch(finishedUrl, fetchConfig);
        await fetchAppointments();
    }

    useEffect(() => {
        fetchAppointments();
    }, []);

    return (
        <div className="my-5 container" id="formDiv">
            <h1 className="text-dark fw-bold text-center my-3">Service Appointments</h1>
            <h5
                className="text-center my-3">
                Your appointment will show up here once you create one!
                <br />
                <br />
                <p>
                <Link to="/appointments/new" className="btn createOnList border full-rounded" >Schedule a new appointment</Link>
                </p>
            </h5>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>Vin</th>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Reason</th>
                        <th>Technician</th>
                        <th>VIP</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((appointment, id) => {
                    return(
                        <tr key={id}>
                            <td>{ appointment.vin }</td>
                            <td>{ appointment.customer_name }</td>
                            <td>{ new Date (appointment.date).toLocaleDateString() }</td>
                            <td>{ new Date(appointment.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }</td>
                            <td>{ appointment.reason }</td>
                            <td>{ appointment.technician.name }</td>
                            <td>{appointment.vip ? "👑" : "❌" } </td>
                            <td>
                                <button className="canceled__btn" onClick={() => deleteAppointment(appointment)}>
                                    Cancel
                                </button>
                                <p> </p>
                                <button className="shadow__btn" onClick={() => handleFinished(appointment)}>
                                    Finished
                                </button>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
}

export default AppointmentList;
