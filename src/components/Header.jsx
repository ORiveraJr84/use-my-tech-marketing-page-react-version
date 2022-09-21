import React from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import WarningMessage from "./WarningMessage";

const HeaderWrapper = styled.header`
  background-color: var(--darkest-color);
  width: 100vw;
  height: 4rem;
  position: fixed;
  top: 0;
  z-index: 1;
`;
const InnerHeaderWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0px;
`;

const Nav = styled.nav`
  align-items: baseline;
  display: flex;
  justify-content: space-between;
  width: 32rem;

  ul {
    display: flex;
    justify-content: space-between;

    li {
      border: 1px solid red;
    }
  }

  a:hover {
    color: var(--main-midtone-color);
  }

  p {
    color: var(--faded-main-midtone-color);
    cursor: not-allowed;
  }
`;

const NavButtons = styled.div`
  button.reverse-btn {
    margin-right: calc(1vw + 5px);
    border-color: var(--brightest-color);
    background-color: rgba(0, 0, 0, 0);
    color: var(--brightest-color);

    :hover {
      background-color: var(--secondary-highlight-color);
    }
  }
`;
const MobileNav = styled.nav``;

const Logo = styled.img`
  width: 12rem;
  height: auto;
  display: flex;

  :hover {
    opacity: 85%;
  }
`;

const activeLinkStyle = {
  borderBottom: "4px solid var(--main-highlight-color)",
};

const inactiveLinkStyle = {
  margin: "inherit",
};

const Header = ({ dismissed, setDismissed }) => {
  let navigate = useNavigate();
  const displayWarningMessage = (
    <WarningMessage dismissed={dismissed} setDismissed={setDismissed} />
  );
  if (useLocation().pathname === "/") {
    return (
      <HeaderWrapper>
        <InnerHeaderWrapper className="container">
          <Link to="/">
            <Logo
              id="logo"
              src="img/Use My Tech Horizontal Logo_Teal Icon.png"
              alt=""
            />
          </Link>
          <Nav className="main-nav">
            <NavLink
              to="/"
              style={({ isActive }) =>
                isActive ? activeLinkStyle : inactiveLinkStyle
              }
            >
              Home
            </NavLink>
            <NavLink
              to="meet-the-team"
              style={({ isActive }) =>
                isActive ? activeLinkStyle : inactiveLinkStyle
              }
            >
              Meet The Team
            </NavLink>
            <p>Contact</p>
            <NavButtons className="button-group">
              <button
                className="reverse-btn"
                onClick={() => navigate("/login")}
              >
                Log In
              </button>
              <button onClick={() => navigate("/request-demo")}>
                Request Demo
              </button>
            </NavButtons>
          </Nav>
          <MobileNav className="burger-nav">
            <svg
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 489.6 489.6"
              preserveAspectRatio="xMidYMid meet"
            >
              <g>
                <path d="M418.3,149.3h-347c-9.7,0-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5h347c9.7,0,17.5,7.8,17.5,17.5S428,149.3,418.3,149.3z" />
                <path d="M418.3,262.3h-347c-9.7,0-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5h347c9.7,0,17.5,7.8,17.5,17.5S428,262.3,418.3,262.3z" />
                <path d="M418.3,375.3h-347c-9.7,0-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5h347c9.7,0,17.5,7.8,17.5,17.5S428,375.3,418.3,375.3z" />
              </g>
            </svg>
          </MobileNav>
        </InnerHeaderWrapper>
        {dismissed === false ? displayWarningMessage : ""}
      </HeaderWrapper>
    );
  } else {
    return (
      <HeaderWrapper>
        <InnerHeaderWrapper className="container">
          <Link to="/">
            <Logo
              id="logo"
              src="img/Use My Tech Horizontal Logo_Teal Icon.png"
              alt=""
            />
          </Link>
          <Nav className="main-nav">
            <NavLink
              to="/"
              style={({ isActive }) =>
                isActive ? activeLinkStyle : inactiveLinkStyle
              }
            >
              Home
            </NavLink>
            <NavLink
              to="meet-the-team"
              style={({ isActive }) =>
                isActive ? activeLinkStyle : inactiveLinkStyle
              }
            >
              Meet The Team
            </NavLink>
            <p>Contact</p>
            <NavButtons className="button-group">
              <button
                className="reverse-btn"
                onClick={() => navigate("/login")}
              >
                Log In
              </button>
              <button onClick={() => navigate("/request-demo")}>
                Request Demo
              </button>
            </NavButtons>
          </Nav>
          <MobileNav className="burger-nav">
            <svg
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 489.6 489.6"
              preserveAspectRatio="xMidYMid meet"
            >
              <g>
                <path d="M418.3,149.3h-347c-9.7,0-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5h347c9.7,0,17.5,7.8,17.5,17.5S428,149.3,418.3,149.3z" />
                <path d="M418.3,262.3h-347c-9.7,0-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5h347c9.7,0,17.5,7.8,17.5,17.5S428,262.3,418.3,262.3z" />
                <path d="M418.3,375.3h-347c-9.7,0-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5h347c9.7,0,17.5,7.8,17.5,17.5S428,375.3,418.3,375.3z" />
              </g>
            </svg>
          </MobileNav>
        </InnerHeaderWrapper>
      </HeaderWrapper>
    );
  }
};

export default Header;
