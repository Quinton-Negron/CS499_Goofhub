import React from 'react';
import './JotD.css';
import { Card } from 'react-bootstrap';

const JotD = props => ( 
    <Card className="jotd">
            <Card.Body>
                <Card.Title><center><h1>Joke of the Day!  <img
                alt=""
                src="/laugh.png"
                width="37"
                height="37"
                className="nav-siteName d-inline-block align-center" 
              /> {' '}</h1></center></Card.Title>
                <Card.Subtitle className="mb-3 mr-0 ml-0">
                    <center>__________________________________________________</center>
                </Card.Subtitle>
                <Card.Text>
                    <div className='subheader1'>
                        <center><i><b>Q:</b> Why do programmers wear glasses?</i></center>
                
                <center><i><b>A:</b> Because they can't C# </i> </center>                   
                </div>
                </Card.Text>
            </Card.Body>
            </Card>
    )
export default JotD;
