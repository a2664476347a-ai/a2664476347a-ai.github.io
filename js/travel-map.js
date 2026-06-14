
document.addEventListener("DOMContentLoaded", function () {

  const map = L.map("map", {
  worldCopyJump: false,
  minZoom: 2,
  maxBoundsViscosity: 1.0
}).setView([35, 105], 4)

 L.tileLayer(
  'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',

  {
    attribution: '&copy; OpenStreetMap & CartoDB',
    subdomains: 'abcd',
    maxZoom: 20,
    noWrap: true
  }

  
).addTo(map);

const bounds = [
  [-85, -180],
  [85, 180]
];

map.setMaxBounds(bounds);

const markers = L.markerClusterGroup();
const places = [
  {
    name: "\u4e2d\u5c71\u7eaa\u5ff5\u5802", // 中山纪念堂
    lat: 23.1337,
    lng: 113.2652,
    image: "/img/zhongshanjiniantang.jpg",
    url: "/2026/06/11/zhongshanjiniantang"
  },
  {
    name: "\u5e7f\u4e1c\u7701\u535a\u7269\u9986", // 广东省博物馆
    lat: 23.114847696238858,
    lng: 113.32730659053918,
    image: "/img/guangdongshengbowuguan.jpg",
    url: "/2026/06/11/guangdongshengbowuguan"
  },
  {
    name: "\u9ec4\u57d4\u519b\u6821", // 黄埔军校
    lat: 23.08432666555117,
    lng: 113.41669902575146,
    image: "/img/huangpujunxiao.jpg",
    url: "/2026/06/11/huangpujunxiao"
  },
  {
    name: "\u5357\u8d8a\u6587\u738b\u5893", // 南越文王墓
    lat: 23.13772459665257,
    lng: 113.26148615922843,
    image: "/img/nanyuewenwangmu.jpg",
    url: "/2026/06/11/nanyuewenwangmu"
  },
  {
   name: "\u9ec4\u82b1\u5c97\u4e03\u5341\u4e8c\u70c8\u58eb\u7eaa\u5ff5\u516c\u56ed", // 黄花岗七十二烈士纪念公园
    lat: 23.140712971061816,
    lng: 113.29448794541977,
    image: "/img/huanghuagang.jpg",
    url: "/2026/06/11/huanghuagang"
  },
  {
    name: "\u5b59\u4e2d\u5c71\u5927\u603b\u7edf\u5e9c\u7eaa\u5ff5\u9986", // 孙中山大总统府纪念馆
    lat: 23.109903251806614,
    lng: 113.27901629512736,
    image: "/img/dayuanshuaifu.jpg",
    url: "/2026/06/11/dayuanshuaifu"
  },
  {
   name: "\u5e7f\u4e1c\u9769\u547d\u5386\u53f2\u535a\u7269\u9986", // 广东革命历史博物馆
    lat: 23.128534866276713,
    lng: 113.28331220316481,
    image: "/img/guangdonggeminglishibowuguan.jpg",
    url: "/2026/06/11/guangdonggeminglishibowuguan"
  },
  {
    name: "\u7ca4\u5267\u827a\u672f\u535a\u7269\u9986", // 粤剧艺术博物馆
    lat: 23.11542028641857,
    lng: 113.23814737155588,
    image: "/img/yuejuyishubowuguan.jpg",
    url: "/2026/06/11/yuejuyishubowuguan"
  },
  {
    name: "\u94b1\u5cb8\u516c\u56ed", // 钱岗公园
    lat: 30.289992217300146,
    lng: 120.26732139262145,
    image: "/img/qianganggongyuan.jpg",
    url: "/2026/06/11/qianganggongyuan"
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
