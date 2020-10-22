import React from 'react';

function Dropdown() {
    return(
    <div class="form-group"> 
        <select className="form-control" id="exampleFormControlSelect1">
             <option selected>SELECT A CATEGORY</option>
                <option>Comics</option>
                <option>Videos</option>
                <option>Quick</option>
                <option>Adult</option>
        </select>
    </div>
        );
    }

export default Dropdown;