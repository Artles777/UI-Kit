'use strict';

import 'normalize.css'
import '../style/style.scss'

import searchRate from "./modules/searchRate";
import borderActive from "./modules/borderActive";
import pagination from "./modules/pagination";

// Use only in the UI kit
window.addEventListener('DOMContentLoaded', () => {
    searchRate('rate_1_1');
    searchRate('rate_2_0');
    borderActive('.text-field__input');
    pagination(
        '.pagination__wrapper',
        '.pagination__page',
        'pagination__page_active'
    );
});