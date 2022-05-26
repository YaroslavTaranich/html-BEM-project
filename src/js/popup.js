export default function popup(ModalDataName) {
  const openButtons = document.querySelectorAll(`[data-${ModalDataName}="open"]`);
  const popup = document.querySelector(`[data-popup-name="${ModalDataName}"]`);
  const closeButtons = popup.querySelectorAll(`[data-${ModalDataName}="close"]`);

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