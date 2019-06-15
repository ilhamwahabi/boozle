import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

import Layout from "../components/layout";

const position = [-6.2441985, 106.8029644];
const Search = () => {
  return (
    <Layout>
      <Map
        style={{ position: "fixed", top: 64 }}
        className="h-full w-screen left-0"
        center={position}
        zoom={15}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup.
            <br />
            Easily customizable.
          </Popup>
        </Marker>
      </Map>
    </Layout>
  );
};

export default Search;
