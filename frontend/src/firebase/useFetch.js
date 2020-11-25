import { useState, useEffect } from "react";
import firebase from "./firebase";


//gets data from one table (realtime)
export function useFetch(table) {
    const [jokes, setJokes] = useState([]);
    useEffect(() => {
        firebase.firestore()
            .collection(table)
            .where('createdAt','<=','2020-11-11')
            .orderBy('createdAt','asc')
            .onSnapshot((snapshot) => {
                const newJokes = snapshot.docs.map((doc) => ({
                    id: doc.id,...doc.data()
                    
                }))

                setJokes(newJokes);
            })
    }, [table])
    return jokes
}

export function useGetUser(table, currentUserId) {
  const [users, setUsers] = useState([]); 
  useEffect(() => {
          firebase.firestore()
              .collection(table)
              .where('uid','==', currentUserId)
              .onSnapshot((snapshot) => {
                  const newUsers = snapshot.docs.map((doc) => ({
                      id: doc.id,...doc.data()
                  }))
                  setUsers(newUsers);
              })    
      // eslint-disable-next-line
  }, [table])
  return users
}
// ADD FUNCTION
/*export function addJoke(table,newJoke) {
  const [jokes, setJokes] = useState([]);
  firebase.firestore().collection(table)
    //.doc() use if for some reason you want that firestore generates the id
    .doc(newJoke.id)
    .set(newJoke)
    .then(() => {
      setJokes((prev) => [newJoke, ...prev]);
    })
    .catch((err) => {
      console.error(err);
    });
}*/

 // EDIT FUNCTION
/*export function editUser(table,updatedUser) {
  
  setLoading();
  firebase.firestore().collection(table)
    .doc(updatedUser.id)
    .update(updatedUser)
    .then(() => {
      setJokes((prev) =>
        prev.map((element) => {
          if (element.id !== updatedUser.id) {
            return element;
          }
          return updatedUser;
        })
      );
    })
    .catch((err) => {
      console.error(err);
    });
}
*/
//DELETE FUNCTION
/*export function deleteJoke(table,joke) {
  const [jokes, setJokes] = useState([]);
  firebase.firestore().collection(table)
    .doc(joke.id)
    .delete()
    .then(() => {
      setJokes((prev) =>
        prev.filter((element) => element.id !== joke.id)
      );
    })
    .catch((err) => {
      console.error(err);
    });
}
*/


/*function getJokes() {

  firebase.firestore()
      .collection(table)
      .onSnapshot((snapshot) => {
          const newJokes = snapshot.docs.map((doc) => ({
              id: doc.id,...doc.data()
              
          }))

          setJokes(newJokes);
      })

  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(false);
  
  setLoading(true);
  ref.get().then((item) => {
    const items = item.docs.map((doc) => doc.data());
    setJokes(items);
    setLoading(false);
  });
}
useEffect(() => {
  getJokes();
  // eslint-disable-next-line
}, []);*/

/*@Param path to data
  @Return data from path */
/*  export function useFetch(url) {
    const [data, setData] = useState([]);
    
    useEffect(() => {
      async function getData() {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      };
      getData();
      // eslint-disable-next-line
    }, []); 
  
    return data;
  }
*/
  /*const data = useFetch('https://api.randomuser.me') */

  