import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import api from "../services/api";

function Deliveries() {

    const [deliveries, setDeliveries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const getDeliveries = async () => {

            try {

                const response = await api.get("deliveries/");

                setDeliveries(response.data);

            } catch (err) {

                setError("Unable to load routes.");

                console.log(err);

            } finally {

                setLoading(false);

            }

        };

        getDeliveries();

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

            {deliveries.length === 0 ? (

                <p>No Routes found.</p>

            ) : (

                deliveries.map((del) => (

                    <Card
                        className="mb-3"
                        key={del.id}
                    >

                        <Card.Body>

                            <Card.Title>
                                {del.routes}
                            </Card.Title>

                            <Card.Text>
                                {del.customers}
                            </Card.Text>

                            <Card.Text>
                                {del.order_number}
                            </Card.Text>
                            
                            <Card.Text>
                                {del.status}
                            </Card.Text>

                            <Card.Text>
                                {del.delivered_at}
                            </Card.Text>


                            <Link to={`/deliveries/${route.id}`}>

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

export default Deliveries;