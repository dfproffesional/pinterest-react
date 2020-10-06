import React, { Component, useEffect } from "react";
import "./Login__LayoutStyle.css";

const disableScroll = () => {
  window.scrollTo(0, 0);
};

export function Login__Layout(props) {
  window.addEventListener("scroll", disableScroll);

  useEffect(() => {});
  return (
    <>
      {/*Header*/}
      <header className="login-header">
        <div className="header__left">{props.children[0]}</div>
        <div className="header__right">{props.children[1]}</div>
      </header>

      {/*Content*/}
      <main className="login-content">
        {/*Content*/}
        <div className="content__title">{props.children[2]}</div>

        {/*Colash*/}
        <div className="login-colash">{props.children[3]}</div>
      </main>

      <div className="login-layer">
        <button className="layer__down effect">Down</button>
      </div>

      {/*Footer*/}
      <footer className="login-footer">
        <nav className="footer__nav">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Help</a>
          <a href="#">iPhone App</a>
          <a href="#">Android App</a>
          <a href="#">Users</a>
          <a href="#">Collections</a>
          <a href="#">Explore</a>
        </nav>
      </footer>
    </>
  );
}

//export default Login__Layout;
