import React, { useContext, useState } from "react";
import { AuthContext } from "./auth/Auth";
import { Row, Col, Form,Card } from "react-bootstrap";
import firebase from "./firebase/firebase";
import {useGetUser} from "./firebase/useFetch";
import './Profile.css';

const Profile = () => {
  //get user's uid from authentication
  const { currentUser } = useContext(AuthContext);
  const currentUserId = currentUser ? currentUser.uid : null;
  //get user from data cross checking authenticated userID
  const users = useGetUser('users',currentUserId);

  const [name, setName] = useState("");

  //updates username and displayName
  function editName(users) {
    const regex = /^\s*$/;//regular expression for blank spaces
    //if input has blank spaces use original displayName, othewise use new input
    const newName = (regex.test(name) === true) ? currentUser.displayName : name;
    
    const updateUsername = {
      username: newName,
    };
    firebase.firestore().collection("users")
    .doc(users.id)
    .update(updateUsername)//update in firestore
    .then(() => {//update in authentication
      const user = firebase.auth().currentUser;
      user.updateProfile({
          displayName: newName
          });
    })
    .then(() => {
        alert("Username has changed. Refresh your page for latest update.");
    })
    .catch((error) => {
        alert(error.message);
    });

    setName("");
      
};

  return (
    currentUser && (  
      
      <Row lg={3}>
      <Col lg={2}></Col>
      <Col lg={8}>
      <Card className="proCard">
      {users.map((items) => (
      <Row key={items.id}>
        <Col md={3} className="mt-5 align-items-center ">
          <img
            src={currentUser.photoURL}
            alt="Profile"         
            className="rounded-circle proimg-fluid "
          />
          <div className="btn-xlg proAddBtn">
          <i className="fas fa-plus-circle"></i></div>
        
          <Row>
            <Col  className="mt-5 align-items-center profile-header">
              <Card className="proSideCard">
                <Card.Title className="proSideName">{items.first} {items.last}</Card.Title>
                <Card.Text className="proSideUser">{items.username}</Card.Text>
                <Card.Text className="proSideEmail">{currentUser.email}</Card.Text>
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
            <Form.Label  className="proText" >{items.first} {items.last}</Form.Label>
          </Form.Group>
          <Form.Group as={Col}></Form.Group>
          </Form.Row>

          <Form.Row className="progroup">
          <Form.Group as={Col} >
            <Form.Label className="proWhite">DATE OF BIRTH</Form.Label>
          </Form.Group>
          <Form.Group as={Col}>
              <Form.Label  className="proText">{items.dob}</Form.Label>
          </Form.Group>
          <Form.Group as={Col} ></Form.Group>
          </Form.Row>

          <Form.Row className="progroup ">
          <Form.Group  as={Col} >
            <Form.Label className="proWhite" >USERNAME</Form.Label>
          </Form.Group>
          <Form.Group as={Col} >
          <Form.Control required 
                className="procontrol proText" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                size="sm" 
                type="username" 
                placeholder={items.username}/>
            </Form.Group>
            <Form.Group as={Col} >
                <div type="submit" onClick={() => editName(items)} className="btn-xlg profas">
                <i className="fas fa-pen"></i></div>
            </Form.Group>
          </Form.Row>

          <Form.Row className="progroup">
          <Form.Group as={Col} controlId="formPlaintextEmail">
            <Form.Label className="proWhite">EMAIL</Form.Label>
          </Form.Group>  
          <Form.Group as={Col}>
              <Form.Control required className="procontrol proText" size="sm" type="email" placeholder={currentUser.email}/>
          </Form.Group>
          <Form.Group as={Col}>
              <div className="btn-xlg profas">
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
              <div className="btn-xlg profas">
              <i className=" fas fa-pen"></i></div>  
          </Form.Group>
          </Form.Row>
        </Form>
      </Card.Body>
          
        </Col>
      </Row>
      ))}
      {/*<Row>
        {JSON.stringify(currentUser, null, 2)}
      </Row>*/}
      </Card>
    </Col>
    <Col lg={2}></Col>
    </Row>
    )
  )
}

export default Profile;
