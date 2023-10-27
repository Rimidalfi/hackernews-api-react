import Homepage from "../Pages/Homepage";
import React from "react";


export default function Header({setMainComponent}) {
  const myStyle = {
    border: "2px solid red",
    backgroundColor: "DodgerBlue",
  };


  function switchToHomepage(string)
  {
    const component = string
    setMainComponent(component);
  }
  return (
    <>



      <div>
        <span>
        <ul>
          <a name="Lists" onClick={() => switchToHomepage(<Homepage />)}>Homepage</a>
        </ul>
        </span>

      </div>


    </>
  );
}
