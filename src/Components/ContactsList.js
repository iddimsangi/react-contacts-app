import React from 'react'
import ContactCard from './ContactCard'
function ContactsList(props) {
    const contactsRenders = props.contactLst.map(contact =>{
        return <ContactCard contacts={contact} />
    })
    return (
        <div >
            {contactsRenders}
        </div>
       
    )
}

export default ContactsList
