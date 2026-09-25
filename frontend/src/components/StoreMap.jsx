import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const storeIcon = L.icon({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function MapController({ selectedStore, resetMap, stores }) {
  const map = useMap();

  useEffect(() => {
    if (!selectedStore) return;

    map.flyTo([selectedStore.latitude, selectedStore.longitude], 14, {
      duration: 1,
    });
  }, [selectedStore, map]);

  useEffect(() => {
    if (!resetMap || !stores.length) return;

    const bounds = L.latLngBounds(
      stores.map((store) => [store.latitude, store.longitude]),
    );

    map.fitBounds(bounds, {
      padding: [50, 50],
      maxZoom: 10,
      animate: true,
    });
  }, [resetMap, stores, map]);

  return null;
}

export default function StoreMap({
  stores = [],
  selectedStore = null,
  resetMap = 0,
}) {
  const defaultCenter = stores.length
    ? [stores[0].latitude, stores[0].longitude]
    : [13.0827, 80.2707];

  return (
    <MapContainer
      center={defaultCenter}
      zoom={7}
      scrollWheelZoom={true}
      className="h-full w-full"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      <MapController
        selectedStore={selectedStore}
        resetMap={resetMap}
        stores={stores}
      />

      {stores.map((store) => (
        <Marker
          key={store.id}
          position={[store.latitude, store.longitude]}
          icon={storeIcon}
        >
          <Popup>
            <div className="w-[320px]">
              <div className="flex gap-3">
                {/* Store image */}
                <img
                  src={store.photo}
                  alt={store.name}
                  className="
                    h-24 w-24
                    shrink-0
                    rounded-xl
                    object-cover
                  "
                />

                {/* Store content */}
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-lg font-bold leading-tight text-[#1f1f1f]">
                    ManiMark {store.name}
                  </h3>

                  <p className="mt-1 text-xs leading-relaxed text-brand-gray">
                    {store.address}
                  </p>

                  {store.rating && (
                    <div className="mt-2 flex items-center gap-1">
                      <span className="text-brand-review-yellow">★</span>

                      <span className="text-xs font-bold">{store.rating}</span>
                    </div>
                  )}

                  <a
                    href={store.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-2
                      inline-block
                      text-xs
                      font-extrabold
                      text-brand-magenta
                    "
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
