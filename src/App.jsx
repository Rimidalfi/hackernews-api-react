import MainLayout from "./components/Layouts/MainLayout";
import Homepage from "./components/Pages/Homepage";
import Lists from "./components/Header/Lists";
import "./App.css";
import { Component } from "react";
import { useState, createContext } from "react";
import React from "react";

function App() {

  const [mainComponent,setMainComponent] = useState(<Homepage/>);

  const setMainCompContext = createContext(setMainComponent);

  const mainComp = React.cloneElement(mainComponent,{setMainComponent:setMainComponent});

  return (
    <>

      <MainLayout setMainComponent={setMainComponent}>
        {mainComp}
      </MainLayout>
    </>
  );
}

export default App;

