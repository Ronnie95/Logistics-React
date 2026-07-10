import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import api from "../services/api";

function MaintenanceItems() {

    const [maintenanceItems, setMaintenanceItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const getMaintenanceItems = async () => {

            try {

                const response = await api.get("maintenanceitems/");

                setMaintenanceItems(response.data);

            } catch (err) {

                setError("Unable to load Items.");

                console.log(err);

            } finally {

                setLoading(false);

            }

        };

        getMaintenanceItems();

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
                    <Button>Create a Maintenance Items</Button>
                </Link>

            </div>

            {maintenanceItems.length === 0 ? (

                <p>No Routes found.</p>

            ) : (

                maintenanceItems.map((items) => (

                    <Card
                        className="mb-3"
                        key={items.id}
                    >

                        <Card.Body>

                            <Card.Title>
                                {items.maintenance_record}
                            </Card.Title>

                            <Card.Text>
                                {items.description}
                            </Card.Text>


                            <Card.Text>
                                {items.labor_hours}
                            </Card.Text>


                            <Card.Text>
                                {items.completed}
                            </Card.Text>


                            <Link to={`/maintenanceitems/${items.id}`}>

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

export default MaintenanceItems;