import React from 'react'
import ContactCard from './ContactCard'
function ContactsList(props) {
    const contactRemoveHandler = (id_contact) =>{
        props.deleteContact(id_contact);
    }
    const contactsRenders = props.contactLst.map(contact =>{
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
