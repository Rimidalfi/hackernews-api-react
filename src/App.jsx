import MainLayout from "./components/Layouts/MainLayout";
import Homepage from "./components/Pages/Homepage";
import Lists from "./components/Header/Lists";
import "./App.css";
import { Component } from "react";
import { useState } from "react";
import React from "react";

function App() {

  const [_mainComponent,_setMainComponent] = useState({page:<Homepage/>});

  const mainComp = React.cloneElement(_mainComponent.page,{setMainComponent:_setMainComponent,});

  //const mainComp = _mainComponent.page
  console.log("Func in APP", _setMainComponent)
  console.log("Func in APP", setMCV2)

  function setMCV2(mc)
  {

  }


  return (
    <>
      <MainLayout setMainComponent={_setMainComponent}>
        {mainComp}
      </MainLayout>
    </>
  );

    function Test(testvar)
    {

    }

}

export default App;

export function set_Main_Component(main_Component)
{
  Test(main_Component);
}