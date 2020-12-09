import { useState, useEffect } from "react";
import firebase from "./firebase";


//gets data from one table (one time)
export function useFetch(table) {
    const [jokes, setJokes] = useState([]);
    useEffect(() => {
        firebase.firestore()
            .collection(table)
            .orderBy('createdAt','asc')
            .get().then((snapshot) => {
                const newJokes = snapshot.docs.map((doc) => ({
                    id: doc.id,...doc.data()
                    
                }))

                setJokes(newJokes);
            })
    }, [table])
    return jokes
}

//used in submitJoke, profile, jokecard
//get it realtime
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

//used in admin(secret) page for new submitted jokes
//get it realtime
export function useSubmission(table) {
  const [jokes, setJokes] = useState([]);
  
  useEffect(() => {
      firebase.firestore()
          .collection(table)
          .where('release','==', false)
          .onSnapshot((snapshot) => {
              const newJokes = snapshot.docs.map((doc) => ({
                  id: doc.id,...doc.data()
                  
              }))

              setJokes(newJokes);
          })
  }, [table])
  return jokes
}

 