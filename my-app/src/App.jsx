import React, { useState, useEffect } from "react";
import { Form } from "./components/Form";
import { Filter } from "./components/Filter";
import { ContactList } from "./components/ContactList";

const defaultContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    if (savedContacts) {
      const parsed = JSON.parse(savedContacts);
      return parsed.length ? parsed : defaultContacts;
    }
    return defaultContacts;
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const newUser = { id: `id-${Date.now()}`, name, number };
    setContacts((prev) => [...prev, newUser]);
  };

  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  const handleFilterChange = (event) => setFilter(event.target.value);

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = filter
    ? contacts.filter((contact) =>
        contact.name.toLowerCase().includes(normalizedFilter)
      )
    : contacts;

  return (
    <>
      <Form onAdd={addContact} />
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </>
  );
}
