import React from 'react';
import './index.css';

const API = {
  key: "d32739f7b50e5b10888e6d3d9c437154",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
        <div className='location-box'>
          <div className='location'></div>
          <div className='date'></div>
        </div>
      </main>
    </div>
  );
}

export default App;
