const btnElement = document.querySelector(".btn");

btnElement.addEventListener("mouseover", function (e) {
  // console.log(e); // This is to identify the mouse event
  //   console.log(e.pageX, e.pageY); // This is to identify the mouse position at the button on the page

  //   console.log(btnElement.offsetLeft, btnElement.offsetTop); // This is to identify the button position on the page

  const x = e.pageX - btnElement.offsetLeft; // This is to identify the mouse position on the button only.
  const y = e.pageY - btnElement.offsetTop; // This is to identify the mouse position on the button only.

  btnElement.style.setProperty("--positionX", `${x}px`); // This is to create the ripple effect on the button only.
  btnElement.style.setProperty("--positionY", `${y}px`); // This is to create the ripple effect on the button only.
});
