import React from 'react';
import './Home.css';
import JotD from './components/JotD';
import Cards1 from './components/card'

export default () =>
        <div class="container">
            <div class="row justify-content-lg-center">
            <div class="col-20">
                <span className='position'>
                    <JotD />
                </span>
            </div>
            </div>
           
       
            
                <div class="row justify-content-md-flex-initial">
                <div class="col-10">
                    <div className='inner-container'> 
                        <h1>What kind of laugh are you looking for?</h1>
                    </div>
                </div>
                </div>
           

                
                <div class="row justify-content-lg-center">
                <div class="col-lxg-20">
                    <Cards1 />
                </div>
                </div>
        </div>
                 
    