import React from "react";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ phonebookData, onDelete }) => {
  return (
    <ul className={s.list}>
      {phonebookData.map((item) => (
        <Contact
          key={item.id}
          name={item.name}
          number={item.number}
          id={item.id}
          onDeleteContact={onDelete}
        />
      ))}
    </ul>
  );
};

export default ContactList;
