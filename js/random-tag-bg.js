document.addEventListener("DOMContentLoaded", function () {
  // 只在 tags 页面生效
  if (!window.location.pathname.includes("/tags")) return;

  const images = [

    "/img/tag-bg/1.jpg",
    "/img/tag-bg/2.jpg",
    "/img/tag-bg/3.jpg"
    "/img/tag-bg/4.jpg",
    "/img/tag-bg/5.jpg",
    "/img/tag-bg/6.jpg"
    "/img/tag-bg/7.jpg",
    "/img/tag-bg/8.jpg",
    "/img/tag-bg/9.jpg"
    "/img/tag-bg/10.jpg",
    "/img/tag-bg/11.jpg",
    "/img/tag-bg/12.jpg"
    "/img/tag-bg/13.jpg",
    "/img/tag-bg/14.jpg",
    "/img/tag-bg/15.jpg"
    "/img/tag-bg/16.jpg",
    "/img/tag-bg/17.jpg",
    "/img/tag-bg/18.jpg"
    "/img/tag-bg/19.jpg",
    "/img/tag-bg/20.jpg",
    "/img/tag-bg/21.jpg"
    
  ];

  const randomImage = images[Math.floor(Math.random() * images.length)];

  const pageHeader = document.getElementById("page-header");
  if (!pageHeader) return;

  pageHeader.style.backgroundImage = `url(${randomImage})`;
});