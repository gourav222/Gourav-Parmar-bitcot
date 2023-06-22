import React, { useState } from "react";
import close from "../../images/close.png";
import "./AddAndEditContact.css";
import ReactDOM from "react-dom";
import useData from "../../json/sampleData.json";
function AddContact({ pageName, setIsShowAddContact }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  return ReactDOM.createPortal(
    <>
      <div className="modal-wrapper"></div>
      <div className="addContact">
        <div className="closeAddContact">
          <h2>{pageName}</h2>
          <button
            onClick={() => {
              setIsShowAddContact(false);
            }}
          >
            <img src={close} alt="" />
          </button>
        </div>
        <div className="Line"></div>
        <form className="addContactForm">
          <div>
            <label htmlFor="name">Name:</label>
            <br />
            <input
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="Email">Email:</label>
            <br />
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="PhoneNumber">PhoneNumber:</label>
            <br />
            <input
              type="text"
              placeholder="Enter Your Phone Number"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
          </div>
          <div>
            <label
              htmlFor="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            >
              Adress:
            </label>
            <br />
            <input
              type="text"
              placeholder="Enter Your Address"
              value={address}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
          </div>

          <div className="addContactButton">
            <button className="submitContact" type="submit">
              Submit
            </button>
            <button className="resetContact">Reset</button>
          </div>
        </form>
      </div>
    </>,
    document.querySelector(".portalModalDiv")
  );
}

export default AddContact;
