"use strict";

    function DomElement(selector, height, width, bg, fontSize, text) {

    };

    DomElement.prototype.createElem = function(selector, height, width, bg, fontSize, text) {
        let elem;

        if (selector[0] === ".") {
            elem = document.createElement("div");
            elem.classList.add(selector.slice(1));
        } else if (selector[0] === "#") {
            elem = document.createElement("p");
            elem.id = selector;
        };

        elem.style.height = height;
        elem.style.width = width;
        elem.style.backgroundColor = bg;
        elem.style.fontSize = fontSize;

        elem.textContent = text;

        const wrapper = document.querySelector('.wrapper');
        wrapper.insertAdjacentElement('afterbegin', elem);
    };

    let elem1 = new DomElement();
    
    elem1.createElem('#default', '50px', '50px', 'red', '14px', 'Привет, Мир!');