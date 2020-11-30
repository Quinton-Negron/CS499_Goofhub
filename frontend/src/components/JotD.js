import React, { useState, useEffect } from 'react';
//import React from 'react';
import './JotD.css';
import { Card, Container, Col } from 'react-bootstrap';
import { Imagejokes, Textjokes, Videojokes } from './Jokecard';
import firebase from "../firebase/firebase";

const db = firebase.firestore();
const JotD = props => { 

    function useFetch() {
        const [jokes, setJokes] = useState([]);

        useEffect(() => {

            db.collection('jokes')
                .onSnapshot((snapshot) => {
                    const newJokes = snapshot.docs.map((doc) => ({
                        id: doc.id, ...doc.data()
                    }))

                    setJokes(newJokes);
                })
        }, [])
        return jokes
    }
    const jokes = useFetch();
    const items = jokes.map((data) => {
    switch (data.type) {
        case data.type = 'image':
            return (<Col md={4} key={data.id}><Imagejokes data={data} /></Col>)
        case data.type = 'video':
            return (<Col md={4} key={data.id}><Videojokes data={data} /></Col>)
        case data.type = 'text':
            return (<Col md={4} key={data.id}><Textjokes data={data} /></Col>)
        default:
            return (<Col md={4} key={data.id}><Textjokes data={data} /></Col>)
        }
    })
    var d = new Date();
    const random = d.getDate();
    const len = items.length;
    const JotdIndex = len % random;
    const item = items[JotdIndex];

    return (
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
                <center><i> {item} </i></center>
                                 
            </div>
            </Card.Title>
            </Card.Body></Container>
            </Card>
    )
}
export default JotD;