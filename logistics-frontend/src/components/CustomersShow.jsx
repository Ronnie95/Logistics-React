import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useParams, useNavigate, Link } from "react-router-dom";
import api from "../services/api";


function CustomerDetail() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [customer, setCustomer] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        const getCustomer = async () => {

            try {

                const response = await api.get(`customers/${id}/`);

                setProject(response.data);

            } catch (error) {

                console.log(error.response?.data || error.message);

            } finally {

                setLoading(false);

            }

        };


        getCustomer();

    }, [id]);



    const deleteCustomer = async () => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this customer?"
        );


        if (!confirmDelete) {
            return;
        }


        try {

            await api.delete(`customers/${id}/`);

            navigate("/customers");

        } catch (error) {

            console.log(error.response?.data || error.message);

        }

    };



    if (loading) {
        return <h3>Loading Customer...</h3>;
    }


    if (!customer) {
        return <h3>Customer not found</h3>;
    }



    return (

        <div className="container mt-4">

            <Card>

                <Card.Body>

                    <Card.Title>
                        {customer.name}
                    </Card.Title>


                    <Card.Text>

                        <strong>Address:</strong>
                        <p>
                            {customer.address}
                        </p>


                        <strong>City:</strong>
                        <p>
                            {customer.city}
                        </p>


                        <strong>State:</strong>
                        <p>
                            {customer.state}
                        </p>

                    </Card.Text>



                    <Link to={`/customer/${id}/edit`}>

                        <Button 
                            variant="warning"
                            className="me-2"
                        >
                            Edit
                        </Button>

                    </Link>



                    <Button
                        variant="danger"
                        onClick={deleteProject}
                        className="me-2"
                    >
                        Delete
                    </Button>



                    <Button
                        variant="secondary"
                        onClick={() => navigate("/projects")}
                    >
                        Back
                    </Button>


                </Card.Body>

            </Card>

        </div>

    );

}


export default CustomerDetail;