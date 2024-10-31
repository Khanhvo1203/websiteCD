import React from "react";
import Header from "./Header";
import ScrollToTop from "../components/Roll/ScrollToTop";
export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      {/* <footer></footer> */}
    </div>
  );
}
