import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useParams, useNavigate, Link } from "react-router-dom";
import api from "../services/api";


function HosDetail() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [hosLog, setHoslogs] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        const getHosLog = async () => {

            try {

                const response = await api.get(`hoslogs/${id}/`);

                setHoslogs(response.data);

            } catch (error) {

                console.log(error.response?.data || error.message);

            } finally {

                setLoading(false);

            }

        };


        getHosLog();

    }, [id]);




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
                        {hosLog.hos_type}
                    </Card.Title>


                    <Card.Text>

                        <strong>Address:</strong>
                        <p>
                            {hosLog.start_time}
                        </p>


                        <strong>City:</strong>
                        <p>
                            {hosLog.end_time}
                        </p>
                    </Card.Text>



                    <Link to={`/hoslogs/${id}/edit`}>

                        <Button 
                            variant="warning"
                            className="me-2"
                        >
                            Edit
                        </Button>

                    </Link>



                    <Button
                        variant="secondary"
                        onClick={() => navigate("/hoslogs")}
                    >
                        Back
                    </Button>


                </Card.Body>

            </Card>

        </div>

    );

}


export default HosDetail;