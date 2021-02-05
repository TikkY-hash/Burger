'use strict';
import burger from './burger';

document.addEventListener('DOMContentLoaded',() => {
    burger({
        navSelector : '.nav',
        wrapperText : '.wrapper',
        burgerIcon : '.burger',
        burgerMenu : '.burger__menu',
        breakpoint : 992,
        text : [
            `<a href = "" class = "link__style">Link</a>`,
            `<a href = "" class = "link__style">Link</a>`,
            `<a href = "" class = "link__style">Link</a>`,
            `<a href = "" class = "link__style">Link</a>`
        ],
        blockOfLinks : '.block__display'
        
    });
});