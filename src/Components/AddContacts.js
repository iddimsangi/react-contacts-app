import React, { Component } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
export default class AddContacts extends Component {
    render() {
        return (
            <div style={{marginTop:'30px'}}>
                <h2>Add Contact</h2>
            <Form>
                <Form.Field>
                <label>First Name</label>
                <input placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                <label>Email</label>
                <input placeholder='Email' />
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
