import React from "react";
import watchImg687 from "../images/wristwatch_687.jpg";
import watchImg1200 from "../images/wristwatch_687.jpg";
import sampleImage from "../images/sample-image.jpg";
import ReactImageMagnify from "react-image-magnify";
import { Typography } from "antd";
import "../styles/example.css";
import SpacedSpan from "../components/Navbar/SpacedSpan";
const { Title, Text } = Typography;

const ReactImageMagnifyDemo = () => {
  return (
    <>
      <div className="fluid">
        <div className="fluid__image-container">
          <Title type="secondary">React Image Magnify Example</Title>
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src: sampleImage,
                width: 850,
                height: 850,
              },
              largeImage: {
                src: sampleImage,
                width: 1200,
                height: 1800,
              },
              enlargedImageContainerDimensions: {
                width: "200%",
                height: "150%",
              },
              isHintEnabled: "true",
            }}
          />
        </div>
        <div style={{ width: "100%" }} className="fluid__instructions">
          <h3>Enlarged Image Container Dimensions Example</h3>
          <p>
            Specify dimensions as percentage of small image or number of pixels.
          </p>
          <p>May be percentage for one dimension and number for the other.</p>
          <p>
            Not applied when enlargedImagePosition is set to 'over', the default
            for touch input.
          </p>
          <p>
            This example specifies width of
            <SpacedSpan className="code">200%</SpacedSpan>
            and height of
            <SpacedSpan className="code">100%.</SpacedSpan>
          </p>
          <p>
            Please see
            <SpacedSpan>
              <a href="https://github.com/ethanselzer/react-image-magnify/blob/master/example/src/components/EnlargedImageContainerDimensions.js#L53-L56">
                source code
              </a>
            </SpacedSpan>
            for details.
          </p>
        </div>
        {/* <div style={{ height: "500px" }} /> */}
      </div>
    </>
  );
};

export default ReactImageMagnifyDemo;
