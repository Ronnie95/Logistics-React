import React, { useEffect, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";


function CustomerEdit() {

    const { id } = useParams();
    const navigate = useNavigate();


    const [customerForm, setCustomerForm] = useState({
        name: "",
        address: "",
        city: "",
        state: ""
    });


    useEffect(() => {

        const getCustomer = async () => {

            try {

                const response = await api.get(`customers/${id}/`);

                setCustomerForm(response.data);

            } catch (error) {

                console.log(error.response?.data || error.message);

            }

        };


        getCustomer();

    }, [id]);



    const handleChange = (e) => {

        setCustomerForm({

            ...customerForm,

            [e.target.name]: e.target.value

        });

    };



    const handleSubmit = async (e) => {

        e.preventDefault();


        try {

            await api.put(
                `customers/${id}/`,
                customerForm
            );


            navigate(`/customers/${id}`);


        } catch (error) {

            console.log(error.response?.data || error.message);

        }


    return (

        <div className="container mt-4">

            <Card>

                <Card.Body>

                    <Card.Title>
                        Create Customer
                    </Card.Title>


                    <Form onSubmit={handleSubmit}>


                        <Form.Group className="mb-3">

                            <Form.Label>
                                Name
                            </Form.Label>

                            <Form.Control
                                type="text"
                                name="name"
                                value={customerForm.name}
                                onChange={handleChange}
                                required
                            />

                        </Form.Group>



                        <Form.Group className="mb-3">

                            <Form.Label>
                                Address
                            </Form.Label>

                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="address"
                                value={customerForm.address}
                                onChange={handleChange}
                                required
                            />

                        </Form.Group>



                        <Form.Group className="mb-3">

                            <Form.Label>
                                City
                            </Form.Label>

                            <Form.Control
                                type="text"
                                name="city"
                                value={customerForm.city}
                                onChange={handleChange}
                                required
                            />

                        </Form.Group>



                        <Form.Group className="mb-3">

                            <Form.Label>
                                State
                            </Form.Label>

                            <Form.Control
                                type="text"
                                name="state"
                                value={customerForm.state}
                                onChange={handleChange}
                                required
                            />

                        </Form.Group>

                        <Button 
                            variant="primary" 
                            type="submit"
                        >
                            Create Customer
                        </Button>


                    </Form>


                </Card.Body>

            </Card>

        </div>

    );

    }
    }

    export default CustomerEdit;
