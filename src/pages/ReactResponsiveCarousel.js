import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Img1 from "../assets/1.jpeg";
import Img2 from "../assets/2.jpeg";
import Img3 from "../assets/3.jpeg";
import Img4 from "../assets/4.jpeg";

const ReactResponsiveCarousel = () => {
  return (
    <div style={{ padding: 20, backgroundColor: "gray" }}>
      <Carousel autoPlay={true} interval={2000} infiniteLoop={true}>
        <div>
          {" "}
          <img src={Img1} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={Img2} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={Img3} />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={Img4} />
          <p className="legend">Legend 4</p>
        </div>
      </Carousel>
    </div>
  );
};

export default ReactResponsiveCarousel;
