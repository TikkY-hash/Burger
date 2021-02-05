

function burger({
    breakpoint,
    burgerIcon,
    burgerMenu,
    text,
    blockOfLinks

}) {
    const menu = document.querySelector(burgerMenu),
        block = document.querySelector(blockOfLinks);

    let checkCreate = false;

    menu.addEventListener('click', (e) => {
        e.preventDefault();
        createElement(block,checkCreate,text);
        toggleElement('.block__display', 'block__active', 'block__responsive');
        toggleElement('body', 'body__active');
        toggleElement(burgerIcon, 'icon__active');
        addElement('.text__active','text__width','text__width__responsive');

    });

    function createElement(selector) {
        if (checkCreate) {
            return;
        }
    
        const divText = document.createElement('div');
    
        divText.classList.add('text__active');
        checkCreate = true;
    
        text.forEach(value => {
            divText.innerHTML += `
                ${value}
            `;
        });
        selector.append(divText);
    
    }

    function toggleElement(selector, classActive, classActiveResponse) {
        const element = document.querySelector(selector);

        if (document.documentElement.offsetWidth < breakpoint && classActiveResponse) {
            element.classList.toggle(classActiveResponse);
        } else {
            element.classList.toggle(classActive);
        }
    }

    function addElement(selector, classActive, classActiveResponse) {

        const element = document.querySelector(selector);
        
        if (document.documentElement.offsetWidth < breakpoint) {
            element.classList.add(classActiveResponse);
        }else {
            element.classList.add(classActive);
        }
    }
}

export default burger;