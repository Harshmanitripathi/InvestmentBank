import React, { useState } from "react";
import Header from "./listing";

var data;


const useValue = () => {
    const [value,setvalue] = useState(null);
    const transferValue = (newValue) => {
        setvalue(newValue);
        console.log(value)
    }
    transfervalue(value);
    console.log(data);
    return (
        [value,transferValue]
    )
};
export var data1 = data;
console.log(data1)

export function transfervalue(value) {
    return value;
}
export default useValue;