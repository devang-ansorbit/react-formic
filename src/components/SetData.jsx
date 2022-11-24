import './module.css'

const SetData = (props) => {
    console.log(props);
    const {data} = props;
    console.log("Hello",data)

    return (
        <div id='container'>
            {
                data.map((course,id) => (
                    <div key={id} className='card'>
                        <div className='first_box'>
                            <div className='image_box'>
                                <img src='' alt="" />
                            </div>
                            <h2>{course.firstName + course.lastName}</h2>
                            <p>{course.email}</p>
                        </div>

                        <div className='second_box'>
                           <h5>Contact No. : {course.phone}</h5>
                            <p>Address : {course.values.address}</p>
                            <p>State: {course.values.state}</p>
                            <p>Country : {course.values.country}</p>
                            <p>Pincode : {course.values.pinCode}</p>
                            <p>Date of Birth : {course.dateOfBirth}</p>
                            <p>Time : {course.values.time}</p>
                            <p>Date : {course.values.date}</p>
                        </div>

                        <div className='last_box'>
                            <h3>Selected Courses</h3>
                                <ul>
                                    {course.selected_courses.map((e)=>(
                                        <li>{<p>{e.name} - ₹{e.amount}/-</p>}</li>
                                    ))
                                    }
                                </ul>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default SetData ;