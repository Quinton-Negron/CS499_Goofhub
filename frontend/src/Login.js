import React from 'react';
import './Login.css'
import { Card, Container, Button, Form } from 'react-bootstrap';

function LogIn() {
    return (
   <Form>
        <Container className = 'responsive'>
        <Card className="login">
            <Card.Body>
                <Card.Title className= "email">
                <h3 style={{ color: 'white', fontSize: '70px' }}>
                    log in
                </h3><div className="divider1"></div>
                </Card.Title>

                <Card.Title>
                    <h3 style={{ color: 'white', fontSize: '35px' }}>
                        email address
                    </h3>
                <Card.Subtitle className="emailaddress">
                    <Form.Group controlId="formBasicEmail">
                    <Form.Control className="" type="email" placeholder="ENTER EMAIL" />
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
               
                </Card.Subtitle>
                </Card.Title>

                <div className="container">
                <div className="row justify-content-lg-center">
                <div className="col-20">
                        <Button
                        className ="enter"
                            size="lg"
                            style={{
                                width: "350px"
                            }}
                            variant="warning"
                            block
                            > Log in
                        </Button>
                        <div className="divider2"></div>
                        <Button
                        className ="enter"
                            size="lg"
                            style={{
                                width: "350px"
                            }}
                            variant="warning"
                            block
                            > SIGN UP HERE
                        </Button>
                    </div>
                </div>
                </div>
                
        </Card.Body>
    </Card></Container>
   </Form>
    );
}
export default LogIn;