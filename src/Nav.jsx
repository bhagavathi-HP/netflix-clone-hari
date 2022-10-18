import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "../src/Nav.css";
const Nav = () => {
  const [show, setShow] = useState(false);
  const transitionScroll = () => {
    if (window.scrollY > 100) {
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
          className="LogoImg"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt=""
        />
        <img
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
