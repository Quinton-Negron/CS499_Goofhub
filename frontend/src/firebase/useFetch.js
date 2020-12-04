import { useState, useEffect } from "react";
import firebase from "./firebase";


//gets data from one table (realtime)
export function useFetch(table) {
    const [jokes, setJokes] = useState([]);
    useEffect(() => {
        firebase.firestore()
            .collection(table)
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

//used in submitJoke, profile, jokecard
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

 