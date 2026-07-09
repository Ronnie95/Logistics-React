import React, { useEffect, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";


function MaintenanceRecordEdit() {

    const { id } = useParams();
    const navigate = useNavigate();


    const [maintenanceRecordEditForm, setMaintenanceRecordEditForm] = useState({
        trucks: "",
        status: "",
        opened_date: "",
        completed_date: ""
    });


    useEffect(() => {

        const getMaintenanceRecords = async () => {

            try {

                const response = await api.get(`maintenanceRecords/${id}/`);

                setMaintenanceRecordEditForm(response.data);

            } catch (error) {

                console.log(error.response?.data || error.message);

            }

        };


        getMaintenanceRecords();

    }, [id]);



    const handleChange = (e) => {

        setMaintenanceRecordEditForm({

            ...maintenanceRecordEditForm,

            [e.target.name]: e.target.value

        });

    };



    const handleSubmit = async (e) => {

        e.preventDefault();


        try {

            await api.put(
                `maintenancerecords/${id}/`,
                routeForm
            );


            navigate(`/maintenancerecords/${id}`);


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
                                    name="trucks"
                                    value={maintenanceRecordForm.trucks}
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
                                    name="opened_date"
                                    value={maintenanceRecordForm.opened_date}
                                    onChange={handleChange}
                                    required
                                />
    
                                <Form.Control
                                    type="date"
                                    name="completed_date"
                                    value={maintenanceRecordForm.completed_date}
                                    onChange={handleChange}
                                    required
                                />
    
                            </Form.Group>
    
                            <Form.Group className="mb-3">
    
                                <Form.Label>
                                    Status
                                </Form.Label>
    
                                <Form.Select
                                    name="status"
                                    value={maintenanceRecordForm.status}
                                    onChange={handleChange}
                                    required
                                >
    
                                    <option value="">
                                        Select Status
                                    </option>
    
                                    <option value="not_complete">
                                        Open
                                    </option>
    
                                    <option value="in_progress">
                                        In Progress
                                    </option>
    
                                    <option value="complete">
                                        Completed
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

    export default MaintenanceRecordEdit;
