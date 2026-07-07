import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import api from "../services/api";

function Trailers() {

    const [trailers, setTrailers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const getTrailers = async () => {

            try {

                const response = await api.get("trailers/");

                setTrailers(response.data);

            } catch (err) {

                setError("Unable to load Trailers.");

                console.log(err);

            } finally {

                setLoading(false);

            }

        };

        getTrailers();

    }, []);

    if (loading) {
        return <h3>Loading Trailers...</h3>;
    }

    if (error) {
        return <h3>{error}</h3>;
    }

    return (

        <div className="container mt-4">

            <div className="d-flex justify-content-between mb-4">

                <h2>Trailers</h2>

                <Link to="/customers/new">
                    <Button>Create a Trailer</Button>
                </Link>

            </div>

            {trailers.length === 0 ? (

                <p>No Trailers found.</p>

            ) : (

                trailers.map((trailer) => (

                    <Card
                        className="mb-3"
                        key={trailer.id}
                    >

                        <Card.Body>

                            <Card.Title>
                                {trailer.trailer_number}
                            </Card.Title>

                            <Card.Text>
                                {trailer.trailer_option}
                            </Card.Text>

                            <Link to={`/trailers/${trailer.id}`}>

                                <Button
                                    variant="outline-primary"
                                >
                                    View Trailer
                                </Button>

                            </Link>

                        </Card.Body>

                    </Card>

                ))

            )}

        </div>

    );

}

export default Trailers;