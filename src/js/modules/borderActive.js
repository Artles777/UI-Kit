function borderActive(inputSelector) {
    const input = document.querySelectorAll(inputSelector);

    input.forEach(item => {

        item.addEventListener('focus', () => {
            item.parentNode.style = 'border: 1px solid rgba(31, 32, 65, 0.5)'
        });
        item.addEventListener('blur', () => {
            item.parentNode.style = ''
        });
    })
}

export default borderActive;