import React from "react";
import Header from "./Header";
import ScrollToTop from "../components/Roll/ScrollToTop";
import HeaderLienhe from "./HeaderLienhe";
export default function Layout({ children, isLienhe }) {
  return (
    <div>
      {isLienhe ? <HeaderLienhe /> : <Header />}
      {children}
      {/* <footer></footer> */}
    </div>
  );
}
