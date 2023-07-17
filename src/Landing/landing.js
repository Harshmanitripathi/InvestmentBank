import React from "react";
import myImage from "../Images/regular_1708x683_Untitled-e7fde53f1e5631a8728cc9aefc1538e8.png";
import Drawer from "../Utils/drawer";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div class="flex justify-between m-4 bg-transparent">
      <p class="text-yellow-500 text-2xl">envest</p>
      <p><Link to={"/"}>Home</Link></p>
      <p><Link to={"/comparefunds"}>Compare Funds</Link></p>
      <p><Link to={"/blogs"}>Blogs</Link></p>
      <span class="mr-8">
      <Drawer/>
      </span>
    </div>
  );
}

export function MainContent() {
  return (
    <div class="ml-4 flex justify-between">
        <div class="text-4xl">
      <div class="font-bold size text-4xl">
      <span className="text-yellow-500">Smartest</span> way <br /> to grow your
        <br /> money
      </div>
      <p>
        Invest in Crypto funds today! Diversify
        <br /> your portfolio in 1 Click. Start SIP in a<br />
        mutual fund-ly way.
      </p>
      <p class="mt-4">
      <Drawer />
      <button class="btn btn-outline btn-warning">Discover Funds</button>
      </p>
      </div>
      <div class="w-1/2 h-1/2 m-4 bg-origin-content">
      <img src={myImage} alt="MyImage" className="rounded-full"/>
      </div>
    </div>
  );
}

