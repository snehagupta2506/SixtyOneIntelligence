import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './components/Home';


//import MultipleItems from './components/MultipleItems';
//import RecentRelease from './components/RecentRelease';

import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  //const [showMore, setShowMore] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
  };

  //const handleViewMore = () => {
    //setShowMore(prevState => !prevState);
    //console.log(showMore)
  //};

  return (
    <div>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Header isSidebarOpen={isSidebarOpen} />
      <Home isSidebarOpen={isSidebarOpen}/>
      {/*<div className="content-container">
      
          <div className="content-left">
            <MultipleItems isSidebarOpen={isSidebarOpen} />
            <div className='mass1'>
              
            <button className="btm" onClick={handleViewMore}>View More</button>
            </div>
            {showMore && <MultipleItems isSidebarOpen={isSidebarOpen} />}
            
          </div>
        
        <div className=" content-right">
          <RecentRelease isSidebarOpen={isSidebarOpen}/>
          
        </div>
        

        
        
      </div>
     
      {/* Other content */}
    </div>
  );
}

export default App;

