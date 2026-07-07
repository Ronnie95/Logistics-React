import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import api from "../services/api";

function Trucks() {

    const [trucks, setTrucks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const getTrucks = async () => {

            try {

                const response = await api.get("trucks/");

                setCustomers(response.data);

            } catch (err) {

                setError("Unable to load Trucks.");

                console.log(err);

            } finally {

                setLoading(false);

            }

        };

        getTrucks();

    }, []);

    if (loading) {
        return <h3>Loading Trucks...</h3>;
    }

    if (error) {
        return <h3>{error}</h3>;
    }

    return (

        <div className="container mt-4">

            <div className="d-flex justify-content-between mb-4">

                <h2>Trucks</h2>

                <Link to="/customers/new">
                    <Button>Create a Truck</Button>
                </Link>

            </div>

            {customers.length === 0 ? (

                <p>No Trucks found.</p>

            ) : (

                trucks.map((truck) => (

                    <Card
                        className="mb-3"
                        key={truck.id}
                    >

                        <Card.Body>

                            <Card.Title>
                                {truck.truck_number}
                            </Card.Title>

                            <Card.Text>
                                {truck.make}
                            </Card.Text>

                            <Card.Text>
                                {truck.model}
                            </Card.Text>

                            <Card.Text>
                                {truck.year}
                            </Card.Text>

                            <Card.Text>
                                {truck.truck_options}
                            </Card.Text>


                            <Link to={`/trucks/${truck.id}`}>

                                <Button
                                    variant="outline-primary"
                                >
                                    View Truck
                                </Button>

                            </Link>

                        </Card.Body>

                    </Card>

                ))

            )}

        </div>

    );

}

export default Trucks;