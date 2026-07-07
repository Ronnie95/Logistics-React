import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import api from "../services/api";

function Customers() {

    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const getCustomers = async () => {

            try {

                const response = await api.get("customers/");

                setCustomers(response.data);

            } catch (err) {

                setError("Unable to load customers.");

                console.log(err);

            } finally {

                setLoading(false);

            }

        };

        getCustomers();

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

            {customers.length === 0 ? (

                <p>No Comments found.</p>

            ) : (

                customers.map((customer) => (

                    <Card
                        className="mb-3"
                        key={customer.id}
                    >

                        <Card.Body>

                            <Card.Title>
                                {customer.name}
                            </Card.Title>

                            <Card.Text>
                                {customer.address}
                            </Card.Text>

                            <Card.Text>
                                {customer.city}
                            </Card.Text>

                            <Card.Text>
                                {customer.state}
                            </Card.Text>


                            <Link to={`/customers/${customer.id}`}>

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

export default Customers;