import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ApiDataShown = ({ abc }) => {
  return (
    <>
      <div className="m-4 container contents">
        <div className="card-body border border-1 w-1/2 m-4 border-solid rounded-lg border-yellow-600 ">
          <div className="text-lg">{abc.title}</div>
          <div className="flex space-x-4">
            <div></div>
            <div className="flex ">
              <div className="grid place-items-center">{abc.author}</div>
              <div className="divider divider-horizontal"></div>
              <div className="grid place-items-center">
                {abc.num_comments} comments
              </div>
            </div>
          </div>
          <div className="text-cyan-800 ml-4">
            <Link to={abc.url}>Read More</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApiDataShown;
