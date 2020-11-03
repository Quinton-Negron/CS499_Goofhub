import React from 'react';
import './card.css';
import { Card, CardDeck, Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';


const Cards1 = props => (
<Container> 
     
        <Row className='text-center'>
            <Col>
    <CardDeck>
  <Card className="categories">
    <Card.Img 
    className = "types" 
    src="https://firebasestorage.googleapis.com/v0/b/goofhub-team.appspot.com/o/app%2Fcomic.jpg?alt=media&token=56412996-a593-46c6-86be-6ac7d767fbe5" 
    alt="Card image" />
    <a className = 'link' href="Long" class="btn btn-primary stretched-link">
    <Card.Body>
    <Button
          size="xlg"
          style={{
            position: "absolute",
            textAlign: "center",
            top: "328px",
            right: "13px",
            left: "-375px",
            width: "1000px"
          }}
          variant="dark"
          block
        >
          <i>LONG</i>
        </Button>
    </Card.Body></a>  
  </Card>

  <Card className="categories">
  <Card.Img 
  className = "types" 
  src="https://firebasestorage.googleapis.com/v0/b/goofhub-team.appspot.com/o/app%2Fvideo.jpg?alt=media&token=cd0c4126-b696-4490-825d-c0219ffb75af" 
  alt="Card image" />  
  <a className = 'link' href="Music" class="btn btn-primary stretched-link">
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
          <center><i>MUSIC</i></center>
        </Button>
    </Card.Body></a>
  </Card>


  <Card className="categories">
  <Card.Img 
  className = "types" 
  src="https://firebasestorage.googleapis.com/v0/b/goofhub-team.appspot.com/o/app%2FText.png?alt=media&token=9dab6406-525b-4ebc-a0d5-091a1860bb37" 
  alt="Card image" />  
  <a className = 'link' href="Short" class="btn btn-primary stretched-link">
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
    </Card.Body></a>
  </Card>

  <Card className="categories">
  <Card.Img 
  className = "types" 
  src="https://firebasestorage.googleapis.com/v0/b/goofhub-team.appspot.com/o/app%2FScreen%20Shot%202020-11-02%20at%204.49.29%20PM.png?alt=media&token=60e4a0e6-1c57-467a-98c0-4d4ec2bd4ef0" 
  alt="Card image" />  
  <a className = 'link' href="Holiday" class="btn btn-primary stretched-link">
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
          <i>HOLIDAY</i>
        </Button>
    </Card.Body></a>
  </Card>
</CardDeck>
</Col></Row>


{/*
  <Row className='text-center'>
      <Col>
      <CardDeck>
<Card className="categories">
  <Card.Img 
  className = "types" 
  src="https://firebasestorage.googleapis.com/v0/b/goofhub-team.appspot.com/o/app%2Fadult.jpg?alt=media&token=751fe2a6-d9be-4ff3-ba02-a1ce12d3b0e0" 
  alt="Card image" />  
  <a className = 'link' href="#" class="btn btn-primary stretched-link">
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
    </Card.Body></a>
  </Card>
</CardDeck>

</Col></Row>
*/}

</Container>

)

export default Cards1;