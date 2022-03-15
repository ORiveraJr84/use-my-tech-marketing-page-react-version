import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid red;
`;

const Layout = () => {
  return (
    <AppWrapper>
      <Header />
      <Outlet />
      <Footer />
    </AppWrapper>
  );
};

export default Layout;
