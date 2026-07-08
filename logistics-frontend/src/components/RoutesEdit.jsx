import React, { useEffect, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";


function RoutesEdit() {

    const { id } = useParams();
    const navigate = useNavigate();


    const [routeForm, setRouteForm] = useState({
        route_name: "",
        route_date: "",
        trucks: "",
        trailers: ""
    });


    useEffect(() => {

        const getRoutes = async () => {

            try {

                const response = await api.get(`routes/${id}/`);

                setRouteForm(response.data);

            } catch (error) {

                console.log(error.response?.data || error.message);

            }

        };


        getRoutes();

    }, [id]);



    const handleChange = (e) => {

        setRouteForm({

            ...routeForm,

            [e.target.name]: e.target.value

        });

    };



    const handleSubmit = async (e) => {

        e.preventDefault();


        try {

            await api.put(
                `routes/${id}/`,
                routeForm
            );


            navigate(`/routes/${id}`);


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
                                    name="route_name"
                                    value={routeForm.route_name}
                                    onChange={handleChange}
                                    required
                                />
    
                            </Form.Group>
    
                            <Form.Group className="mb-3">
    
                                <Form.Label>
                                     Date
                                </Form.Label>
    
                                <Form.Control
                                    type="date"
                                    name="date"
                                    value={routeForm.route_date}
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
                                value={routeForm.trucks}
                                onChange={handleChange}
                                required
                            >
                                <option value="">
                                    Select Truck
                                </option>
    
                                {trucks.map((truck) => (
                                    <option key={truck.id} value={truck.id}>
                                        {truck.trucks}
                                    </option>
                                ))}
    
                            </Form.Select>
    
                            <Form.Select
                                name="trailers"
                                value={routeForm.trailers}
                                onChange={handleChange}
                                required
                            >
                                <option value="">
                                    Select Trailer
                                </option>
    
                                {trailers.map((trailer) => (
                                    <option key={trailer.id} value={trailer.id}>
                                        {trailer.trailers}
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

    export default RoutesEdit;
