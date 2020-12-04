import React, { useState, useEffect } from 'react';
import './components/Searchbar.css';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import { Imagejokes,Textjokes,Videojokes } from './components/Jokecard';
import firebase from "./firebase/firebase";

const db = firebase.firestore();
function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  function useFetch() {
    const [jokes, setJokes] = useState([]);

    useEffect(() => {
          db.collection('jokes')
            .where('release','==', true)
            .onSnapshot((snapshot) => {
                const newJokes = snapshot.docs.map((doc) => ({
                    id: doc.id,...doc.data()
                }))

                setJokes(newJokes);
            })
    }, [])
    return jokes
  }
  const jokes = useFetch();
  const no18Jokes = jokes.filter(word => word.category.some(data => data !== '18+'));
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

     
  const results = no18Jokes.filter(word => word.keywords.some(data => data === searchTerm.toLowerCase() && data !== ""));
  //const results = jokes.filter(joke => joke.keywords.some===searchTerm.toLowerCase());
  console.log(results);
  const items = results.map((data) => {
    switch (data.type){
        case data.type='image': 
            return (<Col md={4} key={data.id}><Imagejokes  data={data}/></Col>)
        case data.type='video': 
            return (<Col md={4} key={data.id}><Videojokes  data={data}/></Col>)
        case data.type='text': 
            return (<Col md={4} key={data.id}><Textjokes  data={data}/></Col>)
        default: 
            return (<Col md={4} key={data.id}><Textjokes  data={data}/></Col>)     
    }
})
  return (
    
    <React.Fragment>
    <Container fluid >
    <div className="d-flex justify-content-center h-100">
        <div className="searchbplogin-box searchbptextbox d-flex justify-content-center ">
            <input 
              className="searchbptextbox" 
              type="text" placeholder="Search keyword" 
              aria-label="Search" 
              value={searchTerm} 
              onChange={handleChange}/>
            <div className="search_icon1 button-small">
            
            <i className="fas fa-search" ></i></div>
        </div>
    </div>
    

    
    <br></br>
    <br></br>
    <br></br>
    <Row lg={3}>
        {items}
    </Row>
    </Container>
    <Jumbotron className="bg-transparent "/>
    <Jumbotron className="bg-transparent "/>
    <Jumbotron className="bg-transparent "/>
    </React.Fragment>
  );
}
export default Search;

