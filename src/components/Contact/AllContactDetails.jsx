import deleteIcon from "../../images/trash-bin.png";
import view from "../../images/view.png";
import pencil from "../../images/pencil.png";
import profile from "../../images/user.png";
import ContactDetails from "../ContactDetails/ContactDetails";
import { useState } from "react";
function AllContacts({
  id,
  name,
  phoneNumber,
  setPageName,
  setIsShowAddContact,
  email,
  address,
}) {
  const [showContactDetails, setShowContactDetails] = useState(false);
  return (
    <div className="contactList">
      <p>{id}</p>
      <div className="basicInfo">
        <img src={profile} alt="" />
        <div>
          <p>{name}</p>
          <p>{phoneNumber}</p>
        </div>
      </div>
      <div className="editMode">
        <button
          onClick={() => {
            setShowContactDetails(true);
          }}
        >
          <img src={view} alt="" />
        </button>
        <button>
          <img src={deleteIcon} alt="" />
        </button>
        <button
          onClick={() => {
            setPageName("Edit Contact");
            setIsShowAddContact(true);
          }}
        >
          <img src={pencil} alt="" />
        </button>
      </div>
      {showContactDetails ? (
        <ContactDetails
          setShowContactDetails={setShowContactDetails}
          name={name}
          email={email}
          address={address}
          phoneNumber={phoneNumber}
        />
      ) : null}
    </div>
  );
}
export default AllContacts;
