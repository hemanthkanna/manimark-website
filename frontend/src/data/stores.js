import alwarpetPhoto from "../assets/images/store/Alwarpet.JPG";
import chengalpattuPhoto from "../assets/images/store/Chengalpattu.JPG";
import chittoorPhoto from "../assets/images/store/Chittoor.JPG";
import coimbatorePhoto from "../assets/images/store/Coimbatore-Sai-Baba-Colony.JPG";
import coimbatoreSinganallurPhoto from "../assets/images/store/Coimbatore-Singanallur.JPG";
import companyOutletPhoto from "../assets/images/store/Company-Outlet.JPG";
import dindigulPhoto from "../assets/images/store/Dindigul.JPG";
import erodePhoto from "../assets/images/store/Erode.JPG";
import gudiyathamPhoto from "../assets/images/store/Gudiyatam.JPG";
import hosurPhoto from "../assets/images/store/Husur-1-Muneshwaran Kovil.JPG";
import hosurTwoPhoto from "../assets/images/store/Hosur-2-Dharga.JPG";
import kanchipuramPhoto from "../assets/images/store/Kanchipuram.JPG";
import karurPhoto from "../assets/images/store/Karur.JPG";
import katpadiPhoto from "../assets/images/store/Katpadi.JPG";
import kelambakkamPhoto from "../assets/images/store/kELAMBAKKAM.JPG";
import koyambeduPhoto from "../assets/images/store/Koyambedu.JPG";
import nagercoilPhoto from "../assets/images/store/nagercoil.JPG";
import namakkalPhoto from "../assets/images/store/Namakkal.JPG";
import nanganallurPhoto from "../assets/images/store/Nanganallur.JPG";
import navalurPhoto from "../assets/images/store/Navalur.JPG";
import oldWashermenpetPhoto from "../assets/images/store/Old-Washermanpet.JPG";
import pondicherryPhoto from "../assets/images/store/Pondicherry.JPG";
import pondicherryLawspetPhoto from "../assets/images/store/Pondicherry-Lawspaet.JPG";
import rajakilpakkamPhoto from "../assets/images/store/Rajakilpakkam.JPG";
import rayachotyPhoto from "../assets/images/store/Rayachoty.JPG";
import salemPhoto from "../assets/images/store/Salem.JPG";
import sathuvachariPhoto from "../assets/images/store/Sathuvachari.JPG";
import srirangamPhoto from "../assets/images/store/Sri-Rangam.JPG";
import tNagarPhoto from "../assets/images/store/T-Nagar.JPG";
import tambaramPhoto from "../assets/images/store/Tambaram.JPG";
import thiruvallurPhoto from "../assets/images/store/Thiruvallur.JPG";
import thirupatiPhoto from "../assets/images/store/Tirupati.JPG";
import thiruvannamalaiPhoto from "../assets/images/store/Tiruvannamalai.JPG";
import trichyPhoto from "../assets/images/store/Trichy-1.JPG";
import vaniyambadiPhoto from "../assets/images/store/vaniyambadi.JPG";

// Source of truth: KADALAI MITTAI OUTLET DETAILS.xlsx
// Outlet data is taken from the "OUTLET SHOP DETAILS" sheet.
// Ratings/opening dates from the original website data are preserved where previously defined.
// Other outlets retain null for these fields because the outlet spreadsheet does not provide them.
// Photos are only assigned where the existing project already has a matching asset.

