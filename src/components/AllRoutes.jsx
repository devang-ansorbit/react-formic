import { Routes, Route } from "react-router-dom";
import AdvancedInfo from "./AdvancedInfo";
import BasicInfo from "./BasicInfo";
import Courses from "./Courses";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        {/* <Route path='/' element={<h1>Home</h1>} /> */}
        <Route path='/basicinfo' element={<BasicInfo />} />
        <Route path='/advancedinfo' element={<AdvancedInfo />} />
        <Route path='/courses' element={<Courses />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
