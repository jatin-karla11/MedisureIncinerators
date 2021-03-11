import React from 'react';
import Card from '@material-ui/core/Card';
import './ValueCard.css'


export default function ValueCard({cardwcu,title,content}) {
  
  return (
    <Card className="root">
      <div className="root_container">
        <img className="root_logo" src={cardwcu} alt=""/>
        <div className="root_title">{title}</div>
        <div className="root_content">{content}</div>
      </div>

    </Card>
  );
}