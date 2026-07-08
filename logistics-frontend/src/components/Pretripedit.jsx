import React, { useEffect, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";


function PreTripEdit() {

    const { id } = useParams();
    const navigate = useNavigate();


    const [preTripForm, setPreTripForm] = useState({
        trucks: "",
        completed_at: "",
        overall_passed: ""
    });


    useEffect(() => {

        const getPreTrips = async () => {

            try {

                const response = await api.get(`pretrips/${id}/`);

                setPreTripForm(response.data);

            } catch (error) {

                console.log(error.response?.data || error.message);

            }

        };


        getPreTrips();

    }, [id]);



    const handleChange = (e) => {

        setPreTripForm({

            ...preTripForm,

            [e.target.name]: e.target.value

        });

    };



    const handleSubmit = async (e) => {

        e.preventDefault();


        try {

            await api.put(
                `pretrips/${id}/`,
                preTripForm
            );


            navigate(`/pretrips/${id}`);


        } catch (error) {

            console.log(error.response?.data || error.message);

        }


        return (

            <div className="container mt-4">
    
                <Card>
    
                    <Card.Body>
    
                        <Card.Title>
                            Create a Pretrip
                        </Card.Title>
    
    
                        <Form onSubmit={handleSubmit}>
    
    
                            <Form.Group className="mb-3">
    
                                <Form.Label>
                                    Truck
                                </Form.Label>
    
                                <Form.Control
                                    type="text"
                                    name="trucks"
                                    value={preTripForm.trucks}
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
                                    name="completed_at"
                                    value={preTripForm.completed_at}
                                    onChange={handleChange}
                                    required
                                />
    
                            </Form.Group>
    
                            <Form.Group className="mb-3">
    
                                <Form.Label>
                                    Pass or Fail
                                </Form.Label>
    
                                <Form.Select
                                    name="overall_passed"
                                    value={preTripForm.overall_passed}
                                    onChange={handleChange}
                                    required
                                >
    
                                    <option value="">
                                        Yes
                                    </option>
    
                                    <option value="not_complete">
                                        no
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
    
    
                            </Form.Group>
    
    
                            <Button 
                                variant="primary" 
                                type="submit"
                            >
                                Submit Pre-Trip
                            </Button>
    
    
                        </Form>
    
    
                    </Card.Body>
    
                </Card>
    
            </div>
    
        );
    

    }
    }

    export default RoutesEdit;
