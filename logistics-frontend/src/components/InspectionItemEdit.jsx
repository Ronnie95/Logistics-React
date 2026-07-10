import React, { useEffect, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";


function InspectionItemEdit() {

    const { id } = useParams();
    const navigate = useNavigate();


    const [inspectionItemEditForm, setInspectionItemEditForm] = useState({
        inspection: "",
        item_name: "",
        passed: "",
        notes: ""
    });


    useEffect(() => {

        const getInspectionItems = async () => {

            try {

                const response = await api.get(`inspectionitems/${id}/`);

                setInspectionItemEditForm(response.data);

            } catch (error) {

                console.log(error.response?.data || error.message);

            }

        };


        getInspectionItems();

    }, [id]);



    const handleChange = (e) => {

        setInspectionItemEditForm({

            ...inspectionItemEditForm,

            [e.target.name]: e.target.value

        });

    };



    const handleSubmit = async (e) => {

        e.preventDefault();


        try {

            await api.put(
                `inspectionitems/${id}/`,
                inspectionItemEditForm
            );


            navigate(`/inspectionitems/${id}`);


        } catch (error) {

            console.log(error.response?.data || error.message);

        }


        return (

            <div className="container mt-4">
    
                <Card>
    
                    <Card.Body>
    
                        <Card.Title>
                            Create a Record
                        </Card.Title>
    
    
                        <Form onSubmit={handleSubmit}>
    
    
                            <Form.Group className="mb-3">
    
                                <Form.Label>
                                    Truck
                                </Form.Label>
    
                                <Form.Control
                                    type="text"
                                    name="inspection"
                                    value={inspectionItemForm.inspection}
                                    onChange={handleChange}
                                    required
                                />
    
                            </Form.Group>
    
                            <Form.Group className="mb-3">
    
                                <Form.Label>
                                     Description
                                </Form.Label>
    
                                <Form.Control
                                    type="text"
                                    name="item_name"
                                    value={inspectionItemForm.item_name}
                                    onChange={handleChange}
                                    required
                                />
    
                                <Form.Control
                                    type="text"
                                    name="passed"
                                    value={inspectionItemForm.passed}
                                    onChange={handleChange}
                                    required
                                />
    
                            </Form.Group>
    
                            <Form.Group className="mb-3">
    
                                <Form.Label>
                                    Status
                                </Form.Label>
    
                                <Form.Select
                                    name="notes"
                                    value={inspectionItemForm.notes}
                                    onChange={handleChange}
                                    required
                                >
    
                                    <option value="">
                                        Select Status
                                    </option>
    
                                    <option value="not_complete">
                                        True
                                    </option>
    
                                    <option value="in_progress">
                                        False
                                    </option>
    
                                </Form.Select>
    
                            </Form.Group>
                    
                            <Button 
                                variant="primary" 
                                type="submit"
                            >
                                Submit Record
                            </Button>
    
    
                        </Form>
    
    
                    </Card.Body>
    
                </Card>
    
            </div>
    
        );
    }
    }

    export default InspectionItemEdit;
