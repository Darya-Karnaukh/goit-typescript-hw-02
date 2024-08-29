import { Field, Form, Formik } from "formik";
import { toast, Toaster } from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  return (
    <header>
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
          <Form>
            <Field
              name="input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
            <button type="submit">Search</button>
          </Form>
        )}
      </Formik>
    </header>
  );
};

export default SearchBar;
