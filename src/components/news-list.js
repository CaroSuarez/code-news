import React from "react";

import NewsItem from "./news-item";

const NewsList = ({list}) => (
  <main className='news-list'>
  {list.map((item) => <NewsItem key={item.id} info={item} />)}
  </main>
  )


export default NewsList;
