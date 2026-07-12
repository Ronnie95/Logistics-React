import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import api from "../services/api";

function HosLogs() {

    const [hosLogs, setHosLogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const getHosLogs = async () => {

            try {

                const response = await api.get("hoslogs/");

                setCustomers(response.data);

            } catch (err) {

                setError("Unable to load customers.");

                console.log(err);

            } finally {

                setLoading(false);

            }

        };

        getHosLogs();

    }, []);

    if (loading) {
        return <h3>Loading Customers...</h3>;
    }

    if (error) {
        return <h3>{error}</h3>;
    }

    return (

        <div className="container mt-4">

            <div className="d-flex justify-content-between mb-4">

                <h2>Customers</h2>

                <Link to="/customers/new">
                    <Button>Create a Customer</Button>
                </Link>

            </div>

            {hosLogs.length === 0 ? (

                <p>No Comments found.</p>

            ) : (

                hosLogs.map((logs) => (

                    <Card
                        className="mb-3"
                        key={logs.id}
                    >

                        <Card.Body>

                            <Card.Title>
                                {logs.hos_type}
                            </Card.Title>

                            <Card.Text>
                                {logs.start_time}
                            </Card.Text>

                            <Card.Text>
                                {logs.end_time}
                            </Card.Text>


                            <Link to={`/hoslogs/${logs.id}`}>

                                <Button
                                    variant="outline-primary"
                                >
                                    View customer
                                </Button>

                            </Link>

                        </Card.Body>

                    </Card>

                ))

            )}

        </div>

    );

}

export default HosLogs;