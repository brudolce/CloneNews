import "./Navbar.css";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  let history = useHistory();

  const route = (route) => {
    history.push(route);
  };

  return (
    <div className="Navbar">
      <img onClick={() => route("/")} src="./favicon.ico" alt="icon" />
      <p onClick={() => route("/")}>Clone News</p>
      <div onClick={() => route("/")}>top </div>
      {" | "}
      <div onClick={() => route("/new")}>new </div>
      {" | "}
      <div onClick={() => route("/best")}>best </div>
    </div>
  );
};

export default Navbar;