export const stores = [
  {
    id: "t-nagar-chennai",
    name: "PNS Retail",
    city: "T.Nagar",
    state: "Tamil Nadu",
    openingDate: "2024-05-25",
    rating: 4.7,
    address:
      "No :96, North usman road, Opp to Malabar Gold, T-Nagar, Chennai-600017",
    contactNumber: "9884642555",
    mapUrl:
      "https://www.google.com/maps/place/13%C2%B002'52.7%22N+80%C2%B013'59.9%22E/@13.0479655,80.2307401,17z/data=!3m1!4b1!4m4!3m3!8m2!3d13.0479655!4d80.233315?hl=en&entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D",
    latitude: 13.0479655,
    longitude: 80.233315,
    photo: tNagarPhoto,
  },
  {
    id: "alwarpettai-chennai",
    name: "Kumar",
    city: "Alwarpettai",
    state: "Tamil Nadu",
    openingDate: "2024-05-25",
    rating: 4.7,
    address:
      "No :38 & 39, CP Ramasamy Road, Alwarpet, Next to Naturals Spa , Chennai-600018",
    contactNumber: "9095206636",
    mapUrl:
      "https://www.google.com/maps/place/13%C2%B001'56.9%22N+80%C2%B015'24.7%22E/@13.0324608,80.2542764,17z/data=!3m1!4b1!4m4!3m3!8m2!3d13.0324608!4d80.2568513?hl=en&entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D",
    latitude: 13.0324608,
    longitude: 80.2568513,
    photo: alwarpetPhoto,
  },
  {
    id: "rajakilpakkam-chennai",
    name: "Mohideen",
    city: "Rajakilpakkam",
    state: "Tamil Nadu",
    openingDate: "2024-05-25",
    rating: 4.7,
    address:
      "No : 33, B-3 VGP Srinivasanaga, Rajakilpakkam, EastTambaram- Chennai- 600073",
    contactNumber: "9944296256",
    mapUrl:
      "https://www.google.com/maps/place/12%C2%B054'49.5%22N+80%C2%B009'19.7%22E/@12.91376,80.1528947,17z/data=!3m1!4b1!4m4!3m3!8m2!3d12.91376!4d80.1554696?hl=en&entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D",
    latitude: 12.91376,
    longitude: 80.1554696,
    photo: rajakilpakkamPhoto,
  },
  {
    id: "gudiyatham",
    name: "PNS Retail",
    city: "Gudiyatham",
    state: "Tamil Nadu",
    openingDate: "2024-05-25",
    rating: 4.7,
    address: "No : 2,G-Block Municipal office, Ambapuram, Gudiyatham-632602",
    contactNumber: "9884642555",
    mapUrl:
      "https://www.google.com/maps/place/12%C2%B056'41.1%22N+78%C2%B052'11.9%22E/@12.9447536,78.8673821,17z/data=!3m1!4b1!4m4!3m3!8m2!3d12.9447536!4d78.869957?hl=en&entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D",
    latitude: 12.9447536,
    longitude: 78.869957,
    photo: gudiyathamPhoto,
  },
  {
    id: "hosur",
    name: "PNV Traders",
    city: "Hosur",
    state: "Tamil Nadu",
    openingDate: "2024-05-25",
    rating: 4.7,
    address: "No :794 New ASTC HUDCO,VOC Nagar, Hosur,Krishnagiri,-635109",
    contactNumber: "9842172447",
    mapUrl:
      "https://www.google.com/maps/place/12%C2%B043'43.7%22N+77%C2%B048'36.8%22E/@12.7288059,77.8076445,17z/data=!3m1!4b1!4m4!3m3!8m2!3d12.7288059!4d77.8102194?hl=en&entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D",
    latitude: 12.7288059,
    longitude: 77.8102194,
    photo: hosurPhoto,
  },
  {
    id: "hosur-2",
    name: "PNV Traders-II",
    city: "Hosur",
    state: "Tamil Nadu",
    openingDate: "2024-05-25",
    rating: 4.7,
    address: "No:3,Near Dharga Mariyamman Temple ,Hosur,Krishnagiri-635109",
    contactNumber: "8754746257",
    mapUrl:
      "https://www.google.com/maps/place/12%C2%B044'45.4%22N+77%C2%B048'55.4%22E/@12.7459346,77.8127996,17z/data=!3m1!4b1!4m4!3m3!8m2!3d12.7459346!4d77.8153745?hl=en&entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D",
    latitude: 12.7459346,
    longitude: 77.8153745,
    photo: hosurTwoPhoto,
  },
  {
    id: "katpadi",
    name: "SRI SIVANANDHA MOUNAGURU",
    city: "Katpadi",
    state: "Tamil Nadu",
    openingDate: "2024-05-25",
    rating: 4.7,
    address: "NO.103 CHITTUR ROAD, ODAI PILLAYAR VELLORE-632006",
    contactNumber: "9360608706",
    mapUrl: "https://share.google/AV51MnZfalDvnkgXi",
    latitude: 12.9692,
    longitude: 79.1559,
    photo: katpadiPhoto,
  },
  {
    id: "erode",
    name: "Sri vinayaga agency",
    city: "Erode",
    state: "Tamil Nadu",
    openingDate: "2024-05-25",
    rating: 4.7,
    address:
      "No:34/2, KVK Complex, perunthurai road,Kumalankuttai bus stop. Erode-638011",
    contactNumber: "9344400232",
    mapUrl:
      "https://www.google.com/maps/place/11%C2%B020'00.8%22N+77%C2%B042'15.5%22E/@11.3335477,77.7017211,17z/data=!3m1!4b1!4m4!3m3!8m2!3d11.3335477!4d77.704296?hl=en&entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D",
    latitude: 11.3335477,
    longitude: 77.704296,
    photo: erodePhoto,
  },
  {
    id: "coimbatore",
    name: "Sri Rajaganapathy Agency",
    city: "Coimbatore",
    state: "Tamil Nadu",
    openingDate: "2024-05-25",
    rating: 4.7,
    address: "No : 24/2 Alagesan Road, Saibaba Colony, Coimbatore-641011",
    contactNumber: "9344400232",
    mapUrl:
      "https://www.google.com/maps/place/11%C2%B001'22.7%22N+76%C2%B056'51.6%22E/@11.0229647,76.9450866,17z/data=!3m1!4b1!4m4!3m3!8m2!3d11.0229647!4d76.9476615?hl=en&entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D",
    latitude: 11.0229647,
    longitude: 76.9476615,
    photo: coimbatorePhoto,
  },
  {
    id: "kelambakkam",
    name: "Shree healthy snacks",
    city: "Kelambakkam",
    state: "Tamil Nadu",
    openingDate: "2024-05-25",
    rating: 4.7,
    address:
      "No : 1/199, OMR Road, (Opp Market road), Kelambakkam, Chengalpattu-603103",
    contactNumber: "9750420173",
    mapUrl:
      "https://www.google.com/maps/place/KADALAI+MITTAI+KELAMBAKKAM/@12.7859808,80.2203069,17z/data=!3m1!4b1!4m6!3m5!1s0x3a5251e54eceb035:0xce745a70db433247!8m2!3d12.7859808!4d80.2203069!16s%2Fg%2F11j53snx4v?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D",
    latitude: 12.7859808,
    longitude: 80.2203069,
    photo: kelambakkamPhoto,
  },
  {
    id: "navalur",
    name: "Shree healthy snacks",
    city: "Navalur",
    state: "Tamil Nadu",
    openingDate: "2024-05-25",
    rating: 4.7,
    address:
      "No : 33 , LG002, Vivira mall,Old Mahabalipuram road, Navalur, Chennai-603103",
    contactNumber: "9750420173",
    mapUrl:
      "https://www.google.com/maps/place/KADALAI+MITTAI+VIVIRA+MALL+NAVALUR+OMR/@12.850308,80.2262042,17z/data=!3m1!4b1!4m6!3m5!1s0x3a525b194f749149:0x6a40868876a6a777!8m2!3d12.850308!4d80.2262042!16s%2Fg%2F11w9jg5dg7?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D",
    latitude: 12.850308,
    longitude: 80.2262042,
    photo: navalurPhoto,
  },
  {
    id: "east-tambaram-chennai",
    name: "KADALAIMITTAI",
    city: "East Tambaram",
    state: "Tamil Nadu",
    openingDate: "2024-05-25",
    rating: 4.7,
    address:
      "No :180/261,Ground Floor, velachery main road,East tambaram,Chennai-600059",
    contactNumber: "9841141360",
    mapUrl:
      "https://www.google.com/maps/place/12%C2%B055'22.6%22N+80%C2%B007'43.4%22E/@12.9229314,80.126136,17z/data=!3m1!4b1!4m4!3m3!8m2!3d12.9229314!4d80.1287109?hl=en&entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D",
    latitude: 12.9229314,
    longitude: 80.1287109,
    photo: tambaramPhoto,
  },
  {
    id: "thiruvallur",
    name: "valli Enterprises",
    city: "Thiruvallur",
    state: "Tamil Nadu",
    openingDate: "2024-05-25",
    rating: 4.7,
    address:
      "No :4/120B Ground Floor, JN Road Kakkalur, Thiruvallur,Chennai-602001",
    contactNumber: "9382988340",
    mapUrl:
      "https://www.google.com/maps/place/13%C2%B008'10.8%22N+79%C2%B054'30.1%22E/@13.1363278,79.9057929,17z/data=!3m1!4b1!4m4!3m3!8m2!3d13.1363278!4d79.9083678?hl=en&entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D",
    latitude: 13.1363278,
    longitude: 79.9083678,
    photo: thiruvallurPhoto,
  },
  {
    id: "trichy",
    name: "Sai agency",
    city: "Trichy",
    state: "Tamil Nadu",
    openingDate: "2024-05-25",
    rating: 4.7,
    address:
      "No :61/1B2/1 Amman Nagar,Tanjore Main Road Kattur Post,Thiruverumbar Taluk,Tiruchirappalli-620019,",
    contactNumber: "7845397824",
    mapUrl:
      "https://www.google.com/maps/place/10%C2%B047'51.4%22N+78%C2%B045'12.2%22E/@10.7976234,78.7508078,17z/data=!3m1!4b1!4m4!3m3!8m2!3d10.7976234!4d78.7533827?hl=en&entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D",
    latitude: 10.7976234,
    longitude: 78.7533827,
    photo: trichyPhoto,
  },
  {
    id: "nagercoil",
    name: "Fahima Jameel",
    city: "Nagercoil",
    state: "Tamil Nadu",
    openingDate: "2024-05-25",
    rating: 4.7,
    address:
      "No: 817, KP Road, near Cake world & Derik junction, Nagercoil-629 001",
    contactNumber: "9487879339",
    mapUrl:
      "https://www.google.com/maps/place/8%C2%B010'45.7%22N+77%C2%B025'18.5%22E/@8.1793606,77.4192349,17z/data=!3m1!4b1!4m4!3m3!8m2!3d8.1793606!4d77.4218098?hl=en&entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D",
    latitude: 8.1793606,
    longitude: 77.4218098,
    photo: nagercoilPhoto,
  },
  {
    id: "sathuvachery",
    name: "ARUL AMUTHAN",
    city: "Sathuvachari",
    state: "Tamil Nadu",
    openingDate: "2024-05-25",
    rating: 4.7,
    address:
      "No : 86/10 Sri Murugan Complex,Near Nalam Hospital,Arcot Road, Sathuvachari vellore-632209",
    contactNumber: "8270414060",
    mapUrl:
      "https://www.google.com/maps/place/12%C2%B056'06.5%22N+79%C2%B009'16.6%22E/@12.9351268,79.1520348,17z/data=!3m1!4b1!4m4!3m3!8m2!3d12.9351268!4d79.1546097?hl=en&entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D",
    latitude: 12.9351268,
    longitude: 79.1546097,
    photo: sathuvachariPhoto,
  },
  {
    id: "arcot",
    name: "Factory outlet",
    city: "Arcot",
    state: "Tamil Nadu",
    openingDate: "2024-05-25",
    rating: 4.7,
    address:
      "No.1,Ruban Cottage Compoung,Narayanapuram village,kavanoor road,Arcot-632503",
    contactNumber: "7904490633",
    mapUrl:
      "https://www.google.com/maps/place/12%C2%B051'43.5%22N+79%C2%B016'36.7%22E/@12.862087,79.2742817,17z/data=!3m1!4b1!4m4!3m3!8m2!3d12.862087!4d79.2768566?hl=en&entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D",
    latitude: 12.862087,
    longitude: 79.2768566,
    photo: companyOutletPhoto,
  },
  {
    id: "vaniyambadi",
    name: "Kadalaimittai foods -vaniyambadi",
    city: "Vaniyambadi",
    state: "Tamil Nadu",
    openingDate: "2024-05-25",
    rating: 4.7,
    address:
      "Tk Sons Garden C/O Ahmadia Highway Hotel,Girisamuthiram,Vaniyambadi-635751",
    contactNumber: "9626255308",
    mapUrl:
      "https://www.google.com/maps/place/12%C2%B040'54.9%22N+79%C2%B059'19.2%22E/@12.6819237,79.9860977,17z/data=!3m1!4b1!4m4!3m3!8m2!3d12.6819237!4d79.9886726?hl=en&entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D",
    latitude: 12.6819237,
    longitude: 79.9886726,
    photo: vaniyambadiPhoto,
  },
  {
    id: "thiruvannamalai",
    name: "Raja",
    city: "Thiruvannamalai",
    state: "Tamil Nadu",
    openingDate: "2024-05-25",
    rating: 4.7,
    address: "No :45/26 Sannadhi street, Tiruvannamalai- 606601",
    contactNumber: "9786677235",
    mapUrl:
      "https://www.google.com/maps/place/12%C2%B013'49.5%22N+79%C2%B004'21.5%22E/@12.2304276,79.0700671,17z/data=!3m1!4b1!4m4!3m3!8m2!3d12.2304276!4d79.072642?hl=en&entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D",
    latitude: 12.2304276,
    longitude: 79.072642,
    photo: thiruvannamalaiPhoto,
  },
  {
    id: "coimbatore-2",
    name: "SRI PRIYADHARCHINI HEALTHY SNACKS",
    city: "Coimbatore",
    state: "Tamil Nadu",
    openingDate: "2024-05-25",
    rating: 4.7,
    address:
      "No: 506, Trichy road, Singanallur (Opp-Max showroom), Coimbatore-641005",
    contactNumber: "9841611937",
    mapUrl:
      "https://www.google.com/maps/place/11%C2%B000'03.0%22N+77%C2%B001'53.2%22E/@11.0008272,77.0288637,17z/data=!3m1!4b1!4m4!3m3!8m2!3d11.0008272!4d77.0314386?hl=en&entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D",
    latitude: 11.0008272,
    longitude: 77.0314386,
    photo: coimbatoreSinganallurPhoto,
  },
  {
    id: "kanchipuram",
    name: "kavitha",
    city: "Kanchipuram",
    state: "Tamil Nadu",
    openingDate: "2024-05-25",
    rating: 4.7,
    address:
      "No: 61/20, Kavalan street (Karukinil amarnthaval street), Opp to Ramesh bikes, Kanchipuram-631501",
    contactNumber: "9916036639",
    mapUrl:
      "https://www.google.com/maps/place/12%C2%B049'32.7%22N+79%C2%B042'06.5%22E/@12.8257615,79.6992372,17z/data=!3m1!4b1!4m4!3m3!8m2!3d12.8257615!4d79.7018121?hl=en&entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D",
    latitude: 12.8257615,
    longitude: 79.7018121,
    photo: kanchipuramPhoto,
  },
  {
    id: "washermenpet",
    name: "Clock house",
    city: "Washermenpet",
    state: "Tamil Nadu",
    openingDate: "2024-05-25",
    rating: 4.7,
    address: "No:568 ,T H Road,old Washermenpet, CHENNAI-600021,",
    contactNumber: "9840033150",
    mapUrl:
      "https://www.google.com/maps/place/13%C2%B007'11.3%22N+80%C2%B017'09.1%22E/@13.1198073,80.2832743,17z/data=!3m1!4b1!4m4!3m3!8m2!3d13.1198073!4d80.2858492?hl=en&entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D",
    latitude: 13.1198073,
    longitude: 80.2858492,
    photo: oldWashermenpetPhoto,
  },
  {
    id: "chitoor",
    name: "Rajesh",
    city: "Chitoor",
    state: "Andhra Pradesh",
    openingDate: "2024-05-25",
    rating: 4.7,
    address:
      "No :2-46/1 shop No:06 pooja complex, Near udupi hotel konga reddy palli, Chittoor-517001",
    contactNumber: "8500449082/9908166650",
    mapUrl:
      "https://www.google.com/maps/place/13%C2%B012'58.2%22N+79%C2%B006'28.8%22E/@13.2161667,79.108,17z/data=!3m1!4b1!4m4!3m3!8m2!3d13.2161667!4d79.108?hl=en&entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D",
    latitude: 13.2161667,
    longitude: 79.108,
    photo: chittoorPhoto,
  },
  {
    id: "karur",
    name: "KPS Sweet Shop",
    city: "Karur",
    state: "Tamil Nadu",
    openingDate: "2024-05-25",
    rating: 4.7,
    address:
      "No: 79, Ramanuja nagar south, Near Kurinji hotel, Covai road, Karur-639002",
    contactNumber: "7010116329",
    mapUrl:
      "https://www.google.com/maps/place/10%C2%B057'38.4%22N+78%C2%B004'04.2%22E/@10.9606663,78.0652483,17z/data=!3m1!4b1!4m4!3m3!8m2!3d10.9606663!4d78.0678232?hl=en&entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D",
    latitude: 10.9606663,
    longitude: 78.0678232,
    photo: karurPhoto,
  },
  {
    id: "tirupathi",
    name: "Sunitha Kadalaimittai",
    city: "Tirupathi",
    state: "Andhra Pradesh",
    openingDate: "2024-05-25",
    rating: 4.7,
    address: "No :8/1/158 Bazar Street,Tirupati Town, Tirupati-517501",
    contactNumber: "8978017183",
    mapUrl:
      "https://www.google.com/maps/place/13%C2%B037'59.4%22N+79%C2%B024'56.7%22E/@13.6331674,79.4131665,17z/data=!3m1!4b1!4m4!3m3!8m2!3d13.6331674!4d79.4157414?hl=en&entry=ttu&g_ep=EgoyMDI0MDkwOC4wIKXMDSoASAFQAw%3D%3D",
    latitude: 13.6331674,
    longitude: 79.4157414,
    photo: thirupatiPhoto,
  },
  {
    id: "namakkal",
    name: "Sekar",
    city: "Namakkal",
    state: "Tamil Nadu",
    openingDate: "2024-05-25",
    rating: 4.7,
    address:
      "No :74G Mohanur road, Maharishi medicals, Thirunagar road, Opp to Thenpandian petrol bunk, Namakkal-637001",
    contactNumber: "8903957764",
    mapUrl:
      "https://www.google.com/maps/place/11%C2%B012'40.0%22N+78%C2%B010'03.2%22E/@11.2111172,78.1649916,17z/data=!3m1!4b1!4m4!3m3!8m2!3d11.2111172!4d78.1675665?hl=en&entry=ttu&g_ep=EgoyMDI0MDkwOC4wIKXMDSoASAFQAw%3D%3D",
    latitude: 11.2111172,
    longitude: 78.1675665,
    photo: namakkalPhoto,
  },
  {
    id: "dindigul",
    name: "Dhivi Initiative",
    city: "Dindigul",
    state: "Tamil Nadu",
    openingDate: "2024-05-25",
    rating: 4.7,
    address: "No: 2F, Main road, Near Periyar statue, Dindigal-624 001",
    contactNumber: "986523339",
    mapUrl:
      "https://www.google.com/maps/place/10%C2%B021'43.3%22N+77%C2%B058'30.5%22E/@10.3620225,77.9725612,17z/data=!3m1!4b1!4m4!3m3!8m2!3d10.3620225!4d77.9751361?hl=en&entry=ttu&g_ep=EgoyMDI0MDkwOC4wIKXMDSoASAFQAw%3D%3D",
    latitude: 10.3620225,
    longitude: 77.9751361,
    photo: dindigulPhoto,
  },
  {
    id: "pondychery",
    name: "SDK ENTERPRISES 1",
    city: "Pondicherry",
    state: "Puducherry",
    openingDate: "2024-05-25",
    rating: 4.7,
    address: "NO.39 LAWSPET MAIN ROAD, SELLAPERUM LAWSPET,PANDYCHERRY",
    contactNumber: "8110090072",
    mapUrl: "https://maps.app.goo.gl/witAbSM3JK4L1oze9?g_st=aw",
    latitude: 11.957543397050063,
    longitude: 79.82183144907418,
    photo: pondicherryLawspetPhoto,
  },
  {
    id: "pondychery-2",
    name: "SDK ENTERPRISES 2",
    city: "Pondicherry",
    state: "Puducherry",
    openingDate: "2024-05-25",
    rating: 4.7,
    address:
      "NO167,VYSIAL STREET, OPP TO JOTHI EYE CARE,NEAR PONDICHERRY CONGRES OFFICE,PONDYCHERRY-01",
    contactNumber: "8110090072",
    mapUrl: "https://maps.app.goo.gl/4u82scSYCTz5Y7Hb6?g_st=awb",
    latitude: 11.9375,
    longitude: 79.8316,
    photo: pondicherryPhoto,
  },
  {
    id: "chengalpat",
    name: "Kadalaimittai foods -Chengalpat",
    city: "Chengalpet",
    state: "Tamil Nadu",
    openingDate: "2024-05-25",
    rating: 4.7,
    address: "No : 255, Green land, TKM road, Vallam, Chengalpet-603001",
    contactNumber: "9597630344",
    mapUrl:
      "https://www.google.com/maps/place/12%C2%B040'55.0%22N+79%C2%B059'19.3%22E/@12.6819464,79.986116,17z/data=!3m1!4b1!4m4!3m3!8m2!3d12.6819464!4d79.9886909?hl=en&entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D",
    latitude: 12.6819464,
    longitude: 79.9886909,
    photo: chengalpattuPhoto,
  },
  {
    id: "selam",
    name: "SRI RAGAVY ENTERPRISES",
    city: "Salem",
    state: "Tamil Nadu",
    openingDate: "2024-05-25",
    rating: 4.7,
    address: "63/1, PERAMANUR MAIN ROAD, OPP TO LENSKART, SALEM-636007",
    contactNumber: "9942170006",
    mapUrl: "https://maps.app.goo.gl/SDWHpS7Y4jETZdjT9",
    latitude: 11.666854679565686,
    longitude: 78.14946236441797,
    photo: salemPhoto,
  },
  {
    id: "koyambedu",
    name: "MAJESTIC CARD",
    city: "Koyambedu",
    state: "Tamil Nadu",
    openingDate: "2024-05-25",
    rating: 4.7,
    address: "121/1 JAWAHARLAL NEHRU ROAD, KOYAMBEDU CHENNAI-600107",
    contactNumber: "9840963696",
    mapUrl: "https://maps.app.goo.gl/1LKFCQmQwThbjGjq7?g_st=aw",
    latitude: 13.0694,
    longitude: 80.2032,
    photo: koyambeduPhoto,
  },
  {
    id: "nanganalluru",
    name: "CAFÉ 4U",
    city: "Nanganallur",
    state: "Tamil Nadu",
    openingDate: "2024-05-25",
    rating: 4.7,
    address: "3/182 MOUNT POONAMALLEE HIGH ROAD , CHENGALPATTU-600126",
    contactNumber: "9940242924",
    mapUrl: "https://maps.app.goo.gl/bEYpyG6oHvNPH7Rz6?g_st=aw",
    latitude: 13.0357,
    longitude: 80.1574,
    photo: nanganallurPhoto,
  },
  {
    id: "annanagar",
    name: "PNS RETAIL",
    city: "Annanagar",
    state: "Tamil Nadu",
    openingDate: "2024-05-25",
    rating: 4.7,
    address:
      "No 1228/1, 18th Main Road, Anna Nagar West, Chennai, Tamil Nadu-600040 India",
    contactNumber: "7904490633",
    mapUrl:
      "https://www.google.com/maps/place/13%C2%B005'41.2%22N+80%C2%B012'12.7%22E/@13.1163142,80.1936481,13.75z/data=!4m4!3m3!8m2!3d13.0947853!4d80.2035304?hl=en&entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
    latitude: 13.0947853,
    longitude: 80.2035304,
    photo: null,
  },
  {
    id: "rayachoty",
    name: "SN ENTERPRISES",
    city: "Rayachoty",
    state: "Andhra Pradesh",
    openingDate: "2024-05-25",
    rating: 4.7,
    address:
      "NO-38-123-2-9 MANDANAPALLE ROAD OPPOSITE PATA RAYACHOTI ANNAMAYYA ANDHRA -516269",
    contactNumber: "8867224886",
    mapUrl:
      "https://www.google.com/maps/place/14%C2%B002'47.9%22N+78%C2%B044'54.7%22E/@14.0466349,78.7459386,17z/data=!3m1!4b1!4m4!3m3!8m2!3d14.0466349!4d78.7485135?hl=en&entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
    latitude: 14.0466349,
    longitude: 78.7485135,
    photo: rayachotyPhoto,
  },
  {
    id: "ambur",
    name: "SS ENTERPRISE",
    city: "Ambur",
    state: "Tamil Nadu",
    openingDate: "2024-05-25",
    rating: 4.7,
    address: "NO-44 GROUND FLOOR SAMPHANGHI LODGE MC ROAD AMBUR -635802",
    contactNumber: "9944023450",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=NO-44%20GROUND%20FLOOR%20SAMPHANGHI%20LODGE%20MC%20ROAD%20AMBUR%20-635802%2C%20Ambur%2C%20Tamil%20Nadu%20635802",
    latitude: 14.0466349,
    longitude: 78.7459386,
    photo: null,
  },
  {
    id: "srirangam",
    name: "Sai agency",
    city: "Srirangam",
    state: "Tamil Nadu",
    openingDate: "2024-05-25",
    rating: 4.7,
    address: "NO 18A RAGAVENDRAPURAM SRIRANGAM - 620006",
    contactNumber: "9443529712",
    mapUrl:
      "https://www.google.com/maps/dir//Ragavendrapuram,+VM4Q%2BHQC,+Raghavendra+Puram+Rd,+Sriramapuram,+Srirangam,+Tiruchirappalli,+Tamil+Nadu+620006/@13.1769175,79.8811918,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3baaf5e17dc99b0d:0x2d2cc75829d8f1ee!2m2!1d78.6894043!2d10.8564376?hl=en&entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
    latitude: 10.8564376,
    longitude: 78.6894043,
    photo: srirangamPhoto,
  },
];

export const upcomingLocations = [];

export const storeStates = ["Andhra Pradesh", "Puducherry", "Tamil Nadu"];

export const storeCities = [
  "Alwarpettai",
  "Ambur",
  "Annanagar",
  "Arcot",
  "Chengalpet",
  "Chitoor",
  "Coimbatore",
  "Dindigul",
  "East Tambaram",
  "Erode",
  "Gudiyatham",
  "Hosur",
  "Kanchipuram",
  "Karur",
  "Katpadi",
  "Kelambakkam",
  "Koyambedu",
  "Nagercoil",
  "Namakkal",
  "Nanganallur",
  "Navalur",
  "Pondicherry",
  "Rajakilpakkam",
  "Rayachoty",
  "Salem",
  "Sathuvachari",
  "Srirangam",
  "T.Nagar",
  "Thiruvallur",
  "Thiruvannamalai",
  "Tirupathi",
  "Trichy",
  "Vaniyambadi",
  "Washermenpet",
];

export function getStoreById(id) {
  return stores.find((store) => store.id === id);
}
