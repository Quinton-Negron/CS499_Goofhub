import React, { useState, useEffect } from 'react';
import './JotD.css';
import { Card, Container, ResponsiveEmbed } from 'react-bootstrap';
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
    const no18Jokes = jokes.filter(joke => joke.category !== '18+');
    const items = no18Jokes.map((data) => {
    switch (data.type) {
        case data.type = 'image':
            return (<Card.Img className="jokebox2" variant="top" src={data.content} />)
        case data.type = 'video':
            return (<><div style={{ width: 'auto', height: 'auto' }}>
                        <ResponsiveEmbed aspectRatio="16by9">
                            <embed type="image/svg+xml" src={data.content} />
                        </ResponsiveEmbed>
                    </div></>)
        case data.type = 'text':
            return (<div>{data.content}</div>)
        default:
            return (<div>{data.content}</div>)
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