import React from "react";
import { Formik, Field, Form, useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import './module.css'

const validation_schema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("First name is required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is rquired"),
  phone: Yup.number()
    .typeError("that doesn't look like a phone number")
    .positive("Please enter Positive Digit")
    .required("Please enter phone number"),
  dateOfBirth: Yup.number()
    .positive("Enter the positive digits")
    .required("Please enter the Birth date")
    .min(8),
});

function BasicInfo() {
  let arr = [];

  const { values, errors, touched, handleBlur, handleSubmit, handleChange, isValid, dirty } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        dateOfBirth: "",
      },

      validationSchema: validation_schema ,

      onSubmit: (values) => {
        console.log(values);
      },
    });

    const navigate = useNavigate();

    const handleClick = () => {
      if(localStorage.getItem("user")==null){
        console.log("NULL")
        arr = [];
      }else{
        console.log("NOT-NULL") ;
        arr = JSON.parse(localStorage.getItem("user"));
      }
      arr.push(values)
      console.log(arr)
      localStorage.setItem('user',JSON.stringify(arr));
      navigate('/advancedinfo')
    }

  return (
   
    <div>
      <form>

        <div>
          <input
            type='text'
            name="firstName"
            value={values.firstName}
            placeholder='enter first name'
            onBlur={handleBlur}
            onChange={handleChange}
          />
         {errors.firstName && touched.firstName ? <p>{errors.firstName}</p> : null}
        </div>

        <div>
          <input
            type='text'
            name="lastName"
            value={values.lastName}
            placeholder='enter last name'
            onBlur={handleBlur}
            onChange={handleChange}
          />
         {errors.lastName && touched.lastName ? <p>{errors.lastName}</p> : null}
        </div>

        <div>
          <input
            type='number'
            name="phone"
            value={values.phone}
            placeholder='enter phone number'
            onBlur={handleBlur}
            onChange={handleChange}
          />
         {errors.phone && touched.phone ? <p>{errors.phone}</p> : null}
        </div>

        <div>
          <input
            type='text'
            name="email"
            value={values.email}
            placeholder='enter email'
            onBlur={handleBlur}
            onChange={handleChange}
          />
         {errors.email && touched.email ? <p>{errors.email}</p> : null}
        </div>

        <div>
          <input
            type='text'
            name="dateOfBirth"
            value={values.dateOfBirth}
            placeholder='enter date of birth'
            onBlur={handleBlur}
            onChange={handleChange}
          />
         {errors.dateOfBirth && touched.dateOfBirth ? <p>{errors.dateOfBirth}</p> : null}
        </div>

        <div style={{display:'flex',justifyContent:'space-evenly', margin:'15px auto auto',height:'35px'}}>
          <button disabled={true}>Previous</button>

          <button onClick={()=>handleClick()}  disabled={!(isValid & dirty)} type="submit">Next</button>
      </div>

      </form>

   
    </div>

  
  );
}

export default BasicInfo;
