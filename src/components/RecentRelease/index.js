import React from 'react';
import './index.css'

function RecentRelease() {
  const releases = [
    {
      date: '2024-04-20',
      title: 'Industrial Production',
      description: 'Industrial production refers to the output of industrial establishments and covers sectors such as mining, manufacturing, electricity, gas and steam and air-conditioning.',
    },
    {
      date: '2024-04-18',
      title: 'CPI Inflmation',
      description: 'Inflation measured by consumer price index (CPI) is defined as the change in the prices of a basket of goods and services that are typically purchased by specific groups of households.',
    },
    {
      date: '2024-04-15',
      title: 'Business Stategy',
      description: 'Inflation measured by consumer price index (CPI) is defined as the change in the prices of a basket of goods and services that are typically purchased by specific groups of households.',
    },
    // Add more releases as needed
  ];

  return (
    
    <div className="recent-releases box">
        <div className='right'>
      <h3>Recent Releases</h3>
      <select>
        <option value="india" selected>India</option>
        <option value="usa">USA</option>
        <option value="uk">UK</option>
        {/* Add more country options as needed */}
      </select></div>
      <div className="releases-container">
        {releases.slice(0, 3).map((release, index) => (
          <div key={index} className="release">
            <p>{release.date}</p>
            <h4>{release.title}</h4>
            <p>{release.description}</p>
          </div>
        ))}
        <hr className='line'/>
      </div>
    </div>
  );
}

export default RecentRelease;
