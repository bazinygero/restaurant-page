import { renderNavbar } from "./navbar";
import { renderHome } from "./home";
import { renderFooter } from "./footer";
import { renderMenu } from "./menu";
import { renderAbout } from "./about";


const content = document.getElementById('content');

function createHtmlElement(type, id, arrayClasses, media) {
    const element = document.createElement(type);

    if (id) element.id = id;
    if (arrayClasses) arrayClasses.forEach((myClass) => element.classList.add(myClass));
    if (media) element.innerText = media;

    return element;
}

function home() {
    content.innerHTML = "";

    renderNavbar();
    renderHome();
    renderFooter();
}

function menu() {
    content.innerHTML = "";

    renderNavbar();
    renderMenu();
    renderFooter();
}

function about() {
    content.innerHTML = "";

    renderNavbar();
    renderAbout();
    renderFooter();
}

home();

document.addEventListener('click', (e) => {
    const target = e.target.innerText;

    if(target === "Home") home();
    if(target === "Menu") menu();
    if(target === "About") about();
})

export { createHtmlElement, content}