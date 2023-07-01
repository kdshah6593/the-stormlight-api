### Firebase Help

1. Open terminal and log into firebase: `firebase login` or `firebase login --reauth`
2. Build our project: `yarn build`
3. Initiate the project if it hasn't been already: `firebase init`
4. Deploy the app to firebase: `firebase deploy`

`https://blog.logrocket.com/build-crud-application-react-firebase-web-sdk-v9/`
`https://www.makeuseof.com/react-app-firebase-connect/`
`https://www.makeuseof.com/firebase-react-authentication/`
`https://blog.logrocket.com/building-rest-api-firebase-cloud-functions-typescript-firestore/#creating-firestore-database`

#### How to Access DB

import `firestore` from `utils/firebase.js`
then `firestore.ref("/")` which will contain the collections/document pattern

#### Setting data

```
writeUserData = () => {
  Firebase.database().ref('/').set(this.state);
  console.log('DATA SAVED');
}
```

```
import { collection, addDoc, Timestamp } from "firebase/firestore";
const handleSubmit = async (e) => {
   e.preventDefault()
   try {
     await addDoc(collection(db, 'tasks'), {
       title: title,
       description: description,
       completed: false,
       created: Timestamp.now()
     })
     onClose()
   } catch (err) {
     alert(err)
   }
 }
```

Getting Database

```
/* function to get all tasks from firestore in realtime */
useEffect(() => {
  const q = query(collection(db, 'tasks'), orderBy('created', 'desc'))
  onSnapshot(q, (querySnapshot) => {
    setTasks(querySnapshot.docs.map(doc => ({
      id: doc.id,
      data: doc.data()
    })))
  })
},[])
```

```
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
getUserData = () => {
  let ref = Firebase.database().ref('/');
  ref.on('value', snapshot => {
    const state = snapshot.val();
    this.setState(state);
  });
  console.log('DATA RETRIEVED');
}
```

## Website

Can see app at [Stormlight API](https://stormlightapi.web.app)

## Home Page

1. Page will have header and subheader
2. Then a component that includes a search bar to test out the api
3. A display in that same component that displays the JSON response.
   [] When the initial home page renders, it should automatically call a search result from API

## About Page

1. Incorporate Links

## Documentation page

1. How to use the api
2. What options are available
3. what characteristics are available
4. Create a sidebar with links to each of the sections above and

[] Fix Margin Spacing of Documentation Headers

## Login Page

## Sign Up Page

## Contributing/Adding/Editing Data Page

## Current Tasks

[] Create Collections and Documents in Firebase database
[x] Add a signup and login page (need to work on backend for this then)
[] Set up 2 different Searches. Initial one is the generic one home page to JSON. The second one is a different page so that you can search for characters, books, etc to get specific details on 1 instance
[] Work on Figuring out the tab anchoring to different headers so it title is displayed, not just the text
[] Add a Menu to the Header

- [] If not logged in, it will show Login and Sign Up Options
- [] If logged in, it will show Add Data, Edit Data, Logout Options for users and verified users
- [] If logged in and admin, will additionally show a dashboard page

[] Try and Make Header NavLinks Underline Transition When Clicked

- OR DECIDE TO KEEP UNDERLINE OR TEXT COLOR CHANGE TO SIGNIFY WHICH PAGE I AM ON
  [] Add user logged into state ----> Look In to useReducer / useContext to do global state without using Redux
  [] add admin logged into state
  [] Move Tables for Resources into own component and then pass the rows as props

## Colors:

#e57373 ===== theme.palette.error.light
#00838f dark blue/green
#4fb3bf lighter of the blue/green
#005662 darker blue/green
#ffefdd tan color

Fonts:
'Montserrat', sans-serif
'Oswald', sans-serif

## Database Users

- Name, Email, Username, Password, Verified Status, # of submissions (will control verified status)
