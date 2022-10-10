import React, { useState } from "react"
const Form = ({ setContacts, contacts }) => {
  const [form, setForm] = useState({
    fullName: "",
    phoneNumber: "",
  })
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const onSubmit = (e) => {
    e.preventDefault()
    if (form.fullName === "" || form.phoneNumber === "") {
      return false
    }
    setContacts([...contacts, form])
    console.log(form)
    setForm({
      fullName: "",
      phoneNumber: "",
    })
  }
  return (
    <div>
      <form onClick={onSubmit}>
        <div>
          <input
            onChange={onChangeInput}
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
          />
        </div>
        <div>
          <input
            onChange={onChangeInput}
            name="phoneNumber"
            placeholder="Phone Number"
            value={form.phoneNumber}
          />
        </div>
        <button>Add</button>
      </form>
    </div>
  )
}

export default Form
