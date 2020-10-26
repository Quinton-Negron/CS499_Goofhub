import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Container, Row, Col } from "react-bootstrap";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && ( 
      
      <Container className="mb-5">
      <Row className="align-items-center profile-header mb-5 text-center text-md-left">
        <Col md={2}>
          <img
            src={user.picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </Col>
        <Col md>
          <h2>Name: {user.name}</h2>
          <p>Nickname: {user.nickname}</p>
          <p>Username: {user.username}</p>
          <p className="lead text-muted">{user.email}</p>
        </Col>
      </Row>
      <Row>
        {/*{JSON.stringify(user, null, 2)}*/}
      </Row>
    </Container>
    )
  )
}

export default Profile;
