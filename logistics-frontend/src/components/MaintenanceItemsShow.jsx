import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useParams, useNavigate, Link } from "react-router-dom";
import api from "../services/api";


function MaintenanceItemDetail() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [maintenanceItem, setMaintenanceItem] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        const getMaintenanceItem = async () => {

            try {

                const response = await api.get(`maintenanceitem/${id}/`);

                setMaintenanceItem(response.data);

            } catch (error) {

                console.log(error.response?.data || error.message);

            } finally {

                setLoading(false);

            }

        };


        getMaintenanceItem();

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
                        {maintenanceItem.maintenance_record}
                    </Card.Title>


                    <Card.Text>

                        <strong>Opened Date:</strong>
                        <p>
                            {maintenanceItem.description}
                        </p>


                        <strong>status:</strong>
                        <p>
                            {maintenanceItem.labor_hours}
                        </p>


                        <strong>Completed date:</strong>
                        <p>
                            {maintenanceItem.completed}
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


export default MaintenanceItemDetail;