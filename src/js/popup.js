export default function popup(ModalDataName) {
  const openButtons = document.querySelectorAll(
    `[data-${ModalDataName}="open"]`
  );
  const popup = document.querySelector(`[data-popup-name="${ModalDataName}"]`);
  const closeButtons = popup.querySelectorAll(
    `[data-${ModalDataName}="close"]`
  );

  function openPopup() {
    popup.classList.add(`popup--visible`);
    document.body.style.overflow = "hidden";
  }

  function closePopup() {
    popup.classList.remove("popup--visible");
    document.body.style.overflow = "";
  }

  openButtons.forEach((button) => {
    button.addEventListener("click", openPopup);
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", closePopup);
  });

  popup.addEventListener("click", (e) => {
    if (e.target.classList.contains("popup")) {
      closePopup();
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      closePopup();
    }
  });
}

// function getScrollbarWidth() {
//   const elem = document.createElement("DIV");
//   elem.style.overflowY = "scroll";
//   elem.style.width = "100px";
//   elem.style.height = "100px";

//   document.body.appendChild(elem);
//   const ScrollbarWidth = elem.offsetWidth - elem.clientWidth;
//   elem.remove();
//   return ScrollbarWidth;
// }
