import React from 'react'

function ContactsList(props) {
    const contactsRenders = props.contactLst
    return (
        <div >
            <div style={{marginTop:'20px', border:'1px solid #ccc', padding:'10px'}} class="ui relaxed divided list">
                <div class="item">
                <i class="large github middle aligned icon"></i>
                <div class="content">
                    <a class="header">Semantic-Org/Semantic-UI</a>
                    <div class="description">Updated 10 mins ago</div>
                </div>
                <i class="trash alternate outline icon"></i>
          </div>    
           </div>
        </div>
       
    )
}

export default ContactsList
