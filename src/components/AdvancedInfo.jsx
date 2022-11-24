import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import './module.css';


const validation_schema = Yup.object().shape({
  address: Yup.string().max(100, "Too Long!"),
  country: Yup.string().typeError("Enter the valid country Name"),
});


function AdvancedInfo() {
  const { values, errors, touched, handleBlur, handleSubmit, handleChange, isValid, dirty } =
    useFormik({
      initialValues: {
        address: "",
        country: "",
        state: "",
        pinCode: "",
        profileImage: "",
        time: "",
        date: "",
      },

      validationSchema: Yup.object().shape({
        address: Yup.string()
          // .min(20)
          .max(100, "Too Long!")
          .required("Please enter address"),
        country: Yup.string().required("Please Enter Country's Name"),
        state: Yup.string().required("Please Enter State's Name"),
        pinCode: Yup.number()
          .positive()
          .required("Please enter Pincode"),
        profileImage: Yup.string().required(
          "Please enter the URL of your profile"
        ),
        date: Yup.date()
          .nullable()
          .transform((curr, orig) => (orig === "" ? null : curr))
          .required("Please fill thr date-slot"),
        time: Yup.string().required("Please fill the time-slot"),
      }),

      onSubmit: (values) => {
        console.log(values);
        console.log("hELLO");
      },
    });

    const arr = JSON.parse(localStorage.getItem("user"));
    // let obj = arr[arr.length-1];
    // console.log(obj)
    // console.log(arr)

  const navigate = useNavigate();
  
  const handleClick = () =>{
    let obj = arr[arr.length-1];
    arr.splice(arr.length-1,1)
    arr.push({...obj,values});
    localStorage.setItem("user",JSON.stringify(arr))
    navigate('/courses')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            value={values.address}
            placeholder='enter the address'
            name='address'
            onBlur={handleBlur}
            onChange={handleChange}
          />

          {errors.address && touched.address ? <p>{errors.address}</p> : null}
        </div>

        <div>
        <input
          type='text'
          value={values.country}
          placeholder='enter the Country'
          name='country'
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.country && touched.country ? <p>{errors.country}</p> : null}
        </div>

        <div>
        <input
          type='text'
          value={values.state}
          placeholder='enter the state'
          name='state'
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.state && touched.state ? <p>{errors.state}</p> : null}
        </div>

        <div>
        <input
          type='number'
          value={values.pinCode}
          placeholder='enter the pinCode'
          name='pinCode'
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.pinCode && touched.pinCode ? <p>{errors.pinCode}</p> : null}
        </div>

        <div>
        <input
          type='file'
          value={values.profileImage}
          accept='image/*'
          placeholder='enter profileImage URL'
          name='profileImage'
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.profileImage && touched.profileImage ? <p>{errors.profileImage}</p> : null}
        </div>

        <div>
        <input
          type='time'
          value={values.time}
          placeholder='enter the time-slot'
          name='time'
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.time && touched.time ? <p>{errors.time}</p> : null}
        </div>

        <div>
        <input
          type='date'
          value={values.date}
          placeholder='enter the date-duration'
          name='date'
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.date && touched.date ? <p>{errors.date}</p> : null}
        </div>

        {/* <input type='submit' id="submit" /> */}
        <div
        style={{
          display: "flex",
          alignContent:'center',
          justifyContent: "space-evenly",
          margin: "15px auto auto",
          height: "auto",
          cursor: "pointer",
        }}
      >
    
          <button>Previous</button>
       
          <button onClick={()=>handleClick()}  disabled={!(isValid & dirty)} type="submit">Next</button>

      </div>
      </form>

     
    </div>
  );
}

export default AdvancedInfo;
