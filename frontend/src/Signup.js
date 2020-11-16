import React from 'react';
import { Card, Container, Button, Form, Col } from 'react-bootstrap';

function SignUp() {
    return (
        <Container>
        <Card className="login">
            <Card.Body className="ml-5 mr-5">
            <Form>
            <Card.Title className= "email1">SIGN UP</Card.Title>
            <div className="divider1"></div>

            <Form.Group>
                <Form.Label className="fontlabel">Name</Form.Label>
                <Form.Row >
                    <Col>
                    <Form.Control required placeholder="First name" />
                    </Col>
                    <Col>
                    <Form.Control required placeholder="Last name" />
                    </Col>
                </Form.Row>
            </Form.Group>

            <Form.Group>
            <Form.Label className="fontlabel">Date of Birth</Form.Label>
            <Form.Control required  placeholder="MM/DD/YYYY" />
            </Form.Group>

            <Form.Group>
            <Form.Label className="fontlabel">UserName</Form.Label>
            <Form.Control  required  placeholder="Username" />
            </Form.Group>

            <Form.Group className="emailaddress" controlId="formBasicEmail">
            <Form.Label className="fontlabel">email address</Form.Label>
            <Form.Control required type="email" placeholder="name@example.com" />
            <Form.Text className="text-light">YOUR EMAIL IS SAFE WITH US</Form.Text>
            </Form.Group>
            
            <Form.Group controlId="formBasicPassword">
            <Form.Label className="fontlabel">password</Form.Label>
            <Form.Control required type="password" placeholder="Enter password" />
            </Form.Group>
            
        
            <Button
                className="enter1 align-content-center relative"
                size="lg"
                variant="warning"
                block
                > SIGN UP
            </Button>
            </Form>

            <div className="divider2"></div>
            <Button
                className="enter align-content-center relative  mb-5"
                size="lg"
                variant="warning"
                href="Login"
                block
                > LOG IN HERE
            </Button>      
                            
            </Card.Body>
        </Card>
        </Container>
    );
}

export default SignUp;