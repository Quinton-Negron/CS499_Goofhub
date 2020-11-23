import React from 'react';
//import { useAuth0 } from "@auth0/auth0-react";
import { Row, Col, Form, Card } from "react-bootstrap";
import './Profile.css';

const Profile = () => {
  //const { user, isAuthenticated } = useAuth0();

  return (
    //isAuthenticated && ( 
      
      <Row lg={3}>
      <Col lg={2}></Col>
      <Col lg={8}>
      <Card className="proCard">
      <Row >
        <Col md={3} className="mt-5 align-items-center ">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/goofhub-team.appspot.com/o/profilepic.png?alt=media&token=d554c921-c31f-4592-8abf-78aca34a7e9d"
            alt="Profile"
            width="200px"
            height="auto"
            className="rounded-circle img-fluid "
          />
        
        
          <Row>
            <Col  className="mt-5 align-items-center profile-header">
              <Card className="proSideCard">
                <Card.Title className="proSideName">Goof Admin</Card.Title>
                <Card.Text className="proSideUser">Goofer</Card.Text>
                <Card.Text className="proSideEmail">goofhubteam@gmail.com</Card.Text>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col md>
      <Card.Body className="proCardBody">
        <Card.Title className="proTitle">ACCOUNT SETTINGS</Card.Title>    
        <Form className="proForm">
          <Form.Row className="progroup proLineTop">
          <Form.Group as={Col} >
            <Form.Label  className="proWhite">NAME</Form.Label>
          </Form.Group>
          <Form.Group as={Col} >
            <Form.Label  className="proText" >Goof Admin</Form.Label>
          </Form.Group>
          <Form.Group as={Col}></Form.Group>
          </Form.Row>

          <Form.Row className="progroup">
          <Form.Group as={Col} >
            <Form.Label className="proWhite">DATE OF BIRTH</Form.Label>
          </Form.Group>
          <Form.Group as={Col}>
              <Form.Label  className="proText">01/01/3000</Form.Label>
          </Form.Group>
          <Form.Group as={Col} ></Form.Group>
          </Form.Row>

          <Form.Row className="progroup ">
          <Form.Group  as={Col} >
            <Form.Label className="proWhite" >USERNAME</Form.Label>
          </Form.Group>
          <Form.Group as={Col} >
            <Form.Control required className="procontrol proText" size="sm" type="username" placeholder="Goofer"/>
          </Form.Group>
          <Form.Group as={Col} className="btn-xlg ">
              <div >
              <i className="fas fa-pen"></i></div>
           
          </Form.Group>
          </Form.Row>

          <Form.Row className="progroup">
          <Form.Group as={Col} controlId="formPlaintextEmail">
            <Form.Label className="proWhite">EMAIL</Form.Label>
          </Form.Group>  
          <Form.Group as={Col}>
              <Form.Control required className="procontrol proText" size="sm" type="email" placeholder="goofhubteam@gmail.com"/>
          </Form.Group>
          <Form.Group as={Col}>
              <div className="btn-xlg">
              <i className="fas fa-pen"></i></div>
          </Form.Group>
          </Form.Row>

          <Form.Row className="proLineBot">

          <Form.Group as={Col}  controlId="formPlaintextPassword">
            <Form.Label className="proWhite" >NEW PASSWORD</Form.Label>
          </Form.Group>  
          <Form.Group as={Col}>
              <Form.Control required className="procontrol proText" size="sm" type="password" placeholder="......" />
          </Form.Group>  
          <Form.Group as={Col}>
              <div className="btn-xlg">
              <i className="fas fa-pen"></i></div>  
          </Form.Group>
          </Form.Row>
        </Form>
      </Card.Body>
          
        </Col>
      </Row>
     
      {/*<Row>
        {JSON.stringify(currentUser, null, 2)}
      </Row>*/}
      </Card>
    </Col>
    <Col lg={2}></Col>
    </Row>
    )
  
}

export default Profile;
