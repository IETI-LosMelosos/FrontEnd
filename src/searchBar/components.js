import React from "react";

export function SearchBar(props) {
    return (
        <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search"
            name="searchBar" 
        />
        <button type="submit">Search</button>
    </form>
    );
  }