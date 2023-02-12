import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import { NavigationStyled } from "./styles/Nav.styles";
function Nav() {
  const [toggleNav, setToggleNav] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
  const location = useLocation();

  const matchPathName = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  const onClick = (e) => {
    setToggleNav((prevState) => !prevState);
  };
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  return (
    <NavigationStyled>
      <figure>
        <img src={logo} alt="Space Tourism" />
      </figure>
      <div className="hr"></div>
      <button className="toggleButton" onClick={onClick}>
        {toggleNav ? <FaTimes /> : <FaBars />}
      </button>
      {(toggleNav || screenWidth > 500) && (
        <ol start="0">
          <li
            onClick={() => navigate("/")}
            className={matchPathName("/") ? "active" : ""}
          >
            Home
          </li>
          <li
            onClick={() => navigate("/destination")}
            className={matchPathName("/destination") ? "active" : ""}
          >
            Destination
          </li>
          <li
            onClick={() => navigate("/crew")}
            className={matchPathName("/crew") ? "active" : ""}
          >
            Crew
          </li>
          <li
            onClick={() => navigate("/technology")}
            className={matchPathName("/technology") ? "active" : ""}
          >
            Technology
          </li>
        </ol>
      )}
    </NavigationStyled>
  );
}

export default Nav;
