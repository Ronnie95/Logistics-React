import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useParams, useNavigate, Link } from "react-router-dom";
import api from "../services/api";


function TruckDetail() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [truck, setTruck] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        const getTruck = async () => {

            try {

                const response = await api.get(`trucks/${id}/`);

                setProject(response.data);

            } catch (error) {

                console.log(error.response?.data || error.message);

            } finally {

                setLoading(false);

            }

        };


        getTruck();

    }, [id]);



    const deleteTruck = async () => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this truck?"
        );


        if (!confirmDelete) {
            return;
        }


        try {

            await api.delete(`trucks/${id}/`);

            navigate("/trucks");

        } catch (error) {

            console.log(error.response?.data || error.message);

        }

    };



    if (loading) {
        return <h3>Loading Trucks...</h3>;
    }


    if (!customer) {
        return <h3>Truck not found</h3>;
    }



    return (

        <div className="container mt-4">

            <Card>

                <Card.Body>

                    <Card.Title>
                        {truck.truck_number}
                    </Card.Title>


                    <Card.Text>

                        <strong>Make:</strong>
                        <p>
                            {truck.make}
                        </p>


                        <strong>Model:</strong>
                        <p>
                            {truck.model}
                        </p>


                        <strong>year:</strong>
                        <p>
                            {truck.year}
                        </p>

                        <strong>Truck Option:</strong>
                        <p>
                            {truck.truck_options}
                        </p>

                    </Card.Text>



                    <Link to={`/trucks/${id}/edit`}>

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
                        onClick={() => navigate("/trucks")}
                    >
                        Back
                    </Button>


                </Card.Body>

            </Card>

        </div>

    );

}


export default TruckDetail;