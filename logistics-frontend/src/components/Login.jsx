import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";


function Login() {

    const [loginForm, setLoginForm] = useState({
        username: "",
        password: "",
    });

    const [error, setError] = useState("");

    const navigate = useNavigate();


    const handleChange = (e) => {
        setLoginForm({
            ...loginForm,
            [e.target.name]: e.target.value
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const response = await api.post("api/token/", loginForm);


            localStorage.setItem(
                "access",
                response.data.access
            );


            localStorage.setItem(
                "refresh",
                response.data.refresh
            );


            navigate("/home");


        } catch (err) {

            setError("Invalid username or password");

            console.log(err);

        }
    };


    return (

        <>

            <h2>Login</h2>


            {error && (
                <p>{error}</p>
            )}


            <Form onSubmit={handleSubmit}>


                <Form.Group className="mb-3">


                    <Form.Control
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={loginForm.username}
                        onChange={handleChange}
                        required
                    />


                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={loginForm.password}
                        onChange={handleChange}
                        required
                    />


                </Form.Group>


                <Button 
                    variant="primary"
                    type="submit"
                >
                    Login
                </Button>


            </Form>


            <p>
                Don't have an account?{" "}
                <Link to="/register">
                    Register
                </Link>
            </p>


        </>

    );
}


export default Login;