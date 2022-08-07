import React from 'react';
import ReactDOM from 'react-dom/client'

import Header from './components/header';
import NewsList from './components/news-list';
import Footer from './components/footer';

import './App.css'

const App = () => (
    <>
    <Header />
    <NewsList />
    <Footer />
    </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)