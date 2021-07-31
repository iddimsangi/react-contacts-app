import React from 'react'
import ContactCard from './ContactCard'
function ContactsList(props) {
    const contactRemoveHandler = (id_contact) =>{
        props.deleteContact(id_contact);
    }

    const contactLst = [
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
    const contactsRenders = contactLst.map(contact =>{
        return <ContactCard
        key={contact.id}
        contactRemove = {contactRemoveHandler}
         contacts={contact} />
    })
    return (
        <div >
            {contactsRenders}
        </div>
       
    )
}

export default ContactsList
