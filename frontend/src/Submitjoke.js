import React, { useState } from 'react';
import './Submitjoke.css';
import { Card, Col, Row, Form, Button } from 'react-bootstrap';
import firebase from "./firebase/firebase";

const db = firebase.firestore();
export default function SubmitJoke() { 
    const [Category, setCategory] = useState("other");
    const [Joke, setJoke] = useState("");
    const [keywords, setKeywords] = useState("");
    const [profilename, setProfileName] = useState("");
    //const [loader, setLoader] = useState(false);
    //const [validated, setValidated] = useState(false);
   
    //if checkbox is used then username is Anonymous, otherwise username in profile is used
    const name = profilename !== "Anonymous" ? "name" : "Anonymous";
    //split keywords to an array
    const words = keywords;
    const keywordsArr = words.split(', ');

    const handleSubmit = (e) => {
        e.preventDefault();
        //setLoader(true);

        /*const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        setValidated(true);*/
    
        db.collection("jokesubmission").doc()
        .set({
            category: [Category],
            content: Joke,
            keywords: keywordsArr,
            name: name,
            createdAt: new Date().toJSON().split("T")[0],
            type: "text"
        })
        .then(() => {
            //setLoader(false);
            alert("Your joke will be reviewed!");
        })
        .catch((error) => {
            alert(error.message);
            //setLoader(false);
        });
    
        setCategory("");
        setJoke("");
        setKeywords("");
        setProfileName("");

      
    };
 
    

    return (
    <>
    <Row lg={3}>
    <Col lg={2}></Col>
    <Col lg={8}>
    <Card className="submitContainer">
        <Card.Body className="submitTitle">SUBMIT YOUR JOKE</Card.Body>
        <Form  onSubmit={handleSubmit}>
            <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Label className="submitLabel mt-3">What kind of Laugh is your Joke?</Form.Label>
                <Form.Control 
                    className="submitPlaceholder"
                    required
                    as="select" 
                    value={Category}
                    onChange={(e) => setCategory(e.target.value)}
                    >
                    <option value="other">SELECT A CATEGORY</option>
                    <option value="long">LONG</option>
                    <option value ="music">MUSIC</option>
                    <option value = "short">QUICK</option>
                    <option value = "holiday">HOLIDAY</option>
                    <option value = "18+">18+</option>
                    
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label className="submitLabel">Enter Your Joke</Form.Label>
                <Form.Control className="submitPlaceholder"
                    as="textarea" 
                    rows={3} 
                    required
                    placeholder="Make us laugh!"
                    value={Joke}
                    onChange={(e) => setJoke(e.target.value)}
                    />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label className="submitLabel">Keywords</Form.Label>
                <Form.Control className="submitPlaceholder"
                    required
                    placeholder="One Liner, Knock Knock"
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)} 
                    />
            </Form.Group>

            <Form.Check inline className="submitAnon"
            label="SUBMIT AS ANONYMOUS"
            type="checkbox"
            checked={profilename}
            value="Anonymous"
            onChange={(e) => setProfileName(e.currentTarget.value)}
            />

            <Button
                className="submitButton"
                size="sm"
                variant="warning"
                type="submit"
                block
                > SUBMIT
            </Button>
        </Form>
    </Card>
    </Col>
    <Col lg={2}></Col>
    </Row>
    </>

    );         
}