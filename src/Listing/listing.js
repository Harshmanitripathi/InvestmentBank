import { Navbar } from "../Landing/landing";
import React, { useState,useContext ,forwardRef, useImperativeHandle, createContext} from "react";
import useValueTransfer from "../Utils/useValueTransfer";
import SearchInput from "../Utils/searchInput";
import { useEffect } from "react";
import useValue from "./useValue";
import { transfervalue, data1 } from "./useValue";
import ApiDataShown from "../Utils/searchApiDataShown";
import Filter from "./filter";

// const Passed = () => {
//     useEffect(() => {
//         const value = getData(event);
//         console.log(value)
//         },[getData()])
// }

// export const NoteContext = createContext();

const Header = () => {
  let seeMoreButtonView = "See Less";
  const [data, setdata] = useState(null);
  const [getApiData, setApiData] = useState([]); 
  const [showMore, setSeeMore] = useState(false);
  const [getRadioButtonClicked, setRadioButtonClicked] = useState(null);
  const handleValueChange = (value) => {
    
    setdata(value);

    console.log(data); // Use the value as needed
  };
  console.log(data);
  let API = `http://hn.algolia.com/api/v1/search?query=${data}`;

  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const apiData = await res.json();
      setApiData(apiData.hits);
      console.log(apiData.hits);
    } catch (error) {
      console.log(error);
    }
  };

if(!showMore) {
  seeMoreButtonView = "See More";
}

  const handleSeeMoreClick = () => {
    setSeeMore(!showMore);
  }
  useEffect(() => {
    fetchApiData(API);
  }, [API]);

  
 const handleFilterInput =(buttonClick) => {
  let newApiData = [];
    switch(buttonClick){
      case "less than 100" :
        setApiData(getApiData);
         newApiData = getApiData.filter((comments) => {
          return comments.num_comments <100;
        })
        setApiData(newApiData);
        break;

        case "less than 500":
          setApiData(getApiData);
         newApiData = getApiData.filter((comments) => {
          return comments.num_comments <500;
        })
        setApiData(newApiData);
        break;

        case "greater than 500":
          setApiData(getApiData);
           newApiData = getApiData.filter((comments) => {
            return comments.num_comments >500;
          })
          setApiData(newApiData);
          break;
    }

    
}


  return (
    // <NoteContext.Provider value={handleFilterInput}>
      
    <div className="justify-evenly">
      <div className="flex justify-evenly m-4">
        <p className="grid text-2xl">Export Baskets</p>
        <div className="grid justify-items-end">
        <SearchInput onInputChange={handleValueChange} />
        </div>
      </div>
      <div className="flex justify-center m-4">
        <div><Filter handleFilterInputButton={handleFilterInput} /></div>
        <div className="grid justify-items-end">
          {showMore ? getApiData.map((items, index) => (
            <ApiDataShown abc={items} />
          )) : getApiData.slice(0,2).map((items,index) => (
              <ApiDataShown abc={items} />
          ))}
          
            <button onClick={handleSeeMoreClick}>{seeMoreButtonView}</button> 
          
        </div> 
      </div>
    </div>
    // </NoteContext.Provider>
  );
}
export default Header;
