import alwarpetPhoto from '../assets/images/store-alwarpet-photo.png'
import katpadiPhoto from '../assets/images/store-katpadi-photo.png'

// Source of truth: MM-WEB-STORE-P01.psd. The PSD mocked up its grid by
// repeating these same two stores several times — those are placeholder
// repetitions, not distinct locations, so only the two real entries are
// kept here. Shaped to match what a `/stores` API endpoint would return;
// swap this file for a fetch call when one exists.
export const stores = [
  {
    id: 'alwarpet',
    name: 'Alwarpet',
    city: 'Chennai',
    state: 'Tamil Nadu',
    openingDate: '2024-05-25',
    rating: 4.7,
    photo: alwarpetPhoto,
    address: 'Alwarpet, Chennai, Tamil Nadu',
    mapQuery: 'Arcot Manimark Alwarpet Chennai',
  },
  {
    id: 'katpadi',
    name: 'Katpadi',
    city: 'Vellore',
    state: 'Tamil Nadu',
    openingDate: '2024-05-25',
    rating: 4.7,
    photo: katpadiPhoto,
    address: 'Katpadi, Vellore, Tamil Nadu',
    mapQuery: 'Arcot Manimark Katpadi Vellore',
  },
]

// Listed on the Store page as plain area names (no photo/rating yet) —
// locations the PSD calls out as expanding to next, all within Tamil Nadu.
export const upcomingLocations = [
  'Kelambakkam',
  'Koyambedu',
  'Nanganallur',
  'Navalur',
  'Old Washermanpet',
  'Rajakilpakkam',
  'Sathuvachari',
  'T-Nagar',
  'Tambaram',
]

export const storeStates = ['Tamil Nadu']
export const storeCities = ['Chennai', 'Vellore']

export function getStoreById(id) {
  return stores.find((store) => store.id === id)
}
