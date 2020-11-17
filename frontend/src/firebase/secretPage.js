import React from 'react';
import firebase from "./firebase";

const db = firebase.firestore();
function addData() {
    return(
        <p>hello</p>
    );
}
//collection = table
//doc = id (primary key) string
//add one document only
db.collection("jokes").doc('3').set(
/*{
    content: "What’s the best thing about Switzerland? I don’t know, but the flag is a big plus.",
    name: "Goofer",
    type: "text",
    category: ["short"],
    keywords: ["country","switzerland","flag","plus"],
    user: "user/VrGvRdJVpnneO3ErRaHD"
},
{
    content: "https://firebasestorage.googleapis.com/v0/b/goofhub-team.appspot.com/o/2020_09_12_5_52_PM_Office_Lens.jpg?alt=media&token=55f372fd-f304-4b61-aa66-a861693f34bf",
    name: "Goofer",
    type: "image",
    category: ["short"],
    keywords: ["bread","worst","attitude","sour dough"],
    user: "user/VrGvRdJVpnneO3ErRaHD"
}*/
{
    content: "I used to be a math teacher, but it came with a lot of problems.",
    name: "Goofer",
    type: "text",
    category: ["short"],
    keywords: ["math","problems","teacher"],
    user: "user/VrGvRdJVpnneO3ErRaHD"
},
/*{
    content: "Yesterday I saw a guy spill all his Scrabble letters on the road. I asked him, 'What's the word on the street?'",
    name: "Goofer",
    type: "text",
    category: ["short"],
    keywords: ["","","",""],
    user: "user/VrGvRdJVpnneO3ErRaHD"
}*/
/*{
    content: "https://firebasestorage.googleapis.com/v0/b/goofhub-team.appspot.com/o/2020_09_12_8_03_PM_Office_Lens.jpg?alt=media&token=5852e370-c5de-4324-be9a-3205ead21dbc",
    name: "Goofer",
    type: "image",
    category: ["short"],
    keywords: ["octopus","tenticles","laugh","boy"],
    user: "user/VrGvRdJVpnneO3ErRaHD"
}*/
/*{
    content: "https://firebasestorage.googleapis.com/v0/b/goofhub-team.appspot.com/o/robincostume.jpg?alt=media&token=20569b1e-c839-479c-8518-f3b6b73a2d1f",
    name: "Goofer",
    type: "image",
    category: ["short","comic","holiday"],
    keywords: ["halloween","holiday","costume","batman","robin","superman"],
    user: "user/VrGvRdJVpnneO3ErRaHD"
}*/
/*{
    content: "",
    name: "Goofer",
    type: "text",
    category: ["short"],
    keywords: ["","","",""],
    user: "user/VrGvRdJVpnneO3ErRaHD"
}*/
/*{
    content: "",
    name: "Goofer",
    type: "text",
    category: ["short"],
    keywords: ["","","",""],
    user: "user/VrGvRdJVpnneO3ErRaHD"
}*/
)
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

//add multiple jokes, auto generate id
/*addUsersToFirestore() {
    var users = [{
        content: "",
        name: "Goofer",
        type: "text",
        category: ["short"],
        keywords: ["","","",""],
        user: "user/VrGvRdJVpnneO3ErRaHD"
    },
    {
        content: "",
        name: "Goofer",
        type: "text",
        category: ["short"],
        keywords: ["","","",""],
        user: "user/VrGvRdJVpnneO3ErRaHD"
    }
];
    const db = firebase.firestore();
    users.forEach(data => {
        db.collection("jokes").doc().set(data);
    });
}*/


/*firebase.firestore().collection("schools").add({
  title: "testing",
  seconds: 45
});*/

export default addData;

//data type example
/*var docData = {
    stringExample: "Hello world!",
    booleanExample: true,
    numberExample: 3.14159265,
    dateExample: firebase.firestore.Timestamp.fromDate(new Date("December 10, 1815")),
    arrayExample: [5, true, "hello"],
    nullExample: null,
    objectExample: {
        a: 5,
        b: {
            nested: "foo"
        }
    }
};
db.collection("data").doc("one").set(docData).then(function() {
    console.log("Document successfully written!");
});*/ 