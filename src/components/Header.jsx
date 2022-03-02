import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  background: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4rem;
`;
const InnerHeaderWrapper = styled.div`
  background: lightblue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 100%;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 35%;
  background: lightpink;
  height: 100%;
  ul {
    background: lightgreen;
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 1.5rem;
  }
`;

const NavButtons = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
`;

const Header = ({ style }) => {
  return (
    <HeaderWrapper style={style}>
      <InnerHeaderWrapper>
        <div>logo</div>
        <Nav>
          <ul>
            <li>
              <a href="#">Some Link</a>
            </li>
            <li>
              <a href="#">Some Link</a>
            </li>
            <li>
              <a href="#">Some Link</a>
            </li>
          </ul>
          <NavButtons>
            <button>Button1</button>
            <button>Button2</button>
          </NavButtons>
        </Nav>
      </InnerHeaderWrapper>
    </HeaderWrapper>
  );
};

export default Header;
