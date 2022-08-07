import React from "react";

const NewsItem = ({ info }) => {
  return (
    <div className='news-item'>
      <h2 className='news-item__title' >{info.title}</h2>
      <p className='news-item__feed' >{info.feed}</p>
    </div>
  );
};

export default NewsItem;
