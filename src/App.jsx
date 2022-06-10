import React from "react";
import { add , sub , mul , div } from "./Calc";

function App(){

    return(
        <>
            <ul>
            <h2>
                <li> Sum of two numbers is : {add(40,5)} </li>
                <li> Substration of two numbers is : {sub(40,5)} </li>
                <li> Multiplication of two numbers is : {mul(40,5)} </li>
                <li> Division of two numbers is : {div(40,6)} </li>
            </h2>
            </ul>
        </>
    );
}

export default App;