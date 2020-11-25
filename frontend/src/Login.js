import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from "react-router-dom";
import './Login.css'
import { Card, Container, Button, Form } from 'react-bootstrap';
import { AuthContext } from "./auth/Auth";
import firebase from "./firebase/firebase";

function LogIn({ history }) {
    
    const handleLogin = useCallback(
        async event => {
          event.preventDefault();
          const { email, password } = event.target.elements;
         
          try {
            await firebase
              .auth()
              .signInWithEmailAndPassword(email.value, password.value);
              history.push("/");
          } catch (error) {
            alert(error);
          }
        },
        [history]
      );
    
      //if user is logged in going to this page redirects them to Home page
      const { currentUser } = useContext(AuthContext);
    
      if (currentUser) {
        return <Redirect to="/" />
      }
    return (
   
        <Container>
        <Card className="login">
            <Card.Body>
            <Form onSubmit={handleLogin}> 
            <Card.Title className= "email1">log in</Card.Title>
            <div className="divider1"></div>
            <Form.Group className="emailaddress" controlId="formBasicEmail">
            <Form.Label className="fontlabel">EMAIL ADDRESS</Form.Label>
            <Form.Control required name="email" type="email" placeholder="name@example.com" />
            </Form.Group>
                        
            <Form.Group controlId="formBasicPassword">
            <Form.Label className="fontlabel">PASSWORD</Form.Label>
            <Form.Control required name="password" type="password" placeholder="Enter password" />
            <Form.Text className="text-light">MUST BE 6-20 CHARACTERS LONG</Form.Text>
            </Form.Group>
        
            <Button
                className="enter align-content-center relative"
                size="lg"
                variant="warning"
                type="submit"
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
export default withRouter(LogIn);