import React from 'react';
import { Card, ResponsiveEmbed } from 'react-bootstrap';
import './Jokecard.css';
import LikeButton from '../like';
import './style.css'



//Cards for text jokes
export function Textjokes({data}) {
    return(
    <Card className="jokebox1" border="dark">
        <Card.Body>
            <blockquote className="blockquote mb-0">
            <p>
                {data.content}
            </p>
            <footer className="blockquote-footer">
                {data.name}
            </footer>
            </blockquote>
            <Card.Text>
            <body>
            	<nav>
      				<div class="dropdown">
                        <button class="dropbtn">. . .</button>
                            <div class="dropdown-content">
                                 <a href="http://localhost:3000/Share">Share</a>
                                 <a href="http://localhost:3000/Rate">Rate</a>
                                  <a href="http://localhost:3000/Report">Report</a>
                                 </div>
                            </div>
    			</nav>
    		</body>
            <LikeButton key = {data.id}/>
            
            </Card.Text>
        </Card.Body>
        
    </Card>
);
}


//Cards for image jokes
export function Imagejokes({data}) {
    return(
    <Card className="jokebox1" border="dark">   
        <Card.Img className="jokebox2" variant="top" src={data.content} />
        <Card.Body>
            <blockquote className="blockquote mb-0">
                <footer className="blockquote-footer">
                    {data.name}
                </footer>
            </blockquote>
            <Card.Text>
            <body>
            	<nav>
      				<div class="dropdown">
                        <button class="dropbtn">. . .</button>
                            <div class="dropdown-content">
                                <a href="http://localhost:3000/Share">Share</a>
                                <a href="http://localhost:3000/Rate">Rate</a>
                                <a href="http://localhost:3000/Report">Report</a>
                                </div>
                            </div>
    			</nav>
    		</body>
            <LikeButton dataId = {data.id}/>
            </Card.Text>
        </Card.Body>
            
    </Card>
    );
}

//Cards for video jokes
export function Videojokes({data}) {
    return(
    <Card className="jokebox1" border="dark"> 
    <React.Fragment>    
        <div style={{ width: 'auto', height: 'auto' }}>
            <ResponsiveEmbed aspectRatio="16by9">
                <embed type="image/svg+xml" src={data.content} />
            </ResponsiveEmbed>
        </div>
     
    </React.Fragment>
    <Card.Body>
        <blockquote className="blockquote mb-0">
            <footer className="blockquote-footer">
                {data.name}
            </footer>
        </blockquote>
        <Card.Text>
        	<body>
            	<nav>
      				<div class="dropdown">
                      <button class="dropbtn">. . .</button>
                        <div class="dropdown-content">
                            <a href="http://localhost:3000/Share">Share</a>
                            <a href="http://localhost:3000/Rate">Rate</a>
                            <a href="http://localhost:3000/Report">Report</a>
                         </div>
                    </div>
    			</nav>
    		</body>
         <LikeButton dataId = {data.id}/>
        </Card.Text>
    </Card.Body>
    
    </Card>
    );
}
