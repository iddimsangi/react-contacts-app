import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { addContacts } from "../redux/ContactsSlice";
import { useDispatch } from "react-redux";
import { uuid } from "uuidv4";
const AddContacts = (props) => {
  const dispatch = useDispatch();
  const [contact, setContacts] = useState({
    id: uuid(),
    name: "",
    email: "",
  });
  //   const addContactHandler = (e) => {
  //     const { name, value } = e.target;
  //     return setContacts({
  //       ...contact,
  //       [name]: value,
  //     });
  //   };

  const addContact = (e) => {
    e.preventDefault();
    if (contact.name === "" || contact.email === "") {
      alert("All fields are mandatory");
      return;
    }

    setContacts({
      ...contact,
      name: "",
      email: "",
    });

    props.history.push("/");
    console.log(contact);
    dispatch(addContacts(contact));
    props.contactsHandler(contact);
  };
  return (
    <div style={{ marginTop: "30px" }}>
      <h2 style={{ textTransform: "uppercase" }}>Add Contact</h2>
      <Form onSubmit={addContact}>
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder="First Name"
            onChange={(e) => {
              setContacts({
                ...contact,
                name: e.target.value,
              });
            }}
            value={contact.name}
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input
            placeholder="Email"
            onChange={(e) => {
              setContacts({
                ...contact,
                email: e.target.value,
              });
            }}
            value={contact.email}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Button className="ui button blue" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default AddContacts;
