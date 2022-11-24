import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Link to='/basicinfo'>Basic Information</Link>
      <Link to='/advancedinfo'>Advanced Information</Link>
      <Link to='/courses'>Courses</Link>
    </div>
  );
};

export default Navbar;
