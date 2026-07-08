import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useParams, useNavigate, Link } from "react-router-dom";
import api from "../services/api";


function PreTripDetail() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [preTrip, setPreTrip] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        const getPreTrips = async () => {

            try {

                const response = await api.get(`pretrips/${id}/`);

                setPreTrip(response.data);

            } catch (error) {

                console.log(error.response?.data || error.message);

            } finally {

                setLoading(false);

            }

        };


        getPreTrips();

    }, [id]);



    const deletePreTrips = async () => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this pretrip?"
        );


        if (!confirmDelete) {
            return;
        }


        try {

            await api.delete(`pretrips/${id}/`);

            navigate("/pretrips");

        } catch (error) {

            console.log(error.response?.data || error.message);

        }

    };



    if (loading) {
        return <h3>Loading Pretrip...</h3>;
    }


    if (!ticket) {
        return <h3>Pretrip not found</h3>;
    }



    return (

        <div className="container mt-4">

            <Card>

                <Card.Body>

                    <Card.Title>
                        {preTrip.trucks}
                    </Card.Title>


                    <Card.Text>

                        <strong>Pretrip Date:</strong>
                        <p>
                            {preTrip.completed_at}
                        </p>


                        <strong>Pass or fail:</strong>
                        <p>
                            {preTrip.overall_passed}
                        </p>


                    </Card.Text>



                    <Link to={`/pretrips/${id}/edit`}>

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
                        onClick={() => navigate("/pretrips")}
                    >
                        Back
                    </Button>


                </Card.Body>

            </Card>

        </div>

    );

}


export default PreTripDetail;