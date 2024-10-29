import burger from './modules/burger';
import changeTheme from './modules/changeTheme';
import modals from './modules/modals';
import scrollSmooth from './modules/scrollSmooth';
import slider from './modules/slider';

document.addEventListener('DOMContentLoaded', () => {
'use stricti';

burger();
slider();
scrollSmooth();
changeTheme();
modals();
});