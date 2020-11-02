import React from 'react';
import { Card, Container, Button, Form, Col } from 'react-bootstrap';

function SignUp() {
    return (
        <Container>
        <Card className="login">
            <Card.Body>
            <Form>
            <h3 className= "email1" style={{ color: 'white', fontSize: '70px' }}>SIGN UP</h3>
            <div className="divider1"></div>

            <Form.Group>
                <h3 style={{ color: 'white', fontSize: '35px' }}>Name</h3>
                <Form.Row>
                    <Col>
                    <Form.Control placeholder="First name" />
                    </Col>
                    <Col>
                    <Form.Control placeholder="Last name" />
                    </Col>
                </Form.Row>
            </Form.Group>

            <Form.Group>
            <h3 style={{ color: 'white', fontSize: '35px' }}>Date of Birth</h3>
            <Form.Control placeholder="MM/DD/YYYY" />
            </Form.Group>

            <Form.Group>
            <h3 style={{ color: 'white', fontSize: '35px' }}>UserName</h3>
            <Form.Control placeholder="USERNAME" />
            </Form.Group>


            <Form.Group className="emailaddress" controlId="formBasicEmail">
            <Form.Label style={{ color: 'white', fontSize: '35px' }}>email address</Form.Label>
            <Form.Control type="email" placeholder="ENTER EMAIL" />
            <Form.Text className="text-light">
            your email is safe with us
            </Form.Text>
            </Form.Group>
            
            <h3 style={{ color: 'white', fontSize: '35px' }}>password</h3>
            <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Enter Password" />
            <Form.Control className="mt-2" type="password" placeholder="Confirm Password" />
            </Form.Group>
        
            <Button
                className="enter align-content-center relative"
                size="lg"
                variant="warning"
                block
                > SUBMIT
            </Button>
            </Form>
                            
            </Card.Body>
        </Card>
        </Container>
    );
}

export default SignUp;