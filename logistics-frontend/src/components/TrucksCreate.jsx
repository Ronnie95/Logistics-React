import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import api from "../services/api";


function TruckCreate() {

    const navigate = useNavigate();

    const [truckForm, setTruckForm] = useState({
        truck_number: "",
        make: "",
        model: "",
        year: "",
        truck_options: ""
        
    });


    const handleChange = (e) => {

        setTruckForm({
            ...truckForm,
            [e.target.name]: e.target.value
        });

    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await api.post("trucks/", truckForm);

            navigate("/trucks");

        } catch (error) {

            console.log(error.response?.data || error.message);

        }

    };


    return (

        <div className="container mt-4">

            <Card>

                <Card.Body>

                    <Card.Title>
                        Create Truck
                    </Card.Title>


                    <Form onSubmit={handleSubmit}>


                        <Form.Group className="mb-3">

                            <Form.Label>
                                Truck Number
                            </Form.Label>

                            <Form.Control
                                type="integer"
                                name="truck_number"
                                value={truckForm.truck_number}
                                onChange={handleChange}
                                required
                            />

                        </Form.Group>



                        <Form.Group className="mb-3">

                            <Form.Label>
                                Make
                            </Form.Label>

                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="make"
                                value={truckForm.make}
                                onChange={handleChange}
                                required
                            />

                        </Form.Group>



                        <Form.Group className="mb-3">

                            <Form.Label>
                                Model
                            </Form.Label>

                            <Form.Control
                                type="text"
                                name="model"
                                value={customerForm.city}
                                onChange={handleChange}
                                required
                            />

                        </Form.Group>



                        <Form.Group className="mb-3">

                            <Form.Label>
                                Year
                            </Form.Label>

                            <Form.Control
                                type="text"
                                name="year"
                                value={truckForm.year}
                                onChange={handleChange}
                                required
                            />
                        <Form.Select
                                name="truck_options"
                                value={truckForm.truck_options}
                                onChange={handleChange}
                                required
                            >

                                <option value="">
                                    Select Truck
                                </option>

                                <option value="not_complete">
                                    Single Cab
                                </option>

                                <option value="in_progress">
                                    Day Cab
                                </option>

                                <option value="complete">
                                    Flat Bed
                                </option>

                            </Form.Select>
                        </Form.Group>
                        
                        <Button 
                            variant="primary" 
                            type="submit"
                        >
                            Create Truck
                        </Button>


                    </Form>


                </Card.Body>

            </Card>

        </div>

    );

}


export default TruckCreate;