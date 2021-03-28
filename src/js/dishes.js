import dishes from '../menu.json';
import template from '../templates/dish.hbs'
import { ulMenuRef } from './domElements';

const dishesList = dishes.map(dish => template(dish)).join('');
ulMenuRef.innerHTML = dishesList;

