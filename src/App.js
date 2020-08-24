import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed.js';

function App() {
  return (
    <div className="app">
        {/* Sidebar */}
        <Sidebar/>

        {/* Feed */}
        <Feed/>

        {/* Widgets */}
    </div>
  );
}

export default App;
