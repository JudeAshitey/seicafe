
import { Link, } from "react-router-dom";

const NavBar = ({user}) => {
  return (
    <nav>
      <Link to="/orders">Order History</Link>{" "}
      <Link to="/orders/new">New Order</Link>{" "}
      <span>Welcome, {user.name}</span>
    </nav>
  );
};
export default NavBar;