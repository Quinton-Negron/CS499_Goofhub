import React from 'react';
import './Login.css'
import { Card, Container, Button, Form } from 'react-bootstrap';

function LogIn() {
    return (
   
        <Container>
        <Card className="login">
            <Card.Body>
            <Form>
            <Card.Title className= "email1">log in</Card.Title>
            <div className="divider1"></div>
            <Form.Group className="emailaddress" controlId="formBasicEmail">
            <Form.Label className="fontlabel">EMAIL ADDRESS</Form.Label>
            <Form.Control required type="email" placeholder="Enter email" />
            </Form.Group>
                        
            <Form.Group controlId="formBasicPassword">
            <Form.Label className="fontlabel">PASSWORD</Form.Label>
            <Form.Control required type="password" placeholder="Enter password" />
            </Form.Group>
        
            <Button
                className="enter align-content-center relative"
                size="lg"
                variant="warning"
                block
                > LOG IN
            </Button>
            </Form>
            <Button
                className="enter1 align-content-center relative"
                size="lg"
                variant="warning"
                href="Forgotpassword"
                block
                > FORGOT PASSWORD
            </Button>
            <div className="divider2"></div>
            <Button
                className="enter align-content-center relative  mb-5"
                size="lg"
                variant="warning"
                href="Signup"
                block
                > SIGN UP HERE
            </Button>        
            </Card.Body>
        </Card>
        </Container>
   
    );
}
export default LogIn;