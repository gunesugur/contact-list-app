import React, { useState, useEffect } from "react"
import List from "./List/list"
import Form from "./Form/form"
import "./styles.css"
const Contacts = () => {
  const [contacts, setContacts] = useState([
    {
      fullName: "John",
      phoneNumber: "44365476",
    },
    {
      fullName: "Clare",
      phoneNumber: "34576987",
    },
    {
      fullName: "Peter",
      phoneNumber: "87656439",
    },
  ])

  useEffect(() => {
    console.log(contacts)
  }, [contacts])

  return (
    <div id="container">
      <h1>Contacts</h1>
      <br />
      <List contactsList={contacts} />
      <Form setContacts={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts
