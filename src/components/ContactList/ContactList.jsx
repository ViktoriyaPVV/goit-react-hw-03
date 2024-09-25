import React from "react";
import Contact from "../Contact/Contact";
const ContactList = ({ phonebookData, onDelete }) => {
  return (
    <ul>
      {phonebookData.map((item) => (
        <Contact
          key={item.id}
          name={item.name}
          number={item.number}
          onDeleteContact={onDelete}
        />
      ))}
    </ul>
  );
};

export default ContactList;
