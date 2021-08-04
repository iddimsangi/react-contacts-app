import React,{ useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { uuid } from 'uuidv4';
import './App.css';
import Header from '../Components/Header'
import AddContacts from '../Components/AddContacts'
import ContactsList from '../Components/ContactsList'
import ContactDetails from '../Components/ContactDetails'
import UpdateContacts from '../Components/UpdateContacts'
import api from '../Api/api';

function App() {
const [contacts, setContacts] = useState([]);
const deleteContactHandler = async(id) =>{
  await api.delete(`/contacts/${id}`)
  const updatedContacts = contacts.filter(contact =>{
    return contact.id !== id;
  })
  setContacts(updatedContacts)
}
const contactsHandler = async(contact)=> {
  const request = {
    id:uuid(),
    ...contact
  }
  const contactsPosted = await api.post("/contacts", request)
  console.log(contactsPosted);
  setContacts([...contacts, contactsPosted.data]);
}
const updatecontactsHandler = async(contact) => {
const response = await api.put(`/contacts/${contact.id}`, contact);
const{id, name, email } = response.data;
setContacts(
  contacts.map((contact) =>{
  return contact.id === id ? {...response.data} : contact
}));

}
const retrieveContacts = async () =>{
  const response = await api.get("/contacts");
  return response.data;
}
// const LOCAL_STORAGE_KEY = 'contacts';
useEffect(() =>{
  // const retrievedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts)));
  // if(retrievedContacts) setContacts(retrievedContacts);
  const getAllContacts = async () => {
    const allContacts = await retrieveContacts();
    if(allContacts) setContacts(allContacts)
  }
  getAllContacts()
 },[]);

//set or Add state to localStorage
// useEffect(() =>{
//   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
// },[contacts]);


  // const contacts = [
  //   {
  //     id:'1',
  //     name:'iddiMsangi',
  //     email:'imsangi@icloud.com'
  //   },
  //   {
  //     id:'2',
  //     name:'Ally kilu',
  //     email:'kiluda@amana.com'
  //   },
  //   {
  //     id:'3',
  //     name:'harith kilu',
  //     email:'Harith@icloud.com'
  //   }
  // ]
  return (
    <div className="ui container">
      <Header/>
      <Router>
        <Switch>
            {/* <Route path="/" exact component={ContactsList}/> */}
            <Route path="/" exact render={(props) =>(
              <ContactsList 
              {...props} 
              deleteContact ={deleteContactHandler}
              contactLst={contacts}/>
            )}/>

            <Route path="/Add" render={(props) =>(
              <AddContacts 
              {...props}
              contactsHandler={contactsHandler}
              />
            )}/>  
            <Route path="/Edit" render={(props) =>(
              <UpdateContacts 
              {...props}
              UpdatecontactsHandler={updatecontactsHandler}
              />
            )}/>
            <Route path="/ContactDetails" component={ContactDetails}/>
            {/* <Route path="/ContactDetails/id" component={ContactDetails}/> */}
        </Switch>
        
        {/* <AddContacts contactsHandler={contactsHandler}/> */}
        {/* <ContactsList 
        deleteContact ={deleteContactHandler}
        contactLst={contacts}/>   */}
      </Router>
          
    </div>
  );
}

export default App;
