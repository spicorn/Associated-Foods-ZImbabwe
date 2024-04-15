const btns = document.querySelectorAll(".btn");
const modals = document.querySelectorAll(".modal");
const spans = document.querySelectorAll(".close");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modalId = btn.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
    document.body.appendChild(document.createElement("div")).className =
      "overlay";
  });
});

spans.forEach((span) => {
  span.addEventListener("click", () => {
    span.parentElement.parentElement.style.display = "none";
    document.body.removeChild(document.querySelector(".overlay"));
  });
});

window.onclick = (e) => {
  if (e.target.className === "overlay") {
    modals.forEach((modal) => {
      if (modal.style.display === "block") {
        modal.style.display = "none";
      }
    });
    document.body.removeChild(document.querySelector(".overlay"));
  }
};
