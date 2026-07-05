import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Register() {

    const [registerForm, setRegisterForm] = useState({
        username: "",
        email: "",
        password: "",
        role: "",
    });

    const navigate = useNavigate();

    const BASE_URL = "http://localhost:8000/register/";

    const handleChange = (e) => {
        setRegisterForm({
            ...registerForm,
            [e.target.name]: e.target.value
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(BASE_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(registerForm)
            });


            if (!response.ok) {
                throw new Error("Registration failed");
            }


            const data = await response.json();

            console.log(data);

            // Send user to login after successful registration
            navigate("/login");


        } catch (error) {
            console.log(error.message);
        }
    };


    return (
        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3">

                <Form.Control
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={registerForm.username}
                    onChange={handleChange}
                />


                <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={registerForm.email}
                    onChange={handleChange}
                />


                <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={registerForm.password}
                    onChange={handleChange}
                />

                <Form.Control
                    type="role"
                    placeholder="role"
                    name="role"
                    value={registerForm.role}
                    onChange={handleChange}
                />
                


            </Form.Group>


            <Button 
                variant="primary" 
                type="submit"
            >
                Register
            </Button>


        </Form>
    );
}


export default Register;