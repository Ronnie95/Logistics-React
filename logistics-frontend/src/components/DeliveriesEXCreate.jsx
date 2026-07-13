import React, { useState, useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import api from "../services/api";


function DeliveryExCreate() {

    const navigate = useNavigate();

    const [deliveryExForm, setDeliveryExForm] = useState({
        exception_type: "",
        delivery: "",
        notes: ""
    });

    const [deliveries, setDeliveries] = useState([]);

    useEffect(() => {

        const getDeliveries = async () => {
    
            try {
    
                const response = await api.get("deliveries/");
    
                setCustomers(response.data);
    
            } catch (error) {
    
                console.log(error.response?.data || error.message);
    
            }
    
        };
    
        getDeliveries();
    
    }, []);

  


    const handleChange = (e) => {

        setDeliveryExForm({
            ...deliveryExForm,
            [e.target.name]: e.target.value
        });

    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await api.post("deliveryexceptions/", deliveryExForm);

            navigate("/deliveryexceptions");

        } catch (error) {

            console.log(error.response?.data || error.message);

        }

    };


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
                                name="notes"
                                value={deliveryExForm.notes}
                                onChange={handleChange}
                                required
                            />

                        </Form.Group>

                        <Form.Group className="mb-3">

                            <Form.Label>
                                Trucks
                            </Form.Label>

                            <Form.Select
                                name="exception_type"
                                value={deliveryExForm.exception_type}
                                onChange={handleChange}
                                required
                            >

                                <option value="">
                                    Select Exception
                                </option>

                                <option value="not_complete">
                                    Customer Not Home
                                </option>

                                <option value="in_progress">
                                    Bad Address
                                </option>

                                <option value="complete">
                                    Damaged
                                </option>

                                <option value="complete">
                                    Refused
                                </option>

                            </Form.Select>

                        </Form.Group>
                        <Form.Group className="mb-3">

                        <Form.Label>
                            Date
                        </Form.Label>

                        <Form.Select
                            name="delivery"
                            value={deliveryExForm.delivery}
                            onChange={handleChange}
                            required
                        >
                            <option value="">
                                Select Delivery
                            </option>

                            {delivery.map((del) => (
                                <option key={del.id} value={del.id}>
                                    {del.delivery}
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


export default DeliveryExCreate;