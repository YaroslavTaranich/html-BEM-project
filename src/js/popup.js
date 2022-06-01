export default function popup(modalDataName) {
  const openButtons = document.querySelectorAll(`[data-${modalDataName}="open"]`);
  const popup = document.querySelector(`[data-popup-name="${modalDataName}"]`);
  const closeButtons = popup.querySelectorAll(`[data-${modalDataName}="close"]`);

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