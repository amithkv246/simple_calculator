import React, { useState } from "react";

export default function Numpad() {

    return (

        <React.Fragment>
            <div className="row gap-3 p-0 m-0">
                <div className="col bg-secondary rounded-1" onClick={handleAllClear()}>AC</div>
                <div className="col bg-secondary rounded-1" onClick={handleBackspace()}>BS</div>
                <div className="col">%</div>
                <div className="col" onClick={() => handleCalculation("/")}>/</div>
            </div>

            <div className="row gap-3 p-0 m-0">
                <div className="col" onClick={() => handleCalculation("7")}>7</div>
                <div className="col" onClick={() => handleCalculation("8")}>8</div>
                <div className="col" onClick={() => handleCalculation("9")}>9</div>
                <div className="col" onClick={() => handleCalculation("*")}>*</div>
            </div>

            <div className="row gap-3 p-0 m-0">
                <div className="col" onClick={() => handleCalculation("4")}>4</div>
                <div className="col" onClick={() => handleCalculation("5")}>5</div>
                <div className="col" onClick={() => handleCalculation("6")}>6</div>
                <div className="col" onClick={() => handleCalculation("-")}>-</div>
            </div>

            <div className="row gap-3 p-0 m-0">
                <div className="col" onClick={() => handleCalculation("1")}>1</div>
                <div className="col" onClick={() => handleCalculation("2")}>2</div>
                <div className="col" onClick={() => handleCalculation("3")}>3</div>
                <div className="col" onClick={() => handleCalculation("+")}>+</div>
            </div>

            <div className="row gap-3 p-0 m-0">
                <div className="col" onClick={() => handleCalculation(".")}>.</div>
                <div className="col" onClick={() => handleCalculation("0")}>0</div>
                <div className="col">+/-</div>
                <div className="col bg-success rounded-1" onClick={handleResult()}>=</div>
            </div>

        </React.Fragment>

    )
}