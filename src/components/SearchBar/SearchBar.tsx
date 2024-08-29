import { Field, Form, Formik } from "formik";
import { toast, Toaster } from "react-hot-toast";
import { SearchFormSubmitHandler } from "../../Types/types";
import s from "../SearchBar/SearchBar.module.css";
interface SearchBarProps {
  onSubmit: SearchFormSubmitHandler;
}
const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  return (
    <header className={s.header}>
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
      <Formik
        initialValues={{ input: "" }}
        onSubmit={(values, actions) => {
          if (!values.input) {
            toast.error("Please enter text to search for images");
          } else {
            onSubmit(values, actions);
          }
        }}
      >
        {() => (
          <Form className={s.form}>
            <Field
              className={s.input}
              name="input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
            <button className={s.btn} type="submit">
              Search
            </button>
          </Form>
        )}
      </Formik>
    </header>
  );
};

export default SearchBar;
