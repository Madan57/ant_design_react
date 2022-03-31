import React from "react";
import {
  SideBySideMagnifier,
  MouseActivation,
  TouchActivation,
} from "react-image-magnifiers";
import myImage from "../assets/sample-image.jpg";

const ReactImageMagnifiers = () => {
  return (
    <div>
      <h1>React image magnifers demo</h1>
      <SideBySideMagnifier
        inPlaceMinBreakpoint={false}
        fillAvailableSpace={true}
        fillAlignTop={true}
        fillGapLeft={0}
        fillGapRight={10}
        fillGapTop={10}
        fillGapBottom={10}
        imageSrc={myImage}
        largeImageSrc={myImage}
        imageAlt="Example"
      />
    </div>
  );
};

export default ReactImageMagnifiers;
