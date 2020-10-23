import { useState, useEffect } from "react";
//import axios from "axios"

/*@Param path to data
  @Return data from path */
  export function useFetch(url) {
    const [data, setData] = useState([]);
    
    useEffect(() => {
      async function getData() {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      };
      getData();
    }, []);
    

  
    
  
    return data;
  }

  /*const data = useFetch('https://api.randomuser.me') */

  