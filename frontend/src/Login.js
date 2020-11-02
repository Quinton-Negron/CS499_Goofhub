import React from 'react';
import './Login.css'
import { Card, Container, Button, Form } from 'react-bootstrap';

function LogIn() {
    return (
   
        <Container>
        <Card className="login">
            <Card.Body>
            <Form>
            <h3 className= "email1" style={{ color: 'white', fontSize: '70px' }}>
                log in
            </h3><div className="divider1"></div>
            <Form.Group className="emailaddress" controlId="formBasicEmail">
            <Form.Label style={{ color: 'white', fontSize: '35px' }}>email address</Form.Label>
            <Form.Control type="email" placeholder="ENTER EMAIL" />
            <Form.Text className="text-light">
            your email is safe with us
            </Form.Text>
            </Form.Group>
            
            <h3 style={{ color: 'white', fontSize: '35px' }}>
                password
            </h3>
            <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Enter Password" />
            </Form.Group>
        
            <Button
                className="enter align-content-center relative"
                size="lg"
                variant="warning"
                block
                > Log in
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
                className="enter align-content-center relative"
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