import React from 'react';
import './card.css';
import { Card, CardDeck, Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import img1 from '../assets/comic.jpg';
import img2 from '../assets/video.jpg';
import img3 from '../assets/Text.png';
import img4 from '../assets/adult.jpg';


const Cards1 = props => (
   
<div>
    <Container>
        <Row className='text-center'>
            <Col>
    <CardDeck>
  <Card className="categories">
    <Card.Img src={img1} alt="Card image" />  
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
  <Card.Img src={img2} alt="Card image" />  
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
  <Card.Img src={img3} alt="Card image" />  
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
  <Card.Img src={img4} alt="Card image" />  
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