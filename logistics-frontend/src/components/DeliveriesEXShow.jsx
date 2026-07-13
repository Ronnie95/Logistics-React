import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useParams, useNavigate, Link } from "react-router-dom";
import api from "../services/api";


function DeliveryExDetail() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [deliveryEx, setDeliveryEx] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        const getDeliveryEx = async () => {

            try {

                const response = await api.get(`deliveryexceptions/${id}/`);

                setDeliveryEx(response.data);

            } catch (error) {

                console.log(error.response?.data || error.message);

            } finally {

                setLoading(false);

            }

        };


        getDeliveryEx();

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
                        {deliveryEx.exception_type}
                    </Card.Title>


                    <Card.Text>

                        <strong>Route Date:</strong>
                        <p>
                            {deliveryEx.delivery}
                        </p>


                        <strong>Truck:</strong>
                        <p>
                            {deliveryEx.notes}
                        </p>

                    </Card.Text>



                    <Link to={`/deliveryexceptions/${id}/edit`}>

                        <Button 
                            variant="warning"
                            className="me-2"
                        >
                            Edit
                        </Button>

                    </Link>

                    <Button
                        variant="secondary"
                        onClick={() => navigate("/deliveries")}
                    >
                        Back
                    </Button>


                </Card.Body>

            </Card>

        </div>

    );

}


export default DeliveryExDetail;