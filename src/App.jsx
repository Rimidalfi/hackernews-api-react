import MainLayout from "./components/Layouts/MainLayout";
import Homepage from "./components/Pages/Homepage";
import Lists from "./components/Header/Lists";
import "./App.css";
import { Component } from "react";
import { useState, createContext } from "react";
import React from "react";

export const MainContext = React.createContext();

function App() {
  const [mainComponent, setMainComponent] = useState(<Homepage />);

  const mainComp = React.cloneElement(mainComponent, {
    setMainComponent: setMainComponent,
  });

  return (
    <>
        <MainContext.Provider value={setMainComponent}>
          <MainLayout setMainComponent={setMainComponent}>{mainComp}</MainLayout>
        </MainContext.Provider>


    </>
  );
}

export default App;
