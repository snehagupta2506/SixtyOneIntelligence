import React, { useState } from 'react';
import MultipleItems from '../MultipleItems';
import RecentRelease from '../RecentRelease';

import './index.css'

function Home({ isSidebarOpen }){
    const [showMore, setShowMore] = useState(false);

    const handleViewMore = () => {
        setShowMore(prevState => !prevState);
        console.log(showMore)
      };

      return(
        <div className={`content-container ${isSidebarOpen ? 'shift' : ''}`}>
      
      <div className="content-left">
        <MultipleItems isSidebarOpen={isSidebarOpen} />
        <div className='mass1'>
          
        <button className="btm" onClick={handleViewMore}>View More</button>
        </div>
        {showMore && <MultipleItems isSidebarOpen={isSidebarOpen} />}
        
      </div>
    
    <div className="content-right">
      <RecentRelease isSidebarOpen={isSidebarOpen}/>
      
    </div>
    

    
    
  </div>

        

      )

      
    

}


export default  Home