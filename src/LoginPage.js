import { Formik, useFormik } from 'formik';
import React from 'react'
import * as Yup from 'yup'
import './LoginPage.css'
function LoginPage() {
  function callloginApi()
  {
    console.log("calling api");
  }
  const schema=Yup.object().shape({
    name:Yup.string().max(10,"sooo long").min(5),
    surname:Yup.string().min(4).max(12,"toooo long")
  })
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    ...Formik
  } = useFormik({
    initialValues: { name: "", surname: "" },
    onSubmit: callloginApi,
    validationSchema: schema,
  });
  console.log("content of Formik",Formik);
  console.log("name and surname",values.name,values.surname)
  return (
    <div className="LoginPage">
      <div className="LoginPage__Block">
        <div className="LoginPage__Title">Login</div>
        <form onSubmit={handleSubmit}>
          <div className="name">
            <input
              name="name"
              id="name"
              type="text"
              placeholder="sanskar"
              onBlur={handleBlur}
              value={values.name}
              onChange={handleChange}
            ></input>
          </div>
          <div className="surname">
            <input
              name="surname"
              id="surname"
              type="text"
              placeholder="sharma"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.surname}
            ></input>
          </div>
          {touched.name&&errors.name && <div className="error">{errors.name}</div>}
          {touched.surname&&errors.surname && <div className="error">{errors.surname}</div>}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage