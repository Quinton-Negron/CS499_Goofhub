import React from 'react';
import './card.css';
import { Card, CardDeck, Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';


const Cards1 = props => (
   
<div>
    <Container>
        <Row className='text-center'>
            <Col>
    <CardDeck>
  <Card className="categories">
    <Card.Img className = "types" src="https://firebasestorage.googleapis.com/v0/b/goofhub-team.appspot.com/o/app%2Fcomic.jpg?alt=media&token=56412996-a593-46c6-86be-6ac7d767fbe5" alt="Card image" />  
    <Card.Body>
    <Button
          size="xlg"
          style={{
            position: "absolute",
            top: "328px",
            right: "13px",
            left: "-375px",
            width: "1000px"
          }}
          variant="dark"
          block
        >
          <i>COMICS</i>
        </Button>
    </Card.Body>
  </Card>

  <Card className="categories">
  <Card.Img className = "types" src="https://firebasestorage.googleapis.com/v0/b/goofhub-team.appspot.com/o/app%2Fvideo.jpg?alt=media&token=cd0c4126-b696-4490-825d-c0219ffb75af" alt="Card image" />  
    <Card.Body>
    <Button
          size="xlg"
          style={{
            position: "absolute",
            top: "328px",
            right: "13px",
            left: "-375px",
            width: "1000px"
          }}
          variant="dark"
          block
        >
          <center><i>VIDEOS</i></center>
        </Button>
    </Card.Body>
  </Card>


  <Card className="categories">
  <Card.Img className = "types" src="https://firebasestorage.googleapis.com/v0/b/goofhub-team.appspot.com/o/app%2FText.png?alt=media&token=9dab6406-525b-4ebc-a0d5-091a1860bb37" alt="Card image" />  
    <Card.Body>
    <Button
          size="xlg"
          style={{
            position: "absolute",
            top: "328px",
            right: "13px",
            left: "-375px",
            width: "1000px"
          }}
          variant="dark"
          class = "block"
        >
          <center><i>QUICK</i></center>
        </Button>
    </Card.Body>
  </Card>

  <Card className="categories">
  <Card.Img className = "types" src="https://firebasestorage.googleapis.com/v0/b/goofhub-team.appspot.com/o/app%2Fadult.jpg?alt=media&token=751fe2a6-d9be-4ff3-ba02-a1ce12d3b0e0" alt="Card image" />  
    <Card.Body>
    <Button
          size="xlg"
          style={{
            position: "absolute",
            top: "328px",
            right: "13px",
            left: "-375px",
            width: "1000px"
          }}
          variant="dark"
          block
        >
          <i>ADULT</i>
        </Button>
    </Card.Body>
  </Card>
</CardDeck>


</Col></Row></Container>
</div>



)

export default Cards1;