import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";

import ContactForm from "./componentst/ContactForm/ContactForm";
import SearchBox from "./componentst/SearchBox/SearchBox";
import ContactList from "./componentst/ContactList/ContactList";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <SearchBox />
      <ContactList />
      <ToastContainer />
    </>
  );
}

export default App;
