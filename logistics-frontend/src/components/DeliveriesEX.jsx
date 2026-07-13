import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import api from "../services/api";

function DeliveryEx() {

    const [deliveryEx, setDeliveryEx] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const getDeliveryEx = async () => {

            try {

                const response = await api.get("deliveryexceptions/");

                setDeliveryEx(response.data);

            } catch (err) {

                setError("Unable to load routes.");

                console.log(err);

            } finally {

                setLoading(false);

            }

        };

        getDeliveryEx();

    }, []);

    if (loading) {
        return <h3>Loading Routes...</h3>;
    }

    if (error) {
        return <h3>{error}</h3>;
    }

    return (

        <div className="container mt-4">

            <div className="d-flex justify-content-between mb-4">

                <h2>Routes</h2>

                <Link to="/tickets/new">
                    <Button>Create a Route</Button>
                </Link>

            </div>

            {deliveryEx.length === 0 ? (

                <p>No Routes found.</p>

            ) : (

                deliveryEx.map((delex) => (

                    <Card
                        className="mb-3"
                        key={delex.id}
                    >

                        <Card.Body>

                            <Card.Title>
                                {delex.exception_type}
                            </Card.Title>

                            <Card.Text>
                                {delex.customers}
                            </Card.Text>

                            <Card.Text>
                                {delex.delivery}
                            </Card.Text>
                            
                            <Card.Text>
                                {delex.notes}
                            </Card.Text>


                            <Link to={`/deliveryexceptions/${delex.id}`}>

                                <Button
                                    variant="outline-primary"
                                >
                                    View Route
                                </Button>

                            </Link>

                        </Card.Body>

                    </Card>

                ))

            )}

        </div>

    );

}

export default DeliveryEx;