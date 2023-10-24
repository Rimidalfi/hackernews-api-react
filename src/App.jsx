import MainLayout from "./components/Layouts/MainLayout";
import Homepage from "./components/Pages/Homepage";
import "./App.css";
import { Component } from "react";
import { useState } from "react";

function App() {

  const [mainComponent,setMainComponent] = useState(Homepage);

  return (
    <>
      <MainLayout setMainComponent={setMainComponent}>
        {mainComponent}
      </MainLayout>
    </>
  );
}

export default App;
