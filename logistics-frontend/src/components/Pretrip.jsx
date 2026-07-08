import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import api from "../services/api";

function PreTrips() {

    const [preTrip, setPreTrip] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const getPreTrips = async () => {

            try {

                const response = await api.get("pretrips/");

                setPreTrip(response.data);

            } catch (err) {

                setError("Unable to load Pretrip.");

                console.log(err);

            } finally {

                setLoading(false);

            }

        };

        getPreTrips();

    }, []);

    if (loading) {
        return <h3>Loading Pre-Trips...</h3>;
    }

    if (error) {
        return <h3>{error}</h3>;
    }

    return (

        <div className="container mt-4">

            <div className="d-flex justify-content-between mb-4">

                <h2>PreTrip</h2>

                <Link to="/tickets/new">
                    <Button>Create a PreTrip</Button>
                </Link>

            </div>

            {pretrips.length === 0 ? (

                <p>No Pretrip found.</p>

            ) : (

                preTrips.map((preTrip) => (

                    <Card
                        className="mb-3"
                        key={preTrip.id}
                    >

                        <Card.Body>

                            <Card.Title>
                                {preTrip.trucks}
                            </Card.Title>

                            <Card.Text>
                                {preTrip.completed_at}
                            </Card.Text>

                            <Card.Text>
                                {preTrip.overall_passed}
                            </Card.Text>



                            <Link to={`/pretrips/${preTrip.id}`}>

                                <Button
                                    variant="outline-primary"
                                >
                                    View Pretrip
                                </Button>

                            </Link>

                        </Card.Body>

                    </Card>

                ))

            )}

        </div>

    );

}

export default PreTrips;