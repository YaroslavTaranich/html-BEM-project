export default function showMoreCards(cardsSelector, buttonSelector) {
  const container = document.querySelector(cardsSelector);
  const button = document.querySelector(buttonSelector);
  const buttonText = button.querySelector(".show-more__text");

  button.addEventListener("click", () => {
    button.classList.toggle("show-more--open");
    if (button.classList.contains("show-more--open")) {
      container.style.maxHeight = `${container.scrollHeight}px`;
      buttonText.innerText = "Скрыть";
    } else {
      container.style.maxHeight = ``;
      buttonText.innerText = "Показать все";
    }
  });
}
