import React from 'react';
import logo from './logo.svg';
import './App.css';
import BlogList from './Blog/List/blog-list'
import data from './data';

function App() {
  return (
    <div className="App">
      <BlogList posts={data} />
    </div>
  );
}

export default App;
