import React, { useState } from "react";
import add from "../../images/add.png";
import "./Contact.css";
import userData from "../../json/sampleData.json";
import AddContact from "../AddAndEditContact/AddAndEditContact.jsx";
import AllContacts from "./AllContactDetails";

function Contact() {
  const [isShowAddContact, setIsShowAddContact] = useState(false);
  const [pageName, setPageName] = useState("");
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="contact">
        <button
          className="allContact"
          onClick={() => {
            setIsShowAddContact(true);
            setPageName("Add Contact");
          }}
        >
          All Contacts <img src={add} alt="" />
        </button>
        <input
          type="text"
          placeholder="Search Contact"
          className="searchContact"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        {userData
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.name.toLowerCase().includes(search);
          })
          .map((items) => {
            return (
              <AllContacts
                key={items.id}
                id={items.id}
                name={items.name}
                phoneNumber={items.mobile}
                setPageName={setPageName}
                setIsShowAddContact={setIsShowAddContact}
                email={items.email}
                address={items.address}
              />
            );
          })}
      </div>
      {isShowAddContact ? (
        <AddContact
          pageName={pageName}
          setIsShowAddContact={setIsShowAddContact}
        />
      ) : null}
    </>
  );
}

export default Contact;
