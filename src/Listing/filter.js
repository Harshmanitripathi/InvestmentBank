import React, { useState,useContext,useRef,useEffect } from "react";
import Header from "./listing";
import {NoteContext} from "./listing"


const Filter = () => {
    const [getRadio1,setRadio1] = useState(false);
    const [getRadio2,setRadio2] = useState(false);
    const [getRadio3,setRadio3] = useState(false);
    
    const Radio1 = (event) => {
      
        if(event) {
            setRadio1(!getRadio1);
            
            if(getRadio2 ==true) {
              setRadio2(!getRadio2);
            }
            if (getRadio3 ==true) {
              setRadio3(!getRadio3);
            }
            // handleFilterInputButton("less than 100")
        }
           
            
        
    };
    const Radio2 = (event) => {
        if(event) {
            setRadio2(!getRadio2);
            if(getRadio1 ==true) {
              setRadio1(!getRadio1);
            }
            if (getRadio3 ==true) {
              setRadio3(!getRadio3);
            }
            // handleFilterInputButton("less than 500");
        }
        
    };
    const Radio3 = (event) => {
        if(event) {
            setRadio3(!getRadio3);
            if(getRadio2 == true) {
              setRadio2(!getRadio2);
            }
            if (getRadio1 == true) {
              setRadio1(!getRadio1);
            }
            // From here how can i call the handleFilterInput() function of listing.js file inside header function?
            // handleFilterInputButton("greater than 500");
        }
        
    };
    return [getRadio1,getRadio2,getRadio3,Radio1,Radio2,Radio3];
  return (
    <>
      {/* <div className="m-4 container contents">
        <div className="card-body border border-1 w-full h-96 m-4 border-solid rounded-lg border-yellow-600">
          <div className="">
            <div className="text-sm">Filter</div>
            <div className="space-y-4 mt-4">
            <div className="flex space-x-4">
                
            <input type="radio" name="radio-1" className="radio radio-warning" checked = {getRadio1} onClick={Radio1}/>
            <span >Comments less than 100</span>
            </div>
            <div className="flex space-x-4">
            <input type="radio" name="radio-2" className="radio radio-warning" checked = {getRadio2} onClick={Radio2}/>
            <span >Comments less than 500</span>
            </div>
            <div className="flex space-x-4">
            <input type="radio" name="radio-3" className="radio radio-warning" checked = {getRadio3} onClick={Radio3}/>
            <span >Comments greater than 500</span>
            </div>
            </div>
            
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Filter;
