export default function showMoreCards(cardsContainer, button, togglingModificator) {
    const container = document.querySelector(cardsContainer);
    button = document.querySelector(button);
    const btnText = button.querySelector(".btn__text");
    const btnIcon = button.querySelector(".btn__icon");

    button.addEventListener('click', () => {
        container.classList.toggle(togglingModificator);
        btnIcon.classList.toggle("btn__icon--rotate--180");
        btnText.innerText = btnIcon.classList.contains("btn__icon--rotate--180") 
                          ? "Скрыть"
                          : "Показать все"
    })
}