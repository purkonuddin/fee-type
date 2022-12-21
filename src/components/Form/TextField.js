import React from "react";
import { ErrorMessage, useField, Field } from "formik";

function TextField({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="mt-2">
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`form-control shadow-none mt-1 ${
          meta.touched && meta.error && "is-invalid"
        }`}
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage
        component="div"
        name={field.name}
        style={{ color: "red", fontSize: "12px" }}
      />
    </div>
  );
}

export function SelectOption({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="mt-2">
      <label htmlFor={field.name}>{label}</label>
      <Field
        as="select"
        name={field.name}
        className={`form-control shadow-none mt-1 ${
          meta.touched && meta.error && "is-invalid"
        }`}
        {...field}
        {...props}
        autoComplete="off"
      >
        <option value="active">active</option>
        <option value="nonaktif">nonaktif</option>
      </Field>
      <ErrorMessage
        component="div"
        name={field.name}
        style={{ color: "red", fontSize: "12px" }}
      />
    </div>
  );
}

export function TextAreaField({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="mt-2">
      <label htmlFor={field.name}>{label}</label>
      <textarea
        className={`form-control shadow-none mt-1 ${
          meta.touched && meta.error && "is-invalid"
        }`}
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage
        component="div"
        name={field.name}
        style={{ color: "red", fontSize: "12px" }}
      />
    </div>
  );
}

export default TextField;
