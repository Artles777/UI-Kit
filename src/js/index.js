import 'normalize.css';
import '../style/style.scss';

document.addEventListener('DOMContentLoaded', () => {
    const menuElements = document.querySelectorAll('.navbar__link');
    menuElements[0].classList.add('active');
});
console.log(1)