import React, { useState } from "react";
import Display from "./components/display";
import Numpad from "./components/numpad";

export default function App() {
  const [calculation, setCalculation] = useState("")
  const [result, setResult] = useState("")

  function handleCalculation(value) {
    setCalculation(calculation + value)
  }
  function handleResult() {
    setResult(eval(calculation))
  }
  function handleAllClear() {
    setCalculation("")
    setResult("")
  }
  function handleBackspace() {
    setCalculation(calculation.slice(0, -1))
  }

  return (
    <>
      <div className="container w-25 bg-light rounded-3 p-3">
        <Display calculation={calculation} result={result} />

        <Numpad />
      </div>
    </>

  )
}