import React from 'react';
import './postfunction.css';




function PostFunctions() {
  
    return (
        <div className = "main-container">
          <nav>
      				<div class="dropdown">
                        <button className="button">
                        <i class="fas fa-ellipsis-h fa-2x" style= {{color:"black"}}></i>
                            <div class="dropdown-content">
                                 <a href="http://localhost:3000/Share">Share</a>
                                 <a href="http://localhost:3000/Rate">Rate</a>
                                  <a href="http://localhost:3000/Report">Report</a>
                                 </div></button>
                            </div>
    			</nav>
      </div>
   
          
         
                 
    );
    
  }
  
  export default PostFunctions;


