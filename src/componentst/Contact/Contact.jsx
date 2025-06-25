import { MdDeleteOutline } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { toast, Slide } from "react-toastify";
import style from "./Contact.module.css";

const Contact = ({ id, name, number, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
    toast.success("Contact deleted", {
      transition: Slide,
      icon: <MdDeleteOutline />,
      className: style.customToastDelete,
    });
  };

  return (
    <div className={style.contactItem}>
      <p className={style.contactItemText}>
        <FaUser />
        {name}
      </p>
      <p className={style.contactItemText}>
        <FaPhoneAlt />
        {number}
      </p>
      <button
        className={style.buttonDeleteContact}
        onClick={handleDelete}
        type="button"
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
