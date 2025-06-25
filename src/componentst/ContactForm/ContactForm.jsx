import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import style from "./ContactForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import { toast, Slide } from "react-toastify";

const initialValues = {
  name: "",
  phone: "",
};

const registerSchema = Yup.object().shape({
  name: Yup.string().min(3).max(50).required("Required"),
  phone: Yup.string().min(3).max(50).required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  const handleSubmit = (values, { resetForm }) => {
    const isDuplicate = contacts.some(
      (c) =>
        c.name.toLowerCase() === values.name.toLowerCase() ||
        c.number === values.phone
    );

    if (isDuplicate) {
      toast.error("This contact already exists!");
      return;
    }

    dispatch(addContact({ name: values.name, number: values.phone }));
    resetForm();
    toast.success("Contact created successfully", { transition: Slide });
  };

  return (
    <div className={style.formWrapper}>
      <h1>Phone Book</h1>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={registerSchema}
        initialValues={initialValues}
      >
        <Form className={style.form}>
          <label className={style.formLabel}>
            <h3>Name</h3>
            <Field className={style.formInput} type="text" name="name" />
            <ErrorMessage className={style.error} name="name" component="p" />
          </label>
          <label className={style.formLabel}>
            <h3>Phone</h3>
            <Field className={style.formInput} type="text" name="phone" />
            <ErrorMessage className={style.error} name="phone" component="p" />
          </label>
          <button className={style.buttonAddContact} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
