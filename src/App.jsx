import MainLayout from "./components/Layouts/MainLayout";
import Homepage from "./components/Pages/Homepage";
import Lists from "./components/Header/Lists";
import "./App.css";
import { Component } from "react";
import { useState } from "react";
import React from "react";

function App() {

  const [mainComponent,setMainComponent] = useState({page:<Homepage/>});

  //const mainComp = React.cloneElement(mainComponent);

  const mainComp = mainComponent.page

  return (
    <>
      <MainLayout setMainComponent={setMainComponent}>
        {mainComp}
      </MainLayout>
    </>
  );
}

export default App;
