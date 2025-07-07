
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function AgroScanDemo() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>AgroScan - Demo</h1>
      <h2>Mapa Interactivo</h2>
      <MapContainer center={[40.4168, -3.7038]} zoom={6} style={{ height: "400px", borderRadius: "16px" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={[39.8628, -4.0273]}>
          <Popup>
            Parcela experimental<br />Fertilidad: Alta<br />Plaga detectada: No
          </Popup>
        </Marker>
      </MapContainer>

      <h2>Fertilización Ecológica</h2>
      <ul>
        <li>Compost natural</li>
        <li>Fertilizante de algas</li>
        <li>Biofertilizantes con micorrizas</li>
      </ul>

      <h2>Plantas Complementarias</h2>
      <ul>
        <li>Albahaca – repele moscas blancas</li>
        <li>Caléndula – atrae mariquitas</li>
        <li>Trébol – fija nitrógeno</li>
        <li>Lavanda – atrae polinizadores</li>
      </ul>
    </div>
  );
}
