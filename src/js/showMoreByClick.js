export default function showMoreByClick(dataName, openButtonText = "Показать всё") {
  const container = document.querySelector(`[data-show-more-container='${dataName}']`);
  const button = document.querySelector(`[data-show-more-button='${dataName}']`);
  const buttonText = button.querySelector(".show-more__text");

  button.addEventListener("click", () => {
    button.classList.toggle("show-more--open");
    if (button.classList.contains("show-more--open")) {
      container.style.maxHeight = `${container.scrollHeight}px`;
      buttonText.innerText = "Скрыть";
    } else {
      container.style.maxHeight = ``;
      buttonText.innerText = openButtonText;
    }
  });
}