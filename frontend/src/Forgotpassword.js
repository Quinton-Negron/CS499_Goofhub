import React from 'react';
import './Login.css'
import { Card, Container, Button, Form } from 'react-bootstrap';

function ForgotPassword() {
    return (
   
        <Container>
        <Card className="login">
            <Card.Body>
            <Form>
            <Card.Title className= "email1">PASSWORD RESET</Card.Title>
            <div className="divider1"></div>
            <Form.Group className="emailaddress" controlId="formBasicEmail">
            <Form.Label className="fontlabel">EMAIL ADDRESS</Form.Label>
            <Form.Control required type="email" placeholder="Enter email" />
            </Form.Group>
                        
           
            <Button
                className="enter align-content-center relative"
                size="lg"
                variant="warning"
                block
                >SEND ME A RESET LINK
            </Button>
            </Form>
           
            <div className="divider2"></div>
            <Button
                className="enter align-content-center relative  mb-5"
                size="lg"
                variant="warning"
                href="LogIn"
                block
                >LOG IN HERE
            </Button>        
            </Card.Body>
        </Card>
        </Container>
   
    );
}
export default ForgotPassword;