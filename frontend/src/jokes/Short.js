import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import './Jokespage.css';
import { Imagejokes,Textjokes,Videojokes } from '../components/Jokecard';
import {useFetch} from '../useFetch';

function Short() {
    //change title accordingly.
    const title = 'Short';
    const jokes = useFetch('http://localhost:3006/data.json');
    //console.log(jokes);
    
    //change category name based on data.
    const category = 'short';
    /*Filter jokes to a category for each page. 
    Displays on revsersed order*/
    const items = jokes.filter(joke => joke.category===category).reverse().map((data) => {
        switch (data.type){
            case data.type='image': 
                return (<Col md={4} key={data.id}><Imagejokes data={data}/></Col>) ;
            case data.type='video': 
                return (<Col md={4} key={data.id}><Videojokes data={data}/></Col>) ;
            default: 
                return (<Col md={4} key={data.id}><Textjokes data={data}/></Col>);     
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

export default Short;