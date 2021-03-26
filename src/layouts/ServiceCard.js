import React from 'react'
import './ServiceCard.css'
import Card from '@material-ui/core/Card';


function ServiceCard({cardwcu,title,content}) {
    return (
    <Card className="root1">
        
      <div className="root_container1">

        <img className="root_logo1" src={cardwcu} alt=""/>
        <div className="root_title1">{title}</div>
        <div className="root_content1">{content}</div>
        </div>
        </Card>
    )
}

export default ServiceCard
