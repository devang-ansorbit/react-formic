import { isFunction } from "formik";
import React, { useMemo, useCallback, useState } from "react";
import SetData from "./SetData";

const Courses = () => {
  const courseList = [
    {
      id: "front-end",
      name: "Front End",
      amount: 1500,
      isSelected: false,
    },
    {
      id: "back-end",
      name: "Back End",
      amount: 1800,
      isSelected: false,
    },
    {
      id: "php",
      name: "PHP",
      amount: 900,
      isSelected: false,
    },
  ];

  const [value, setValue] = useState(false);

  const [courses, setCourses] = useState(courseList);

  const selectedCourses = useMemo(() => {
    return courses.filter((c) => c.isSelected);
    // return courses;
  }, [courses]);

  const totalPrice = useMemo(() => {
    console.log("I am selected:", selectedCourses);
    const total = selectedCourses.reduce(
      (total, course) => total + course.amount,
      0
    );
    return total;
  }, [selectedCourses]);

  const handleChange = useCallback(
    (id) => {
      console.log("hey:", courseList);
      const coursesList = courses.map((c) => {
        if (c.id === id) {
          return { ...c, isSelected: !c.isSelected };
        }
        return c;
      });
      setCourses(coursesList);
    },
    [courses]
  );

  const arr = JSON.parse(localStorage.getItem("user"));
  console.log(arr);

  const handleClick = () => {
    // let obj = arr[arr.length - 1];
    // let selected_courses = selectedCourses;
    // arr.splice(arr.length - 1, 1);
    // arr.push({ ...obj, selected_courses });
    // console.log("I am final:", arr);
    // localStorage.setItem("user", JSON.stringify(arr));
    setValue(true);
  };

  return (
    <div>

    <div style={{ width: "40%", margin: "auto" }}>
      {courses.map((ele, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <input
            onChange={(e) => {
              // console.log(e);
              handleChange(ele.id);
            }}
            type='checkbox'
          />
          <label>{ele.name}</label>
          <h5>{ele.price}</h5>
        </div>
      ))}

        <h1>Price (Rs) : {totalPrice}</h1>
        <h2>Selected Courses : {selectedCourses.length}</h2>

        <div style={{ border: "1px solid", width: "45px", margin: "auto" }}>
          <button onClick={() => handleClick()}>JOIN</button>
        </div>

    </div>

      {value && <SetData data={arr} />}

    </div>
  );
};

export default Courses;
