import React from "react";
import "../CSS/SearchBar.css";
import { BiSearchAlt2 } from "react-icons/bi";
import axios from "axios";
import { useState } from "react";
export default function SearchBar() {
  
  return (
    <>
      <div className="wrap">
        <h1 id="heading"></h1>
        <div className="search">
          <input
            type="text"
            name="search"
            className="searchTerm"
            placeholder="What are you looking for?"
            onChange={(e)=>(e.target.value)}
          />
          <button type="submit" className="searchButton">
            <i className="fa fa-search">
              <BiSearchAlt2 />
            </i>
          </button>

          
        </div>
      </div>
    </>
  );
}
