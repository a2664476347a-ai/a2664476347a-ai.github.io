
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
    lat: 30.29040296132113,
    lng: 120.26866124336975,
    image: "/img/qianangongyuan.jpg",
    url: "/2026/06/14/qianangongyuan"
  },
  {
    name: "\u676d\u5dde\u8427\u5c71\u56fd\u9645\u673a\u573a", // 杭州西湖国际机场
    lat: 30.235873257603455,
    lng: 120.43531221563542,
    image: "/img/xiaoshanjichang.jpg",
    url: "/2026/06/19/xiaoshanjichang"
  },
  {
    name: "\u4e07\u4f5b\u5854", // 万佛塔
    lat: 29.10191431195529,
    lng: 119.66869022351717,
    image: "/img/wanfota.jpg",
    url: "/2026/06/19/wanfota"
  },
  {
    name: "\u516b\u548f\u697c", // 八咏楼
    lat: 29.099582519333936,
    lng: 119.66336221239253,
    image: "/img/bayonglou.jpg",
    url: "/2026/06/19/bayonglou"
  },
  {
    name: "\u91d1\u534e\u5e9c\u6587\u5e99", //  金华府文庙
    lat: 29.10043404818205,
    lng: 119.66382294789342,
    image: "/img/jinhuafuwenmiao.jpg",
    url: "/2026/06/19/jinhuafuwenmiao"
  },
  {
    name: "\u59d1\u852b\u535a\u7269\u9986", //  姑蔑博物馆
    lat: 28.998526536251603,
    lng: 118.96393860969461,
    image: "/img/gumiebowuguan.jpg",
    url: "/2026/06/21/gumiebowuguan"
  },
  {
    name: "\u5b64\u5c71", //  孤山
    lat: 30.25166748046319,
    lng: 120.14255969183114,
    image: "/img/gushan.jpg",
    url: "/2026/06/26/gushan"
  },
  {
    name: "\u4eac\u676d\u5927\u8fd0\u6cb3\u535a\u7269\u9986", //  京杭大运河博物馆
    lat: 30.31740598361796,
    lng: 120.14150789401431,
    image: "/img/jinghangdayunhebowuguan.jpg",
    url: "/2026/06/27/jinghangdayunhebowuguan"
  },
  {
    name: "\u6247\u535a\u7269\u9986", //  扇博物馆
    lat: 30.318670848882174,
    lng: 120.13806635638336,
    image: "/img/shan.jpg",
    url: "/2026/06/27/shan"
  },
  {
    name: "\u5200\u526a\u5251\u4f1e\u535a\u7269\u9986", //  刀剪剑伞博物馆
    lat: 30.316103,
    lng: 120.136527,
    image: "/img/daojianjiansan.jpg",
    url: "/2026/06/27/daojianjiansan"
  },
  {
    name: "\u5357\u5b8b\u5b98\u7a91\u535a\u7269\u9986", //  南宋官窑博物馆
    lat: 30.2100663,
    lng: 120.1538687,
    image: "/img/nansongguanyao.jpg",
    url: "/2026/06/29/nansongguanyao"
  },
  {
    name: "\u8bf8\u845b\u516b\u5366\u7530", //  诸葛八卦田
    lat: 30.2109354,
    lng: 120.1513188,
    image: "/img/baguatian.jpg",
    url: "/2026/06/29/baguatian"
  },
  {
    name: "\u897f\u6e56\u535a\u7269\u9986", //  西湖博物馆
    lat: 30.2426211,
    lng: 120.1575036,
    image: "/img/xihubowuguan.jpg",
    url: "/2026/06/29/xihubowuguan"
  },
  {
    name: "\u516d\u548c\u5854", //  六和塔
    lat: 30.196783,
    lng: 120.131213,
    image: "/img/liuheta.jpg",
    url: "/2026/06/29/liuheta"
  },
  {
    name: "\u94b1\u738b\u7960", //  钱王祠
    lat: 30.2425353,
    lng: 120.1568311,
    image: "/img/qianwangci.jpg",
    url: "/2026/06/29/qianwangci"
  },
  {
    name: "\u65e0\u9521\u535a\u7269\u9986", //  无锡博物馆
    lat: 31.5575462,
    lng: 120.3063651,
    image: "/img/wuxibowuguan.jpg",
    url: "/2026/07/04/wuxibowuguan"
  },
  {
    name: "\u4e1c\u6797\u4e66\u9662", //  东林书院
    lat: 31.5777118,
    lng: 120.295972,
    image: "/img/donglinshuyuan.jpg",
    url: "/2026/07/04/donglinshuyuan"
  },
  {
    name: "\u60e0\u5c71\u53e4\u9547", //  惠山古镇
    lat: 31.5807229,
    lng: 120.2745603,
    image: "/img/huishanguzhen.jpg",
    url: "/2026/07/04/huishanguzhen"
  },
  {
    name: "\u6d59\u6c5f\u7701\u535a\u7269\u9986\uff08\u4e4b\u6c5f\u9986\u533a\uff09", //  浙江省博物馆之江
    lat: 30.159823108500564,
    lng: 120.10165259142815,
    image: "/img/zhejiangbowuguanzhijiang.jpg",
    url: "/2026/07/11/zhejiangbowuguanzhijiang"
  },
  {
    name: "\u826f\u6e1a\u535a\u7269\u9662", //  良渚博物院
    lat: 30.3759193,
    lng: 120.0269478,
    image: "/img/liangzhubowuyuan.jpg",
    url: "/2026/07/15/liangzhubowuyuan"
  },
  {
    name: "\u676d\u5dde\u56fd\u5bb6\u7248\u672c\u9986", //  杭州国家版本馆
    lat: 30.382272977894242,
    lng: 120.01595162827815,
    image: "/img/hangzhoubanbenguan.jpg",
    url: "/2026/07/15/hangzhoubanbenguan"
  },
  {
    name: "\u661f\u6d77\u5e7f\u573a", //  星海广场
    lat: 38.88168641412761,
    lng: 121.58789502197561,
    image: "/img/xinghaiguangchang.jpg",
    url: "/2026/07/24/xinghaiguangchang"
  },
  {
    name: "\u8001\u65c5\u987a\u7ad9", //  老旅顺站
    lat: 38.80772859286005,
    lng: 121.25236034983628,
    image: "/img/laolvshunzhan1.jpg",
    url: "/2026/07/24/laolvshunzhan"
  },
  {
    name: "\u65e5\u4fc4\u6218\u4e89\u53f2\u6599\u9986", //  日俄史料馆
    lat: 38.80951366095014,
    lng: 121.23959424827872,
    image: "/img/rieshiliaoguan.jpg",
    url: "/2026/07/24/riezhanzhengshiliaoguan"
  },
  {
    name: "\u65c5\u987a\u535a\u7269\u9986", //  旅顺博物馆
    lat: 38.80841612122239,
    lng: 121.23488738417,
    image: "/img/lvshunbowuguan.jpg",
    url: "/2026/07/24/lvshunbowuguan"
  },
  {
    name: "\u767d\u7389\u5c71", //  白玉山
    lat: 38.81027996051729,
    lng: 121.25725127152566,
    image: "/img/baiyushan.jpg",
    url: "/2026/07/24/baiyushan"
  },
  {
    name: "\u65e5\u4fc4\u65c5\u987a\u76d1\u72f1\u9057\u5740\u535a\u7269\u9986", //  日俄旅顺监狱遗址博物馆
    lat: 38.8255698927158,
    lng: 121.26486626239071,
    image: "/img/rielvshunjianyuyizhibowuguan.jpg",
    url: "/2026/07/24/rielvshunjianyuyizhibowuguan"
  },
  {
    name: "\u65c5\u987a\u6f5c\u8247\u535a\u7269\u9986", //  旅顺潜艇博物馆
    lat: 38.794937965746485,
    lng: 121.27255879959469,
    image: "/img/lvshunqiantingbowuguan.jpg",
    url: "/2026/07/24/lvshunqiantingbowuguan"
  },
  {
    name: "\u519b\u8230\u5c9b", //  军舰岛
    lat: 38.80406690412054,
    lng: 121.25861094187361,
    image: "/img/junjiandao.jpg",
    url: "/2026/07/24/junjiandao"
  },
  {
    name: "\u5927\u8fde\u535a\u7269\u9986", //  大连博物馆
    lat: 38.888791647262906,
    lng: 121.5862176566125,
    image: "/img/dalianbowuguan.jpg",
    url: "/2026/07/24/dalianbowuguan"
  },
  {
    name: "\u5927\u8fde\u81ea\u7136\u535a\u7269\u9986", //  大连自然博物馆
    lat: 38.870272579270534,
    lng: 121.56140097556126,
    image: "/img/dalianziranbowuguan.jpg",
    url: "/2026/07/24/dalianziranbowuguan"
  },
  {
    name: "\u4e5d\u6eaa\u5341\u516b\u6da7", //  九溪十八涧
    lat: 30.189430100660577,
    lng: 120.11711686948973,
    image: "/img/jiuxishibajian.jpg",
    url: "/2026/07/24/jiuxishibajian"
  },
  {
    name: "\u4e2d\u56fd\u8336\u53f6\u535a\u7269\u9986", //  中国茶叶博物馆
    lat: 30.232320594523575,
    lng: 120.12016559632109,
    image: "/img/zhongguochayebowuguan.jpg",
    url: "/2026/07/24/zhongguochayebowuguan"
  },
   {
    name: "\u6797\u5f6a\u884c\u5bab", //  林彪行宫
    lat: 30.233266517020038,
    lng: 120.12530646682553,
    image: "/img/linbiaoxinggong.jpg",
    url: "/2026/07/24/linbiaoxinggong"
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
