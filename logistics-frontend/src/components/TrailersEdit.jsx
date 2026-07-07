import React, { useEffect, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";


function TrailerEdit() {

    const { id } = useParams();
    const navigate = useNavigate();


    const [trailerForm, setTrailerForm] = useState({
        trailer_number: "",
        trailer_options: ""
       
    });


    useEffect(() => {

        const getTrailers = async () => {

            try {

                const response = await api.get(`trailers/${id}/`);

                setTrailerForm(response.data);

            } catch (error) {

                console.log(error.response?.data || error.message);

            }

        };


        getTrailers();

    }, [id]);



    const handleChange = (e) => {

        setTrailerForm({

            ...trailerForm,

            [e.target.name]: e.target.value

        });

    };



    const handleSubmit = async (e) => {

        e.preventDefault();


        try {

            await api.put(
                `trailers/${id}/`,
                trailerForm
            );


            navigate(`/trailer/${id}`);


        } catch (error) {

            console.log(error.response?.data || error.message);

        }


        return (

            <div className="container mt-4">
    
                <Card>
    
                    <Card.Body>
    
                        <Card.Title>
                            Create Trailer
                        </Card.Title>
    
    
                        <Form onSubmit={handleSubmit}>
    
    
                            <Form.Group className="mb-3">
    
                                <Form.Label>
                                    Trailer Number
                                </Form.Label>
    
                                <Form.Control
                                    type="integer"
                                    name="trailer_number"
                                    value={truckForm.truck_number}
                                    onChange={handleChange}
                                    required
                                />
    
                            </Form.Group>
    
    
                            <Form.Select
                                    name="trailer_options"
                                    value={trailerForm.trailer_options}
                                    onChange={handleChange}
                                    required
                                >
    
                                    <option value="">
                                        Select Trailer
                                    </option>
    
                                    <option value="not_complete">
                                        28 FT
                                    </option>
    
                                    <option value="in_progress">
                                        53 FT
                                    </option>
    
    
                                </Form.Select>
    
                            
                            <Button 
                                variant="primary" 
                                type="submit"
                            >
                                Create Trailer
                            </Button>
    
    
                        </Form>
    
    
                    </Card.Body>
    
                </Card>
    
            </div>
    
        );

    }
    }

    export default TruckEdit;
