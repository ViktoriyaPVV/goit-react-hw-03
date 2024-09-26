import React from "react";
import { FaUser, FaPhone } from "react-icons/fa";
import s from "./Contact.module.css";
const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={s.item}>
      <p className={s.text}>
        <FaUser />
        {name}
      </p>
      <p className={s.text}>
        <FaPhone />
        {number}
      </p>
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
