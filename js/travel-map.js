
document.addEventListener("DOMContentLoaded", function () {

  const map = L.map("map", {
  worldCopyJump: true,
  maxBoundsViscosity: 1.0
}).setView([35, 105], 4)

 L.tileLayer(
  'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',

  {
    attribution: '&copy; OpenStreetMap & CartoDB',
    subdomains: 'abcd',
    maxZoom: 20
  }
).addTo(map);

const markers = L.markerClusterGroup();
const places = [
  {
    name: "Sun Yat-sen Memorial Hall",
    lat: 23.1337,
    lng: 113.2652,
    image: "/img/zhongshanjiniantang.jpg",
    url: "/2026/06/11/zhongshanjiniantang"
  },
  {
    name: "Guangdong Museum",
    lat: 23.114847696238858,
    lng: 113.32730659053918,
    image: "/img/guangdongshengbowuguan.jpg",
    url: "/2026/06/11/guangdongshengbowuguan"
  },
  {
    name: "Republic of China Military Academy",
    lat: 23.08432666555117,
    lng: 113.41669902575146,
    image: "/img/huangpujunxiao.jpg",
    url: "/2026/06/11/huangpujunxiao"
  },
  {
    name: "Mausoleum of the Nanyue King Wen",
    lat: 23.13772459665257,
    lng: 113.26148615922843,
    image: "/img/nanyuewenwangmu.jpg",
    url: "/2026/06/11/nanyuewenwangmu"
  },
  {
    name: "Huanghuagang Seventy Two Martyrs Cemetery",
    lat: 23.140712971061816,
    lng: 113.29448794541977,
    image: "/img/huanghuagang.jpg",
    url: "/2026/06/11/huanghuagang"
  },
  {
    name: "The Memorial Museum of Generalissimo Sun Yat-sen's Mansion",
    lat: 23.109903251806614,
    lng: 113.27901629512736,
    image: "/img/dayuanshuaifu.jpg",
    url: "/2026/06/11/dayuanshuaifu"
  },
  {
    name: "Guangdong Museum of Revolutionary History",
    lat: 23.128534866276713,
    lng: 113.28331220316481,
    image: "/img/guangdonggeminglishibowuguan.jpg",
    url: "/2026/06/11/guangdonggeminglishibowuguan"
  },
  {
    name: "Cantonese Opera Art Museum",
    lat: 23.11542028641857,
    lng: 113.23814737155588,
    image: "/img/yuejuyishubowuguan.jpg",
    url: "/2026/06/11/yuejuyishubowuguan"
  },
]
places.forEach(place => {

  const marker = L.circleMarker(
  [place.lat, place.lng],
  {
    radius: 12,
    fillColor: "#ff4d4f",
    color: "#ffffff",
    weight: 2,
    fillOpacity: 1
  }
);
  markers.addLayer(marker);

  marker.bindPopup(`
    <a href="${place.url}"
       style="
         text-decoration:none;
         color:black;
         display:block;
         width:220px;
       ">

      <img
        src="${place.image}"
        style="
          width:100%;
          border-radius:8px;
          display:block;
        "
      />

      <div style="
        margin-top:8px;
        font-size:16px;
        font-weight:600;
        text-align:center;
      ">
        ${place.name}
      </div>

    </a>
  `);

});

map.addLayer(markers);

});
