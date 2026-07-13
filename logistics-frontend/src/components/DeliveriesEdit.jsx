import React, { useEffect, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";


function DeliveryEdit() {

    const { id } = useParams();
    const navigate = useNavigate();


    const [deliveryForm, setDeliveryForm] = useState({
        routes: "",
        customer: "",
        order_number: "",
        status: "",
        delivered_at: ""
    });


    useEffect(() => {

        const getDeliveries = async () => {

            try {

                const response = await api.get(`deliveries/${id}/`);

                setDeliveryForm(response.data);

            } catch (error) {

                console.log(error.response?.data || error.message);

            }

        };


        getDeliveries();

    }, [id]);



    const handleChange = (e) => {

        setRouteForm({

            ...deliveryForm,

            [e.target.name]: e.target.value

        });

    };



    const handleSubmit = async (e) => {

        e.preventDefault();


        try {

            await api.put(
                `deliveries/${id}/`,
                routeForm
            );


            navigate(`/deliveries/${id}`);


        } catch (error) {

            console.log(error.response?.data || error.message);

        }


        return (

            <div className="container mt-4">
    
                <Card>
    
                    <Card.Body>
    
                        <Card.Title>
                            Create a Route
                        </Card.Title>
    
    
                        <Form onSubmit={handleSubmit}>
    
    
                            <Form.Group className="mb-3">
    
                                <Form.Label>
                                    Route Name
                                </Form.Label>
    
                                <Form.Control
                                    type="text"
                                    name="routes"
                                    value={deliveryForm.routes}
                                    onChange={handleChange}
                                    required
                                />
    
                            </Form.Group>
    
                            <Form.Group className="mb-3">
    
                                <Form.Label>
                                     Date
                                </Form.Label>
    
                                <Form.Control
                                    type="text"
                                    name="customers"
                                    value={deliveryForm.customer}
                                    onChange={handleChange}
                                    required
                                />
    
                            </Form.Group>
    
                            <Form.Group className="mb-3">
    
                                <Form.Label>
                                    Trucks
                                </Form.Label>
    
                                <Form.Select
                                    name="trucks"
                                    value={routeForm.trucks}
                                    onChange={handleChange}
                                    required
                                >
    
                                    <option value="">
                                        Select Truck
                                    </option>
    
                                    <option value="not_complete">
                                        Low
                                    </option>
    
                                    <option value="in_progress">
                                        Medium
                                    </option>
    
                                    <option value="complete">
                                        High
                                    </option>
    
                                </Form.Select>
    
                            </Form.Group>
                            <Form.Group className="mb-3">
    
                            <Form.Label>
                                Date
                            </Form.Label>
    
                            <Form.Select
                                name="trucks"
                                value={deliveryForm.routes}
                                onChange={handleChange}
                                required
                            >
                                <option value="">
                                    Select Route
                                </option>
    
                                {routes.map((route) => (
                                    <option key={route.id} value={route.id}>
                                        {route.routes}
                                    </option>
                                ))}
    
                            </Form.Select>
                            <Form.Select
                                name="trucks"
                                value={deliveryForm.customer}
                                onChange={handleChange}
                                required
                            >
                                <option value="">
                                    Select Customer
                                </option>
    
                                {customers.map((customer) => (
                                    <option key={customer.id} value={customer.id}>
                                        {customer.customers}
                                    </option>
                                ))}
    
                            </Form.Select>
    
                            </Form.Group>
    
    
                            <Button 
                                variant="primary" 
                                type="submit"
                            >
                                Submit Route
                            </Button>
    
    
                        </Form>
    
    
                    </Card.Body>
    
                </Card>
    
            </div>
    
        );

    }
    }

    export default DeliveryEdit;
