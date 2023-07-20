import { Navbar } from "../Landing/landing";
import React, {
  useState,
  useContext,
  forwardRef,
  useImperativeHandle,
  createContext,
  useMemo,
} from "react";
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
  const [copyApiData, setCopyApiData] = useState([]);
  const [showMore, setSeeMore] = useState(false);
  const [getRadioButtonClicked, setRadioButtonClicked] = useState(null);
  const [getRadio1, getRadio2, getRadio3, Radio1, Radio2, Radio3] = Filter();
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
      setCopyApiData(apiData.hits);
      console.log(apiData.hits);
    } catch (error) {
      console.log(error);
    }
  };

  if (!showMore) {
    seeMoreButtonView = "See More";
  }

  const handleSeeMoreClick = () => {
    setSeeMore(!showMore);
  };
  useEffect(() => {
    fetchApiData(API);
  }, [API]);

  useMemo(() => {
    const applyApiData = () => {
      let newApiData = [...copyApiData];

      if (getRadio1) {
        newApiData = newApiData.filter((comments) => {
          return comments.num_comments < 100;
        });
      }
      if (getRadio2) {
        newApiData = newApiData.filter((comments) => {
          return comments.num_comments < 500;
        });
      }
      if (getRadio3) {
        newApiData = newApiData.filter((comments) => {
          return comments.num_comments > 500;
        });
      }
      return newApiData;
    };
    setApiData(applyApiData());
  }, [getRadio1, getRadio2, getRadio3]);

  return (
    // <NoteContext.Provider value={handleFilterInput}>

    <div className="justify-evenly">
      <div className="flex justify-evenly m-4">
        <p className="grid text-2xl">Export Baskets</p>
        <div className="grid justify-items-end">
          <SearchInput onInputChange={handleValueChange} />
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2">
          <div className="flex justify-center m-4">
            <div className="m-4 container contents">
              <div className="card-body border border-1  h-96 w-1/2 m-4 border-solid rounded-lg border-yellow-600">
                <div className="">
                  <div className="text-sm">Filter</div>
                  <div className="space-y-4 mt-4">
                    <div className=" space-x-4">
                      <input
                        type="radio"
                        name="radio-1"
                        className="radio radio-warning"
                        checked={getRadio1}
                        onClick={Radio1}
                      />
                      <span>Comments less than 100</span>
                    </div>
                    <div className="flex space-x-4">
                      <input
                        type="radio"
                        name="radio-2"
                        className="radio radio-warning"
                        checked={getRadio2}
                        onClick={Radio2}
                      />
                      <span>Comments less than 500</span>
                    </div>
                    <div className="flex space-x-4">
                      <input
                        type="radio"
                        name="radio-3"
                        className="radio radio-warning"
                        checked={getRadio3}
                        onClick={Radio3}
                      />
                      <span>Comments greater than 500</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="grid justify-items-end">
            {showMore
              ? getApiData.map((items, index) => <ApiDataShown abc={items} />)
              : getApiData
                  .slice(0, 2)
                  .map((items, index) => <ApiDataShown abc={items} />)}

            <button onClick={handleSeeMoreClick}>{seeMoreButtonView}</button>
          </div>
        </div>
      </div>
    </div>
    // </NoteContext.Provider>
  );
};
export default Header;
