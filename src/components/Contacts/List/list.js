import React, { useState } from "react"

const List = ({ contactsList }) => {
  const [filterText, setFilterText] = useState("")
  const filtered = contactsList.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    )
  })
  return (
    <div>
      <input
        placeholder="Filter content"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      {filtered.map((contactList, key) => (
        <div key={key}>
          <ul className="list">
            <li>
              <span>{contactList.fullName}</span>
              <span>{contactList.phoneNumber}</span>
            </li>
          </ul>
        </div>
      ))}
      <br />
      <span>Total Result </span>
      <span style={{ color: "red" }}>({filtered.length})</span>
      <br />
      <br />
    </div>
  )
}

export default List
