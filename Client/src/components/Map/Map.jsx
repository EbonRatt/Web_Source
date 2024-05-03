import "./map.scss";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Pin from "../Pin/Pin";
function Map({ items }) {
  return (
    <MapContainer
      className="map"
      center={[11.555909086197262, 104.92060742660745]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((item) => (
        <Pin item={item} key={item.id}></Pin>
      ))}
    </MapContainer>
  );
}

export default Map;
