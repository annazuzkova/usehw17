import React from "react";

export function ContactList({ contacts, onDelete }) {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <h3>{contact.name}</h3>
          <p>{contact.number}</p>
          <button onClick={() => onDelete(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
