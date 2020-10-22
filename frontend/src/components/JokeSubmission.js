import React from 'react';
import './JokeSubmission.css';
import { Card, Button } from 'react-bootstrap';
import Dropdown from './Dropdown';



const JokeSubmission = props => ( 
    <Card className="JokeSubmission">
            <Card.Body className = "joke">
                <Card.Title>
                <h3 style={{ color: 'white', fontSize: '35px' }}>
                    What kind of laugh is your joke?
                </h3>
                <Card.Subtitle className="dropsettings">
                <Dropdown />
                </Card.Subtitle> 
                </Card.Title>

                <Card.Title>
                <h3 style={{ color: 'white', fontSize: '35px' }}>
                    enter your joke
                </h3>
                <Card.Subtitle className="textbox">
                <div class="form-group">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                </Card.Subtitle>
                </Card.Title>

                <Card.Title>
                    
                <h3 style={{ color: 'white', fontSize: '35px' }}>
                    show profile name?</h3>  
                <div id="instanceCheckboxes" style={{display: 'flex', flexDirection: 'row'}}>
                <div class="form-check">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                        <label class="form-check-label" for="exampleRadios1">
                        <h3 style={{ color: 'white', fontSize: '20px' }}>
                                                YES&nbsp;&nbsp; </h3> 
                                            </label>
                        </div>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                    <label class="form-check-label" for="exampleRadios2">
                    <h3 style={{ color: 'white', fontSize: '22px' }}>
                        NO (ANONYMOUS) </h3>
                    </label>
                    </div>
                    </div>
                </Card.Title>
                <div class="container">
                <div class="row justify-content-lg-center">
                <div class="col-20">
                        <Button
                            size="lg"
                            style={{
                                width: "380px"
                            }}
                            variant="warning"
                            block
                            > SUBMIT 
                        </Button>
                    </div>
                </div>
                </div>
    
        </Card.Body>
    </Card>
)
    
export default JokeSubmission;