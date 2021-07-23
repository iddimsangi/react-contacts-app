
import './App.css';
import Header from '../Components/Header'
import AddContacts from '../Components/AddContacts'
import ContactsList from '../Components/ContactsList'

function App() {
  const contacts = [
    {
      id:'1',
      name:'iddiMsangi',
      email:'imsangi@icloud.com'
    },
    {
      id:'2',
      name:'Ally kilu',
      email:'kiluda@amana.com'
    },
    {
      id:'3',
      name:'harith kilu',
      email:'Harith@icloud.com'
    }
  ]
  return (
    <div className="ui container">
        <Header/>
        <AddContacts/>
        <ContactsList contactLst={contacts}/>
        
    </div>
  );
}

export default App;
