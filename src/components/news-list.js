import React from "react";

import NewsItem from "./news-item";
import newsDB from "./../assets/news-bd.json";

const NewsList = () => (
  <main className='news-list'>
  {newsDB.map((item) => <NewsItem key={item.id} info={item} />)}
  </main>
  )


export default NewsList;
