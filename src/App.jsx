import React, { useEffect, useState } from "react";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import s from "./App.module.css";

const App = () => {
  const contactData = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  const [phonebookData, setPhonebookData] = useState(() => {
    const savedData = JSON.parse(window.localStorage.getItem("contacts"));
    if (savedData?.length) {
      return savedData;
    }
    return contactData;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(phonebookData));
  });

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filterContacts = phonebookData.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleAddContact = (newContact) => {
    setPhonebookData((prev) => {
      return [...prev, newContact];
    });
  };

  const deleteContact = (id) => {
    setPhonebookData(phonebookData.filter((item) => item.id !== id));
  };

  return (
    <div className={s.container}>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox filter={filter} onFilterChange={handleFilterChange} />
      <ContactList phonebookData={filterContacts} onDelete={deleteContact} />
    </div>
  );
};

export default App;
