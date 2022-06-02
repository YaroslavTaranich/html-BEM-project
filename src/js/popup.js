export default function popup(modalDataName) {
  const openButtons = document.querySelectorAll(
    `[data-${modalDataName}="open"]`
  );
  const popup = document.querySelector(`[data-popup-name="${modalDataName}"]`);
  const closeButton = popup.querySelector(`[data-${modalDataName}="close"]`);
  const input = popup.querySelector(".text-input");

  function openPopup(event) {
    event.preventDefault();
    popup.classList.add(`popup--visible`);
    document.body.style.overflow = "hidden";
    if (input) {
      setTimeout(() => {
        input.focus();
      }, 250);
    }
  }

  function closePopup() {
    popup.classList.remove("popup--visible");
    document.body.style.overflow = "";
  }

  openButtons.forEach((button) => {
    button.addEventListener("click", (event) => openPopup(event));
  });

  closeButton.addEventListener("click", closePopup);

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
