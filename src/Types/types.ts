import { FormikHelpers } from "formik";

export interface Results {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
  description: string;
}

export interface SearchFormValues {
  input: string;
}

export type SearchFormSubmitHandler = (
  values: SearchFormValues,
  actions: FormikHelpers<SearchFormValues>
) => void;
