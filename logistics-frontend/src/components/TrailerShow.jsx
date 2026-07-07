import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useParams, useNavigate, Link } from "react-router-dom";
import api from "../services/api";


function TrailerDetail() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [trailer, setTrailer] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        const getTrailer = async () => {

            try {

                const response = await api.get(`trailers/${id}/`);

                setTrailer(response.data);

            } catch (error) {

                console.log(error.response?.data || error.message);

            } finally {

                setLoading(false);

            }

        };


        getTrailer();

    }, [id]);



    const deleteTrailer = async () => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this trailer?"
        );


        if (!confirmDelete) {
            return;
        }


        try {

            await api.delete(`trailers/${id}/`);

            navigate("/trailers");

        } catch (error) {

            console.log(error.response?.data || error.message);

        }

    };



    if (loading) {
        return <h3>Loading Trailers...</h3>;
    }


    if (!customer) {
        return <h3>Trailer not found</h3>;
    }



    return (

        <div className="container mt-4">

            <Card>

                <Card.Body>

                    <Card.Title>
                        {trailer.trailer_number}
                    </Card.Title>


                    <Card.Text>

                        <strong>Make:</strong>
                        <p>
                            {trailer.trailer_options}
                        </p>

                        <strong>year:</strong>
                       
                    </Card.Text>



                    <Link to={`/trailers/${id}/edit`}>

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
                        onClick={() => navigate("/trailers")}
                    >
                        Back
                    </Button>


                </Card.Body>

            </Card>

        </div>

    );

}


export default TrailerDetail;