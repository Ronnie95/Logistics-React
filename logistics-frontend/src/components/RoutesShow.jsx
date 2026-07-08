import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useParams, useNavigate, Link } from "react-router-dom";
import api from "../services/api";


function RouteDetail() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [route, setRoute] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        const getroute = async () => {

            try {

                const response = await api.get(`routes/${id}/`);

                setRoute(response.data);

            } catch (error) {

                console.log(error.response?.data || error.message);

            } finally {

                setLoading(false);

            }

        };


        getroute();

    }, [id]);



    const deleteRoute = async () => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this ticket?"
        );


        if (!confirmDelete) {
            return;
        }


        try {

            await api.delete(`routes/${id}/`);

            navigate("/routes");

        } catch (error) {

            console.log(error.response?.data || error.message);

        }

    };



    if (loading) {
        return <h3>Loading Route...</h3>;
    }


    if (!ticket) {
        return <h3>Route not found</h3>;
    }



    return (

        <div className="container mt-4">

            <Card>

                <Card.Body>

                    <Card.Title>
                        {route.route_name}
                    </Card.Title>


                    <Card.Text>

                        <strong>Route Date:</strong>
                        <p>
                            {route.route_date}
                        </p>


                        <strong>Truck:</strong>
                        <p>
                            {route.trucks}
                        </p>


                        <strong>Trailer:</strong>
                        <p>
                            {route.trailers}
                        </p>

                    </Card.Text>



                    <Link to={`/routes/${id}/edit`}>

                        <Button 
                            variant="warning"
                            className="me-2"
                        >
                            Edit
                        </Button>

                    </Link>


                    <Button
                        variant="danger"
                        onClick={deleteTicket}
                        className="me-2"
                    >
                        Delete
                    </Button>



                    <Button
                        variant="secondary"
                        onClick={() => navigate("/routes")}
                    >
                        Back
                    </Button>


                </Card.Body>

            </Card>

        </div>

    );

}


export default RouteDetail;