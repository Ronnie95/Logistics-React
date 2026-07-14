import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import api from "../services/api";

function RouteStart() {

    const [routes, setRoutes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const getRoutes = async () => {

            try {

                const response = await api.get("routes/");

                setRoutes(response.data);

            } catch (err) {

                setError("Unable to load routes.");

                console.log(err);

            } finally {

                setLoading(false);

            }

        };

        getRoutes();

    }, []);

    if (loading) {
        return <h3>Loading Routes...</h3>
    };

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

            {routes.length === 0 ? (

                <p>No Routes found.</p>

            ) : (

                routes.map((route) => (

                    <Card
                        className="mb-3"
                        key={route.id}
                    >

                        <Card.Body>

                            <Card.Title>
                                {route.route_name}
                            </Card.Title>

                            <Card.Text>
                                {route.route_date}
                            </Card.Text>


                            <Link to={`/routes/${route.id}`}>

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

export default RouteStart;