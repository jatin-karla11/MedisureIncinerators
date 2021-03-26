import React, { useRef, useState } from 'react';
import Card from '@material-ui/core/Card';
import './ValueCard.css'

export default function ValueCard({ cardwcu, title, content }) {

  const [readLess, setReadLess] = useState(false)

  const top_root = useRef();
  const readMore = (e) => {
    console.log(e, "e")
    console.log(top_root.current.style.backgroundColor, "top_root")
    top_root.current.classList.toggle('readMoreCSS');
    setReadLess(!readLess)
  }

  return (
    <Card className="root" ref={top_root}>
      <div className="root_container">
        <img className="root_logo" src={cardwcu} alt="" />
        <div className="root_title">{title}</div>
        <div className="root_content">{ readLess ? content : `${content.slice(-100)}....` }</div>
      </div>
      <div className = "btn_div">
        {
          readLess ?
            <button className="RM_btn" onClick={readMore} >Read less</button> :
            <button className="RM_btn" onClick={readMore} >Read more</button>
        }
      </div>
    </Card>
  );
}