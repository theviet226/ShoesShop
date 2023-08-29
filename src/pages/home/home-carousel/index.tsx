import React, {useRef} from "react";
import { Carousel } from "antd";
import imgP from "src/assets/images/pro1.png";
import {CarouselRef} from "antd/es/carousel"

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "360px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "gray",
};

const HomeCarousel: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  const refCarousel = useRef<CarouselRef>(null);
  const  handleNext = () =>{
    refCarousel.current?.next()
  }
  const  handlePrev = () =>{
    refCarousel.current?.prev()
  }

  return (
    <>
      <div>
        <button onClick={handlePrev}>Previou</button>
        <button onClick={handleNext}>Next</button>
      </div>

      <Carousel ref={refCarousel} autoplay={true} afterChange={onChange}>
        <div>
          <h3 style={contentStyle}>
            <img src={imgP} alt="" />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img src={imgP} alt="" />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img src={imgP} alt="" />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img src={imgP} alt="" />
          </h3>
        </div>
      </Carousel>
    </>
  );
};

export default HomeCarousel;
