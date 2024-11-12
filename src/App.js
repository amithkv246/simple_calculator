import React from "react";
import Numpad from "./components/numpad";
import Display from "./components/display";

export default function App() {
  return (
    <>
      
      <div className="container w-25 bg-light rounded-3 d-flex justify-content-center align-items-center">
        {/* <Display calculation={"1+2"} result={"3"}/> */}
        <Numpad />
      </div>
    </>

  )
}