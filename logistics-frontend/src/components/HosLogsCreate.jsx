import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import api from "../services/api";


function HosLogsCreate() {

    const navigate = useNavigate();

    const [hosForm, setHosForm] = useState({
        hos_type: "",
        start_time: "",
        end_time: "",
        
    });


    const handleChange = (e) => {

        setHosForm({
            ...hosForm,
            [e.target.name]: e.target.value
        });

    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await api.post("hoslogs/", hosForm);

            navigate("/hoslogs");

        } catch (error) {

            console.log(error.response?.data || error.message);

        }

    };


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
                                value={hosForm.hos_type}
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
                                name="start_time"
                                value={hosForm.start_time}
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
                                name="end_time"
                                value={hosForm.end_time}
                                onChange={handleChange}
                                required
                            />

                        </Form.Group>

                    </Form>


                </Card.Body>

            </Card>

        </div>

    );

}


export default HosLogsCreate;