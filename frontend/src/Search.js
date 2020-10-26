import React, { useState, useEffect } from 'react';
import './components/Searchbar.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Imagejokes,Textjokes,Videojokes } from './components/Jokecard';
import firebase from "./firebase/firebase";


function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  function useFetch() {
    const [jokes, setJokes] = useState([]);

    useEffect(() => {
        firebase.firestore()
            .collection('jokes')
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
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

     
  const results = jokes.filter(word => word.keywords.some(data => data === searchTerm.toLowerCase() && data !== ""));
  //const results = jokes.filter(joke => joke.keywords.some===searchTerm.toLowerCase());
  console.log(results);
  const items = results.map((data) => {
    switch (data.type){
        case data.type='image': 
            return (<Col md={4} key={data.id}><Imagejokes  data={data}/></Col>)
        case data.type='video': 
            return (<Col md={4} key={data.id}><Videojokes  data={data}/></Col>)
        default: 
            return (<Col md={4} key={data.id}><Textjokes  data={data}/></Col>)     
    }
})
  return (
    
    <React.Fragment>
    <Container fluid >
    {/*<SearchBarPage />
    <Searchbar />*/}
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
    

    {/*<h4 className="mt-5">Searched: {searchTerm}</h4>
    <h4>Result Count: {items.length}</h4>*/}
    <br></br>
    <br></br>
    <br></br>
    <Row lg={3}>
        {items}
    </Row>
    </Container>
    </React.Fragment>
  );
}
export default Search;

