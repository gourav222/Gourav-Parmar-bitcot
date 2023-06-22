import React from "react";
import close from "../../images/close.png";
import "./ContactDetails.css";
import "../AddAndEditContact/AddAndEditContact.css";
function ContactDetails({
  setShowContactDetails,
  name,
  email,
  phoneNumber,
  address,
}) {
  return (
    <>
      <div className="modal-wrapper"></div>
      <div className="contact-details">
        <div className="close-contact">
          <h2>Contact Details</h2>
          <button
            onClick={() => {
              setShowContactDetails(false);
            }}
          >
            <img src={close} alt="" />
          </button>
        </div>
        <div className="Line"></div>
        <div className="details">
          <div>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Number: {phoneNumber}</p>
            <p>Address: {address}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactDetails;
