import React, { useState, useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import api from "../services/api";


function MaintenanceRecordCreate() {

    const navigate = useNavigate();

    const [maintenanceRecordForm, setMaintenanceRecordForm] = useState({
        trucks: "",
        status: "",
        opened_date: "",
        completed_date: ""
    });

    const [trucks, setTrucks] = useState([]);

    useEffect(() => {

        const getTrucks = async () => {
    
            try {
    
                const response = await api.get("trucks/");
    
                setTrucks(response.data);
    
            } catch (error) {
    
                console.log(error.response?.data || error.message);
    
            }
    
        };
    
        getTrucks();
    
    }, []);


    const handleChange = (e) => {

        setRouteForm({
            ...maintenanceRecordForm,
            [e.target.name]: e.target.value
        });

    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await api.post("maintenancerecords/", maintenanceRecordForm);

            navigate("/maintenancerecords");

        } catch (error) {

            console.log(error.response?.data || error.message);

        }

    };


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


export default MaintenanceRecordCreate;