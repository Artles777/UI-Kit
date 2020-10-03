function cardPrice(Selector) {
    const cardPrice = document.querySelectorAll(Selector);

    cardPrice.forEach(item => {
        let letter = `${item.textContent.substr(0, item.textContent.length -3)} ${item.textContent.substr(item.textContent.length - 3, item.textContent.length)}`;
        if (item.textContent.length >= 3) item.textContent = letter;
    })
}

export default cardPrice;