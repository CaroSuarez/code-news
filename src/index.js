import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/header";
import NewsList from "./components/news-list";
import Footer from "./components/footer";

import newsDB from "./assets/news-bd.json";

import "./App.css";

const App = () => {
  const [newsArray, setNewsArray] = useState(newsDB);
  
  const getNews = (event) => {
    const keyword = event.target.value;
    const filteredNewsList = newsDB.filter(item => item.title.toLowerCase().includes(keyword.toLowerCase()));
    setNewsArray(filteredNewsList)
  }

  return (
    <>
      <Header getNews={getNews} />
      <NewsList list={newsArray} />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
