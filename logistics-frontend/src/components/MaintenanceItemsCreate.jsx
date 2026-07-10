import React, { useState, useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import api from "../services/api";


function MaintenanceItemCreate() {

    const navigate = useNavigate();

    const [maintenanceItemForm, setMaintenanceItemForm] = useState({
        maintenance_record: "",
        description: "",
        labor_hours: "",
        completed: ""
    });

    const [mainenanceRecords, setMaintenanceRecords] = useState([]);

    useEffect(() => {

        const getMaintenanceRecord = async () => {
    
            try {
    
                const response = await api.get("maintenancerecords/");
    
                setMaintenanceRecords(response.data);
    
            } catch (error) {
    
                console.log(error.response?.data || error.message);
    
            }
    
        };
    
        getMaintenanceRecord();
    
    }, []);


    const handleChange = (e) => {

        setMaintenanceItemForm({
            ...maintenanceItemForm,
            [e.target.name]: e.target.value
        });

    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await api.post("maintenanceitems/", maintenanceItemForm);

            navigate("/maintenanceitems");

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
                                name="maintenance_record"
                                value={items.maintenance_record}
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
                                name="description"
                                value={items.description}
                                onChange={handleChange}
                                required
                            />

                            <Form.Control
                                type="text"
                                name="labor_hours"
                                value={items.labor_hours}
                                onChange={handleChange}
                                required
                            />

                        </Form.Group>

                        <Form.Group className="mb-3">

                            <Form.Label>
                                Status
                            </Form.Label>

                            <Form.Select
                                name="completed"
                                value={items.completed}
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


export default MaintenanceItemCreate;