import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const ReactGoogleMaps = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 27.714147, lng: 85.314755 }}
    >
      <Marker position={{ lat: 27.714147, lng: 85.314755 }} />
    </GoogleMap>
  ))
);
export default ReactGoogleMaps;
