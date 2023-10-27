import Homepage from "../Pages/Homepage";
import React from "react";


export default function Header({setMainComponent}) {
  const myStyle = {
    border: "2px solid red",
    backgroundColor: "DodgerBlue",
  };


  function switchToHomepage()
  {
    const component = React.cloneElement(<Homepage/>,{myName:"blah"}) //Add prop
    setMainComponent(component)
  }
  return (
    <>



      <div>
        <span>
        <ul>
          <a name="Lists" onClick={switchToHomepage}>Homepage</a>
        </ul>
        </span>

      </div>


    </>
  );
}
