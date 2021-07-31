import React, { Component } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
export default class AddContacts extends Component {
    state = {
        name:"",
        email:""
    }
    addContact = (e) =>{
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert('All fields are mandatory');
            return
        }
        console.log(this.state);
        this.setState({
            name:"",
            email:""
        })
        this.props.contactsHandler(this.state);
    } 
    render() {
        return (
            <div style={{marginTop:'30px'}}>
                <h2>Add Contact</h2>
            <Form onSubmit={this.addContact}>
                <Form.Field>
                <label>First Name</label>
                <input placeholder='First Name' 
                onChange={(e) =>{this.setState({name:e.target.value})}}
                value={this.state.name} />
                </Form.Field>
                <Form.Field>
                <label>Email</label>
                <input placeholder='Email' 
                onChange={(e) =>{this.setState({email:e.target.value})}}
                value={this.state.email} />
                </Form.Field>
                <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' />
                </Form.Field>
                <Button className="ui button blue" type='submit'>Submit</Button>
            </Form>
            </div>
        )
    }
}
