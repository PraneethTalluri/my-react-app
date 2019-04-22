import React from 'react';
import logo from './logo.svg';
import PostList from './posts/postList';
import AxiosApproach from './axios/Axios';
import './App.css';

function App() {
  return (
    <div className="App">
      <PostList/>
      <AxiosApproach/>
    </div>
  );
}

export default App;
