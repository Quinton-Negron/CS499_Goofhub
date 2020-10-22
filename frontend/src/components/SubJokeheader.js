import React from 'react';
import './SubJokeheader.css';
import { Card} from 'react-bootstrap';


const Subjokeheader = props => ( 
    <Card className="subjoke">
            <Card.Body className="submitheader">
                <Card.Title><center>
                    <h1 style={{ fontSize: '47px' }}>
                        <i>Submit your joke!</i>
                    </h1></center>
                </Card.Title>
            </Card.Body>
    </Card>
)
    
export default Subjokeheader;
