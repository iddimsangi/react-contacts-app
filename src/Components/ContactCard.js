import React from 'react'

function ContactCard(props) {
    const {id, name, email} = props.contacts
    return (
        <div>
            <div style={{marginTop:'20px', border:'1px solid #ccc', padding:'10px'}} class="ui relaxed divided list">
                <div class="item">
                <i class="large github middle aligned icon"></i>
                <div class="content">
                <a class="header">{name}</a>
                <div class="description">{email}</div>
                </div>
                <i class="trash alternate outline icon"></i>
                </div>    
             </div>
        </div>
    )
}

export default ContactCard
