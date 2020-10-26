import React from 'react';
import './JotD.css';
import { Card, Container } from 'react-bootstrap';


const JotD = props => ( 
    <Card className="jotd">
        <Container className ="borderjoke">
            <Card.Body>
                <Card.Title><center><h1>Joke of the Day!  <img
                alt=""
                src="https://firebasestorage.googleapis.com/v0/b/goofhub-team.appspot.com/o/app%2Flaugh.png?alt=media&token=e12ba2c4-e1a3-4a5e-88bc-3f7b28fca8b9"
                width="37"
                height="37"
                className=" d-inline-block align-center" 
            /> {' '}</h1></center>
            <div className="jotdivider divider"></div>
            <div className='subheader1'>
                <center><i>Q: Why do programmers wear glasses?</i></center>
            
                <center><i>A: Because they can't C# </i> </center>                   
            </div>
            </Card.Title>
            </Card.Body></Container>
            </Card>
    )
export default JotD;