import MainLayout from "./components/Layouts/MainLayout";
import Homepage from "./components/Pages/Homepage";
import "./App.css";
import { Component } from "react";
import { useState } from "react";
import React from "react";

function App() {

  //const [mainComponent,setMainComponent] = useState(Homepage);

  //const mainComp = React.cloneElement(mainComponent);

  return (
    <>
      <MainLayout>
        <Homepage/>
      </MainLayout>
    </>
  );
}

export default App;
