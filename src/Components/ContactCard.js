import React from 'react'
import { Link } from "react-router-dom";
function ContactCard(props) {
    const {id, name, email} = props.contacts;
    return (
        <div>
            <div style={{marginTop:'20px', border:'1px solid #ccc', padding:'10px'}} class="ui relaxed divided list">
                
                <div class="item">
                <i class="large github middle aligned icon"></i>
                    <div class="content">
                    {/* <Link to="/ContactDetails"><a class="header">{name}</a></Link> */}
                    <Link to={{pathname:`/ContactDetails/${id}`, state:{ contacts:props.contacts }}}><a class="header">{name}</a></Link>
                    <div class="description">{email}</div>
                    </div>              
                <i                
               onClick={() => props.contactRemove(id)}
                class="trash alternate outline icon"></i>
                </div>  
              
                 
             </div>
        </div>
    )
}

export default ContactCard
