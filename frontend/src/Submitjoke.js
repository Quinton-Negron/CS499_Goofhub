import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import SubmitImage from "./components/SubmitImage";
import SubmitText from "./components/SubmitText";
import SubmitVideo from "./components/SubmitVideo";

export default function SubmitJoke() { 
    const [radio, setRadio] = useState('text');
    const filterType = radio === 'text'? <SubmitText /> :  
                        radio === 'image'? <SubmitImage /> : 
                        radio === 'video'? <SubmitVideo /> : null;
  
    return (
    <>
    <Form>
    <div key={`custom-inline-${radio}`} className="typeFilter d-flex justify-content-center h-100 mb-3 mt-3">
    
      <Form.Check
        custom
        inline
        label="TEXT"
        type='radio'
        id={`custom-inline-${radio}-1`}
        checked={radio === 'text'}
        value='text'
        onChange={(e)=>{ setRadio(e.target.value) }}
      />
      <Form.Check
        custom
        inline
        label="IMAGE"
        type='radio'
        id={`custom-inline-${radio}-2`}
        checked={radio === 'image'}
        value='image'
        onChange={(e)=>{ setRadio(e.target.value) }}
      />
      <Form.Check
        custom
        inline
        label="VIDEO"
        type='radio'
        id={`custom-inline-${radio}-3`}
        checked={radio === 'video'}
        value='video'
        onChange={(e)=>{ setRadio(e.target.value) }}
      />
    </div>
  
    </Form>
    {filterType}
    </>
    );         
}