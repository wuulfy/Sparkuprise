//Change nav styling information when scrolled from the top of the page

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    document.getElementById("nav").style.backgroundColor = "#0a1017f6";
    document.getElementById("logo").style.height = "45px";
  } else {
    document.getElementById("nav").style.backgroundColor = "#00000000";
    document.getElementById("logo").style.height = "45px";
  }
}

// Set classes according to whether user has visited the page or not:

window.onload=function(){
  (function() {
      var visited = localStorage.getItem('visited');
      document.getElementById("splashscreen").style.display = "none";
      var element = document.getElementById("fade");
          element.classList.add("fade2");
      if (!visited) {
          document.getElementById("splashscreen").style.display = "flex";
          localStorage.setItem('visited', true);
          var element = document.getElementById("fade");
          element.classList.add("fade");
          element.classList.remove("fade2");
      }
  })();} 

// Read more and read less buttons:

function show() {
  document.getElementById("readmore").style.display = "inline-block";
  document.getElementById("hidable").style.display = "none";
}

function hide() {
  document.getElementById("readmore").style.display = "none";
  document.getElementById("hidable").style.display = "inline-block";
}
