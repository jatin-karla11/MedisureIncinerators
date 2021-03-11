import React from 'react'
import './ServiceCard.css'

function ServiceCard({img,content}) {
    return (
        <div className="service_card">
      <div className="root_container">

        <img className="root_logo" src={img} alt=""/>
        {/* <div className="root_title">{title}</div> */}
        <div className="root_content1">{content}</div>
        </div>
        </div>
    )
}

export default ServiceCard
