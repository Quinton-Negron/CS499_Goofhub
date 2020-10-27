import React from 'react';
import './Login.css'
import { Card, Container, Button, Form } from 'react-bootstrap';

const Login = props => ( 
   <Form>
        <div className='lower'> <Container className = 'responsive'>
        <Card className="login">
            <Card.Body className>
                <Card.Title className= "email">
                <h3 style={{ color: 'white', fontSize: '70px' }}>
                    login
                </h3><div className="divider"></div>
                </Card.Title>

                <Card.Title>
                    <h3 style={{ color: 'white', fontSize: '35px' }}>
                        email address
                    </h3>
                <Card.Subtitle className="emailaddress">
                    <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    your email is safe with us.
                    </Form.Text>
                    </Form.Group>

                <Card.Title>
                <h3 style={{ color: 'white', fontSize: '35px' }}>
                    password
                </h3>
                <Card.Subtitle className="emailaddress">
                    <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                    </Form.Group></Card.Subtitle>
                </Card.Title>
                </Card.Subtitle>
                </Card.Title>

                <div class="container">
                <div class="row justify-content-lg-center">
                <div class="col-20">
                        <Button
                        className ="enter"
                            size="lg"
                            style={{
                                width: "350px"
                            }}
                            variant="warning"
                            block
                            > Login
                        </Button>
                    </div>
                </div>
                </div>
                
        </Card.Body>
    </Card></Container>
    </div></Form>
)
    
export default Login;