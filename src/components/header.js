import React from "react";

const Header = ({getNews}) => (
  <header>
    <p>Code News</p>
    <input onChange={getNews} />
  </header>
);

export default Header;
