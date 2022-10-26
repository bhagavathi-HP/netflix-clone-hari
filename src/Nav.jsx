import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "../src/Nav.css";
const Nav = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const transitionScroll = () => {
    if (window.scrollY > 100 || window.scrollX < 30) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionScroll);
    return () => window.removeEventListener("scroll", transitionScroll);
  }, []);
  return (
    <NavContainer>
      <div className={`Navdiv ${show && "NavBlack"}`}>
        <img
          onClick={() => navigate("/")}
          className="LogoImg"
          src="https://pngimg.com/uploads/netflix/small/netflix_PNG32.png"
          alt=""
        />
        <img
          onClick={() => navigate("/profile")}
          className="SubLogoimg"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </NavContainer>
  );
};

export default Nav;
const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
