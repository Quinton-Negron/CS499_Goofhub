import React from 'react';
import './JokeSubmission.css';
import { Card, Container } from 'react-bootstrap';
import { db } from "./firebase";
  
import { useState } from "react";

const JokeSubmission = props => {
            const [Category, setCategory] = useState("");
            const [Joke, setJoke] = useState("");
            const [keywords, setKeywords] = useState("");
            const [profilename, setProfileName] = useState("");
            const [loader, setLoader] = useState(false);
        
            const handleSubmit = (e) => {
              e.preventDefault();
              setLoader(true);
          
              db.collection("jokesubmission")
                .add({
                  Category: Category,
                  Joke: Joke,
                  keywords: keywords,
                  profilename: profilename,
                })
                .then(() => {
                  setLoader(false);
                  alert("Your joke has been submitted!");
                })
                .catch((error) => {
                  alert(error.message);
                  setLoader(false);
                });
          
              setCategory("");
              setJoke("");
              setKeywords("");
              setProfileName("");
            };
    
return (
<form className="form" onSubmit={handleSubmit}>
<div>
<Card className="JokeSubmission">
        <Card.Body className = "joke">
        <Card.Title>
            <h3 style={{ color: 'white', fontSize: '35px' }}>
                What kind of laugh is your joke?
            </h3>
            <Card className="dropsettings">
            <select placeholder="Category"
            value={Category}
            onChange={(e) => setCategory(e.target.value)}>
            <option selected>SELECT A CATEGORY</option>
                <option value="Comics">LONG</option>
                <option value ="Videos">MUSIC</option>
                <option value = "Quick">Quick</option>
                <option value = "Adult">HOLIDAY</option>
            </select>
            </Card> 
            </Card.Title>

            <Container className = "submitjokebox">
            <Card.Title>
                <h3 style={{ color: 'white', fontSize: '35px' }}>
                    enter your joke
                </h3>

            <Card className="textbox1">
                <textarea
                placeholder="Make us laugh!"
                value={Joke}
                onChange={(e) => setJoke(e.target.value)}
                ></textarea>
            </Card>
            </Card.Title></Container>

            <Container className = "submitjokebox">
            <Card.Title>
                <h3 style={{ color: 'white', fontSize: '35px' }}>
                    Keywords
                </h3>

            <Card className="textbox1">
                <input
                placeholder="one liner, knock knock"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                />
            </Card>
            </Card.Title></Container>

            <Container className = "submitjokebox">
            <Card.Title>
                <h3 style={{ color: 'white', fontSize: '35px' }}>
                    to whom shall we credit?
                </h3>
                
            <Card className="textbox1">
                <input
                placeholder="Will be anonymous if not filled in"
                value={profilename}
                onChange={(e) => setProfileName(e.target.value)}
                />
            
            </Card>
           
            </Card.Title>
            <Card.Subtitle className="namealert">
            <h3 style={{ color: 'white', fontSize: '18px' }}>
                    <i>(name will be displayed with joke.)</i>
                </h3>
            </Card.Subtitle>
            </Container>
    
            {/* <Card.Title>
            <div class="container">
            <div class="row">
            <div  style={{ flexDirection: 'row'}}>
                
            <h3 style={{ color: 'white', fontSize: '35px' }}>
            want to be anonymous?&nbsp;</h3> 
            <label class="form-check-label">
                <h3 style={{ color: 'white', fontSize: '20px' }}>
                YES&nbsp; </h3> 
            </label>

            <input
            type = "checkbox"
            placeholder="profname"
            value={profname}
            onChange={(e) => setProfName(e.target.value)}
            /> 
            </div></div></div>
            </Card.Title> */}

            <div class="container">
            <div class="row justify-content-lg-center">
            <div class="col-20">
            <button 
            type ="submit"
                style={{
                width: "380px",
                background: loader ? "#ccc" : " rgb(240, 215, 31)",
                fontSize: '30px',
                borderRadius: '0.3rem',
                }}
                > 
            SUBMIT 
            </button>
            </div>
            </div>
            </div>

    </Card.Body>
</Card>
</div>
</form>
)
}
export default JokeSubmission;