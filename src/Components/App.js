import React,{useState, useEffect} from 'react'
import { uuid } from 'uuidv4';
import './App.css';
import Header from '../Components/Header'
import AddContacts from '../Components/AddContacts'
import ContactsList from '../Components/ContactsList'

function App() {
const [contacts, setContacts] = useState([]);
const deleteContactHandler = (id) =>{
  const updatedContacts = contacts.filter(contact =>{
    return contact.id !== id;
  })
  setContacts(updatedContacts)
}
const contactsHandler = (contact)=>{
setContacts([...contacts, {id:uuid(),...contact}]);
}
const LOCAL_STORAGE_KEY = 'contacts';
useEffect(() =>{
  const retrievedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts)));
  if(retrievedContacts) setContacts(retrievedContacts);
 },[]);

//set or Add state to localStorage
useEffect(() =>{
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
},[contacts]);


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
        <AddContacts contactsHandler={contactsHandler}/>
        <ContactsList 
        deleteContact ={deleteContactHandler}
        contactLst={contacts}/>     
    </div>
  );
}

export default App;
