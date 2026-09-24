import alwarpetPhoto from "../assets/images/store-alwarpet-photo.png";
import katpadiPhoto from "../assets/images/store-katpadi-photo.png";

export const stores = [
  {
    id: "alwarpet",
    name: "Alwarpet",
    city: "Chennai",
    state: "Tamil Nadu",
    openingDate: "2024-05-25",
    rating: 4.7,
    photo: alwarpetPhoto,
    address: "Alwarpet, Chennai, Tamil Nadu",
    mapQuery: "Arcot Manimark Alwarpet Chennai",

    latitude: 13.0338,
    longitude: 80.2547,
  },
  {
    id: "katpadi",
    name: "Katpadi",
    city: "Vellore",
    state: "Tamil Nadu",
    openingDate: "2024-05-25",
    rating: 4.7,
    photo: katpadiPhoto,
    address: "Katpadi, Vellore, Tamil Nadu",
    mapQuery: "Arcot Manimark Katpadi Vellore",

    latitude: 12.9692,
    longitude: 79.1559,
  },
];

export const upcomingLocations = [
  "Kelambakkam",
  "Koyambedu",
  "Nanganallur",
  "Navalur",
  "Old Washermanpet",
  "Rajakilpakkam",
  "Sathuvachari",
  "T-Nagar",
  "Tambaram",
];

export const storeStates = ["Tamil Nadu"];

export const storeCities = ["Chennai", "Vellore"];

export function getStoreById(id) {
  return stores.find((store) => store.id === id);
}
