import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  const [dismissed, setDismissed] = useState(false);

  return (
    <>
      <Header dismissed={dismissed} setDismissed={setDismissed} />
      <Outlet context={dismissed} />
      <Footer />
    </>
  );
};

export default Layout;
