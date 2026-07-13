import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useParams, useNavigate, Link } from "react-router-dom";
import api from "../services/api";


function DeliveryDetail() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [delivery, setDelivery] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        const getDelivery = async () => {

            try {

                const response = await api.get(`deliveries/${id}/`);

                setRoute(response.data);

            } catch (error) {

                console.log(error.response?.data || error.message);

            } finally {

                setLoading(false);

            }

        };


        getDelivery();

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
                        {delivery.routes}
                    </Card.Title>


                    <Card.Text>

                        <strong>Route Date:</strong>
                        <p>
                            {delivery.customer}
                        </p>


                        <strong>Truck:</strong>
                        <p>
                            {delivery.order_number}
                        </p>


                        <strong>Trailer:</strong>
                        <p>
                            {delivery.status}
                        </p>

                        <strong>Trailer:</strong>
                        <p>
                            {delivery.delivered_at}
                        </p>

                    </Card.Text>



                    <Link to={`/deliveries/${id}/edit`}>

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
                        onClick={() => navigate("/routes")}
                    >
                        Back
                    </Button>


                </Card.Body>

            </Card>

        </div>

    );

}


export default DeliveryDetail;