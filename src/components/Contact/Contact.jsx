import React from "react";
import { FaUser, FaPhone } from "react-icons/fa";
const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <li>
      <p>
        <FaUser />
        {name}
      </p>
      <p>
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
