import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import api from "../services/api";

function MaintenanceRecords() {

    const [maintenanceRecords, setMaintenanceRecords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const getMaintenanceRecords = async () => {

            try {

                const response = await api.get("maintenancerecords/");

                setMaintenanceRecords(response.data);

            } catch (err) {

                setError("Unable to load Records.");

                console.log(err);

            } finally {

                setLoading(false);

            }

        };

        getTickets();

    }, []);

    if (loading) {
        return <h3>Loading Records...</h3>;
    }

    if (error) {
        return <h3>{error}</h3>;
    }

    return (

        <div className="container mt-4">

            <div className="d-flex justify-content-between mb-4">

                <h2>Records</h2>

                <Link to="/tickets/new">
                    <Button>Create a Maintenance Record</Button>
                </Link>

            </div>

            {maintenanceRecords.length === 0 ? (

                <p>No Routes found.</p>

            ) : (

                maintenanceRecords.map((record) => (

                    <Card
                        className="mb-3"
                        key={record.id}
                    >

                        <Card.Body>

                            <Card.Title>
                                {record.trucks}
                            </Card.Title>

                            <Card.Text>
                                {records.status}
                            </Card.Text>


                            <Card.Text>
                                {records.opened_at}
                            </Card.Text>


                            <Card.Text>
                                {records.completed_date}
                            </Card.Text>


                            <Link to={`/routes/${record.id}`}>

                                <Button
                                    variant="outline-primary"
                                >
                                    View Records
                                </Button>

                            </Link>

                        </Card.Body>

                    </Card>

                ))

            )}

        </div>

    );

}

export default MaintenanceRecords;