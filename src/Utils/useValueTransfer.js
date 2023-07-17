import React,{useState} from "react";
import Header from "../Listing/listing";

const useValueTransfer = () =>{
    const [valueToTransfer,setvalue] = useState('');
    console.log(valueToTransfer)
    const transferValue = (newValue) =>{
        setvalue(newValue)
        console.log(newValue)
    }
    return(
    [valueToTransfer,transferValue]
    );
};

export default useValueTransfer;