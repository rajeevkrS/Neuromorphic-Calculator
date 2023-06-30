("use strict");

var count = 0;

document
  .getElementsByClassName("inner")[0]
  .addEventListener("click", function () {
    if (count % 2 === 0) {
      var toggle = document.getElementsByClassName("toggler");
      toggle[0].style.float = "right";
      toggle[0].style.backgroundColor = "#3B1767";
      document.getElementsByClassName("container")[0].style.backgroundColor = "#1E1E1E";
      document.getElementsByClassName("calculator")[0].style.backgroundColor = "#333333";
      document.getElementsByClassName("calculator")[0].style.boxShadow = `5px 5px 16px 0 rgba(0, 0, 0, 0.25), -5px -5px 16px 0 rgba(0, 0, 0, 0.25)`;
      document.getElementsByTagName("h1")[0].style.color = "white";
      display.style.backgroundColor = "#CCE4F7";
      display.style.boxShadow = `inset 5px 5px 10px 0 rgba(0, 0, 0, 0.3),
      inset -1px -1px 8px 0 rgba(255, 255, 255, 0.5)`;
      count++;
    } 
    else {
      toggle = document.getElementsByClassName("toggler");
      toggle[0].style.float = "left";
      toggle[0].style.backgroundColor = "#CCE4F7";
      document.getElementsByClassName("container")[0].style.backgroundColor = "#CAD2DF";
      document.getElementsByClassName("calculator")[0].style.backgroundColor = "#CAD2DF";
      document.getElementsByClassName("calculator")[0].style.boxShadow = `5px 5px 16px 0 rgba(0, 0, 0, 0.25),
      -8px -8px 12px 0 rgba(245, 237, 237, 0.6)`;
      document.getElementsByTagName("h1")[0].style.color = "black";
      display.style.backgroundColor = "#CAD2DF";
      display.style.boxShadow = `inset 2px 2px 10px 0 rgba(0, 0, 0, 0.3),
      inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5)`;
      count++;
    }
  });


