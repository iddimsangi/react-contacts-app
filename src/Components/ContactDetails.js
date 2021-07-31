import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
export default function ContactDetails(props) {
    console.log(props);
    console.log(props.location.state.contacts)
    const{name, email} = props.location.state.contacts
    return (
     <div>
  <Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2021</span>
      </Card.Meta>
      <Card.Description>
       {email}
      </Card.Description>
    </Card.Content>
  </Card>
  <Link to="/">
  <button class="ui primary button">Go back</button>
  </Link>
  
 </div>
    )
}
