import React, { useContext } from 'react';
import './card.css';
import { Card, CardDeck, Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { AuthContext } from "../auth/Auth";
import  {useGetUser} from '../firebase/useFetch';

function Cards1() {
  
  //get user's uid from authentication
  const { currentUser } = useContext(AuthContext);
  const currentUserId = currentUser ? currentUser.uid : null;
  //get user from data cross checking authenticated userID
  const users = useGetUser('users',currentUserId);

  //checks user's age
  const Uage = users.map(items => items.dob);
  const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)
  
  return (
<div class= "frame" 
  style={{width:"1100px", 
  height: "415px",
  overflow:"auto",
  padding:"2px", 
  paddingTop: "10px"}}>
    <Container className = "cardcontainer"> 
        <Row >
            <Col>
    <CardDeck className = "deck1">
  <Card className="categories">
    <Card.Img 
    className = "types" 
    src="https://firebasestorage.googleapis.com/v0/b/goofhub-team.appspot.com/o/app%2Fcomic.jpg?alt=media&token=56412996-a593-46c6-86be-6ac7d767fbe5" 
    alt="Card image" />
    <a href="Long" className="btn btn-primary stretched-link">
    <Card.Body>
    <Button
          class = "btn-primary.custom-btn"
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
  src="https://firebasestorage.googleapis.com/v0/b/goofhub-team.appspot.com/o/app%2FMusic.jpg?alt=media&token=81e89973-ae90-4262-a176-2ff456857489" 
  alt="Card image" />  
  <a  href="Music" className="btn btn-primary stretched-link">
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
  <a href="Short" className="btn btn-primary stretched-link">
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
          <center><i>QUICK</i></center>
        </Button>
    </Card.Body></a>
  </Card>

  <Card className="categories">
  <Card.Img 
  className = "types" 
  src="https://firebasestorage.googleapis.com/v0/b/goofhub-team.appspot.com/o/app%2FHoliday.png?alt=media&token=dec9483e-22a0-4ab4-92d8-8d4fec1e9f1a" 
  alt="Card image" />  
  <a href="Holiday" className="btn btn-primary stretched-link">
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

{/* </Col></Row> */}

<br></br>
  {/* <Row  >
  <Col> */}

{currentUser && !(getAge(Uage) >= 18 && getAge(Uage) <= 110)? null:
     

  <Card className="categories">
    <Card.Img 
    className = "types" 
    src="https://firebasestorage.googleapis.com/v0/b/goofhub-team.appspot.com/o/app%2Fadult.jpg?alt=media&token=751fe2a6-d9be-4ff3-ba02-a1ce12d3b0e0" 
    alt="Card image" />  
    <a href="plus18" className="btn btn-primary stretched-link">
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

}</CardDeck>
</Col></Row>

{/* <Col></Col>
<Col></Col>
<Col></Col>
<Col></Col>
<Col></Col> */}
{/* </Col></Row> */}




</Container></div>
);
}

export default Cards1;