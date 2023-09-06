import React from "react";
import css from "./search.module.scss"

function Search() {
  return (
    <>
      <div className={css["search-result"]}>
        <div className={css["search-text"]}>Search</div>
        <form>
          <input type="text" placeholder="Product name..." className={css["search-name"]}/>
          <button className={css["search-search"]}>SEARCH</button>  
        </form>
      </div>
      <div className={css["search-title"]}>
        <p>Search result</p>
      </div>
      <div className={css["search-product"]}>
        <form className={css["search-price"]}>
          <label htmlFor="Price">Price</label>
          <br />
          <input type="text" placeholder="decrease" />
          <i className="fa-solid fa-caret-down" />
          <br />
          <input type="text" placeholder="ascending" />
        </form> 
      </div>
    </>
  );
}

export default Search;
