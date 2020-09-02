import 'normalize.css'
import '../style/style.scss'

import searchRate from "./modules/searchRate";

// Use only in the UI kit
window.addEventListener('DOMContentLoaded', () => {
    searchRate();
    
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

    borderActive('.text-field__input');
});