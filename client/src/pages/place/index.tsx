import React, { useState } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { observer } from "mobx-react-lite";

import Layout from "../../components/layout";
import ToggleSearch from "../../components/ToggleSearch";
import ListView from "../../components/ListView";

import state from "../../state";

const Search = () => {
  const [view, setView] = useState("map");

  if (typeof window == "undefined") return null;

  return (
    <Layout>
      <ToggleSearch view={view} toggleView={view => setView(view)} />
      {view === "map" ? (
        <Map
          style={{ position: "fixed", top: 64 }}
          className="h-full w-screen left-0"
          center={state.currentPosition}
          zoom={15}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={state.currentPosition}>
            <Popup>Lokasimu saat ini</Popup>
          </Marker>
          {state.places.map((place, index) => (
            <Marker position={place.position} key={index}>
              <Popup>
                <h5>{place.name}</h5>
                <p>{place.location}</p>
              </Popup>
            </Marker>
          ))}
        </Map>
      ) : (
        <ListView />
      )}
    </Layout>
  );
};

export default observer(Search);
