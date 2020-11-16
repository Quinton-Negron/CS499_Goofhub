import React from 'react';
import { Card, ResponsiveEmbed, Button } from 'react-bootstrap';
import './Jokecard.css';
import LikeButton from './like';


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
            {/*}    <small className="text-muted">Share, Rate, Report</small>*/}
            
            <LikeButton/>
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
            {/*    <small className="text-muted">Share, Rate, Report</small>*/}
            <LikeButton/>
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
         {/*   <small className="text-muted">Share, Rate, Report</small>*/}
         <LikeButton/>
        </Card.Text>
    </Card.Body>
    
    </Card>
    );
}