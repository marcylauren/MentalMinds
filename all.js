let footer = document.querySelector("footer");
let mainStyle = window.getComputedStyle(document.body);

footer.style.marginLeft = "-" + mainStyle.marginLeft;
footer.style.marginRight = "-" + mainStyle.marginRight;