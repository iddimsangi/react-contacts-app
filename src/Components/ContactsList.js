import React from 'react'
import ContactCard from './ContactCard'
import { Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";
function ContactsList(props) {
    const contactRemoveHandler = (id_contact) =>{
        props.deleteContact(id_contact);
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
