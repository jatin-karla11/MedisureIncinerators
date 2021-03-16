import React, { useRef, useEffect, useState } from "react";
import "./Carousel.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import hs1 from './layout images/homeslider1.jpg'
import hs2 from './layout images/homeslider2.jpg'


function Carousel() {
  let sectionIndex = 0;
  const slider = useRef([]);

  const reset = () => {
    for (let i = 0; i < slider.current.children.length; i++) {
      console.log(i);
      slider.current.children[i].style.zIndex = 0;
      slider.current.children[i].style.opacity = 0;
    }
  };

  const next = (auto) => {
    reset();
    if (auto === "auto") {
      sectionIndex =
        sectionIndex < slider.current.children.length - 1
          ? sectionIndex + 1
          : slider.current.children.length - 1;
      console.log("next ", sectionIndex);
      slider.current.children[sectionIndex].style.zIndex = 1;
      slider.current.children[sectionIndex].style.opacity = 1;
    } else {
      setTimeout(() => {
        sectionIndex =
          sectionIndex < slider.current.children.length - 1
            ? sectionIndex + 1
            : slider.current.children.length - 1;
        console.log("next ", sectionIndex);
        slider.current.children[sectionIndex].style.zIndex = 1;
        slider.current.children[sectionIndex].style.opacity = 1;
      }, 2000);
    }
  };

  const back = () => {
    reset();
    sectionIndex = sectionIndex === 0 ? 0 : sectionIndex - 1;
    console.log("back ", sectionIndex);
    slider.current.children[sectionIndex].style.zIndex = 1;
    slider.current.children[sectionIndex].style.opacity = 1;
  };

  let intervalId = 0;

  function sideShow() {
    intervalId = setInterval(() => {
      reset("auto");
      if (sectionIndex === slider.current.children.length - 1) {
        sectionIndex = -1;
      }
      next();
    }, 15000);
  }

  useEffect(() => {
    sideShow();
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className='container1'>
      <div
        className='carousel'
        onMouseOver={() => {
          clearInterval(intervalId);
        }}
        onMouseOut={() => {
          sideShow();
        }}
      >
        <div ref={slider} className='slider'>
          <section> 
            <img width='100%' height='100%' src={hs1} />
            <div className='slider_img_content'></div>
          </section>
          <section>
            <img width='100%' height='100%' src={hs2} />
            {/* <div className='slider_img_content'>Thanks for comming here</div> */}
          </section>
        </div>
        <div className='controls'>
          <ArrowBackIosIcon
            style={{ color: "white" }}
            onClick={next}
            className='next'
          />
          <ArrowForwardIosIcon
            style={{ color: "white" }}
            onClick={back}
            className='back'
          />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
