import React from 'react';
import './index.css'

function ContentCard({ title, description, image }) {
  return (
    <div className="content-card">
      <img src={image} alt={title} className="pic"/>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ContentCard;

