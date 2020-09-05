'use strict';

import 'normalize.css'
import '../style/style.scss'

import searchRate from "./modules/searchRate";
import borderActive from "./modules/borderActive";

// Use only in the UI kit
window.addEventListener('DOMContentLoaded', () => {
    searchRate('rate1_1');
    searchRate('rate2_0');
    borderActive('.text-field__input');
});