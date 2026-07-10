import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import api from "../services/api";

function InspectionItem() {

    const [inspectionItems, setInspectionItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const getInspectionItems = async () => {

            try {

                const response = await api.get("inspectionitems/");

                setInspectionItems(response.data);

            } catch (err) {

                setError("Unable to load Items.");

                console.log(err);

            } finally {

                setLoading(false);

            }

        };

        getInspectionItems();

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

                inspectionItems.map((inspection) => (

                    <Card
                        className="mb-3"
                        key={items.id}
                    >

                        <Card.Body>

                            <Card.Title>
                                {inspection.inspection}
                            </Card.Title>

                            <Card.Text>
                                {inspection.item_name}
                            </Card.Text>


                            <Card.Text>
                                {inspection.passed}
                            </Card.Text>


                            <Card.Text>
                                {inspection.notes}
                            </Card.Text>


                            <Link to={`/inspectionitems/${inspection.id}`}>

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

export default InspectionItem;