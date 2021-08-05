import React,{useRef} from 'react'
import ContactCard from './ContactCard'
import { Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";
function ContactsList(props) {
    const inpEl = useRef("");
    const contactRemoveHandler = (id_contact) =>{
        props.deleteContact(id_contact);
    }
    const getInputs = () =>{
        // console.log(inpEl.current.value);
        props.searchKeyWord(inpEl.current.value)
    }
    // const contactLst = [
    //     {
    //       id:'1',
    //       name:'iddiMsangi',
    //       email:'imsangi@icloud.com'
    //     },
    //     {
    //       id:'2',
    //       name:'Ally kilu',
    //       email:'kiluda@amana.com'
    //     },
    //     {
    //       id:'3',
    //       name:'harith kilu',
    //       email:'Harith@icloud.com'
    //     }
    //   ]
    const contactsRenders = props.contactLst.map(contact =>{
        return <ContactCard
        key={contact.id}
        contactRemove = {contactRemoveHandler}
        contacts={contact} />
    })
    return (
        <div style={{position:'relative'}}>
           
           
              <div>  
              <div style={{width:'40%', left:'25%'}} class="ui icon input">
               <input 
               ref={inpEl}
               type="text" 
               placeholder="Search..."
               value={props.term}
               onChange={getInputs}
               />
               <i aria-hidden="true" class="search icon"></i>
            </div>
              {/* <Input icon='search' placeholder='Search...' />                */}
                  <Link to="/Add">
                   <Button color='blue' floated='right'>Add contact</Button>
                  </Link>
                    
                    {/* <Button floated='left'>Left Floated</Button> */}
              </div>

              <div style={{paddingTop:'20px'}}>
              {contactsRenders}
              </div>
          
        </div>
       
    )
}

export default ContactsList
