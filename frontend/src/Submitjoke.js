import React from 'react';
import Subjokeheader from'./components/SubJokeheader';
import JokeSubmission from './firebase/JokeSubmission';



export default () =>
 
    <div class="container">
            <div class="row">
            <div class="col">
                <Subjokeheader />   
            </div>
            </div>
           
                <div class="row">
                <div class="col">
                    <div className='lower'> 
                    <JokeSubmission />
                    </div>
                </div>
                </div>
    
        </div>
                 