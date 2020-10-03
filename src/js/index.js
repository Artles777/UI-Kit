'use strict';

import 'normalize.css'
import '../style/style.scss'

import searchRate from "./modules/searchRate";
import borderActive from "./modules/borderActive";
import pagination from "./modules/pagination";
import cardPrice from "./modules/cardPrice";

// Use only in the UI kit
window.addEventListener('DOMContentLoaded', () => {
    searchRate('rate_1_1');
    searchRate('rate_2_0');
    searchRate('rate_3_1');
    searchRate('rate_4_0');
    borderActive('.text-field__input');
    pagination(
        '.pagination__wrapper',
        '.pagination__page',
        'pagination__page_active'
    );
    cardPrice('.reservation__value');
});