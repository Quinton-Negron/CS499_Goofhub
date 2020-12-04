import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import './Jokespage.css';
import { Imagejokes,Textjokes,Videojokes } from '../components/Jokecard';
import {useFetch} from '../firebase/useFetch';

function Holiday() {
    //change title accordingly.
    const title = 'Holiday';
    //change category name based on data.
    const category = 'holiday';
    const jokes = useFetch('jokes');
    //console.log(jokes);
    //field to release to site if it's true
    const released = jokes.filter(joke => joke.release===true);

    /*Filter jokes to a category for each page.
    Category is in an array 
    Displays on revsersed order*/
    const results = released.filter(word => word.category.some(data => data === category));
    const items = results.reverse().map((data) => {
        switch (data.type){
            case data.type='image': 
                return (<Col md={4} key={data.id}><Imagejokes data={data}/></Col>) ;
            case data.type='video': 
                return (<Col md={4} key={data.id}><Videojokes data={data}/></Col>) ;
            case data.type='text': 
                return (<Col md={4} key={data.id}><Textjokes  data={data}/></Col>)
            default: 
                return (<Col md={4} key={data.id}><Textjokes  data={data}/></Col>)     
        }
        
    })
    
    return (
        
        <React.Fragment>
            <Container fluid >
                <Jumbotron className="banner">
                    <h1>{title} Jokes</h1>
                </Jumbotron>                      
                <Row lg={3}>{items}</Row>
            
            </Container>   
        </React.Fragment>
    );
}

export default Holiday;