import "./Header.css";
import Homepage from "../Pages/Homepage";
import Comments from "../Pages/API/Comments";
import React from "react";

export default function Header({ setMainComponent }) {

  function switchTo(string) {
    const component = string;
    setMainComponent(component);
  }




  return (
    <>
      <ul className="menuList">
        <div className="Logo">
          <a href="#" onClick={() => switchTo(<Homepage/>)}>
            <img className="LogoIcon" src="../src/assets/y18.svg" />
          </a>
        </div>
        <li className="fontLogo" onClick={() => switchTo(<Homepage/>)}>
          <a href="#" className="fontLogo">
            Hacker News
          </a>
        </li>
        <div className="menuContainer">
          <li className="menuPoint">
            <a href="#">new</a>
          </li>
          |
          <li className="menuPoint">
            <a href="#">past</a>
          </li>
          |
          <li className="menuPoint">
            <a href="#" onClick={() => switchTo(<Comments/>)}>comments</a>
          </li>
          |
          <li className="menuPoint">
            <a href="# " onClick={() => switchTo(<AskList/>)}>ask</a>
          </li>
          |
          <li className="menuPoint">
            <a href="#">show</a>
          </li>
          |
          <li className="menuPoint">
            <a href="#">jobs</a>
          </li>
          |
          <li className="menuPoint">
            <a href="#">submit</a>
          </li>
        </div>
        <li className="menuLogin">login</li>
      </ul>
    </>
  );
}
