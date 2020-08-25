import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed.js';
import Widget from './components/Widgets/Widget.js';

function App() {
  return (
    <div className="app">
        <Sidebar/>

        <Feed/>

        <Widget/>
    </div>
  );
}

export default App;
