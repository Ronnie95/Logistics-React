import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useParams, useNavigate, Link } from "react-router-dom";
import api from "../services/api";


function MaintenanceRecordDetail() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [maintenanceRecord, setMaintenanceRecord] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        const getMaintenanceRecord = async () => {

            try {

                const response = await api.get(`maintenancerecords/${id}/`);

                setMaintenanceRecord(response.data);

            } catch (error) {

                console.log(error.response?.data || error.message);

            } finally {

                setLoading(false);

            }

        };


        getroute();

    }, [id]);





    if (loading) {
        return <h3>Loading Route...</h3>;
    }


    if (!ticket) {
        return <h3>Route not found</h3>;
    }



    return (

        <div className="container mt-4">

            <Card>

                <Card.Body>

                    <Card.Title>
                        {maintenanceRecord.trucks}
                    </Card.Title>


                    <Card.Text>

                        <strong>Opened Date:</strong>
                        <p>
                            {maintenanceRecord.opened_date}
                        </p>


                        <strong>status:</strong>
                        <p>
                            {maintenanceRecord.status}
                        </p>


                        <strong>Completed date:</strong>
                        <p>
                            {maintenanceRecord.completed_date}
                        </p>

                    </Card.Text>



                    <Link to={`/maintenancerecords/${id}/edit`}>

                        <Button 
                            variant="warning"
                            className="me-2"
                        >
                            Edit
                        </Button>

                    </Link>


                    <Button
                        variant="danger"
                        onClick={deleteTicket}
                        className="me-2"
                    >
                        Delete
                    </Button>



                    <Button
                        variant="secondary"
                        onClick={() => navigate("/maintenancerecords")}
                    >
                        Back
                    </Button>


                </Card.Body>

            </Card>

        </div>

    );

}


export default MaintenanceRecordDetail;