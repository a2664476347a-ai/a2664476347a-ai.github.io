
document.addEventListener("DOMContentLoaded", function () {

  const map = L.map("map", {
  worldCopyJump: true,
  maxBoundsViscosity: 1.0
}).setView([35, 105], 4)

  L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    noWrap: true
  }
).addTo(map);

const places = [
  {
    name: "广州",
    lat: 23.1337,
    lng: 113.2652,
    image: "/img/zhongshanjiniantang.jpg",
    url: "/posts/zhongshanjiniantang"
  },
  {
    name: "上海",
    lat: 31.2304,
    lng: 121.4737,
    image: "/img/shanghai.jpg",
    url: "/posts/shanghai"
  }
  {
  name: "爱丁堡",
  lat: 55.9533,
  lng: -3.1883,
  image: "/img/edinburgh.jpg",
  url: "/posts/edinburgh"
  }
]
places.forEach(place => {

  const marker = L.marker([place.lat, place.lng]).addTo(map);

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
});
