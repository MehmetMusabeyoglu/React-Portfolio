import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Contact() {
    const [formState, setFormState] = useState(
        {
            name: "",
            email: "",
            message: "",
        }
    );
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = ({ target }) => {
        let newFormState = { ...formState };
        newFormState[target.name] = target.value;
        setFormState(newFormState);

        if (validateEmail(newFormState.email)) {
            setErrorMessage("");
        }
    };

    const checkEmail = () => {
        if (!validateEmail(formState.email)) {
            setErrorMessage("Invalid email entry!");
            return false;
        } else {
            return true;
        }
    };

    const checkName = () => {
        if (!formState.name.trim()) {
            setErrorMessage("Invalid name entry!");
            return false;
        } else {
            return true;
        }
    };

    const checkMessage = () => {
        if (!formState.message.trim()) {
            setErrorMessage("Invalid message entry!");
            return false;
        } else {
            return true;
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (checkEmail() && checkName() && checkMessage()) {
            alert(`Received your message. Thank you!`);
            setFormState(
                {
                    name: "",
                    email: "",
                    message: "",
                }
            )
        } else if (!checkName()) {
            alert(`Invalid name entry!`);
        } else if (!checkEmail()) {
            alert(`Invalid email entry!`);
        }
        else if (!checkMessage()) {
            alert(`Invalid message entry!`);
        }
        else {
            alert(`Cannot receive your message, try again!`);
        }
    };

    return (
        <div>
            <h2 className="text-center text-light pt-3"><b>Contact Me!</b></h2>
            <Form>
                <Form.Group className="m-2" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                        value={formState.name}
                        name="name"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Name" />
                </Form.Group>
                <Form.Group className="m-2" controlId="formBasicEmail">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control
                        value={formState.email}
                        name="email"
                        onChange={handleInputChange}
                        type="email"
                        placeholder="Email" />
                </Form.Group>
                <Form.Group className="m-2" controlId="formBasicMessage">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control
                        value={formState.message}
                        name="message"
                        onChange={handleInputChange}
                        as="textarea"
                        aria-label="Your message"
                        placeholder="Message" />
                </Form.Group>
                <Button className="m-4 text-dark" variant="secondary" onClick={handleFormSubmit} type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Contact;