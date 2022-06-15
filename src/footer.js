import { content, createHtmlElement } from "./index";

function render() {
    const footer = document.createElement('footer');
    const p = createHtmlElement(
        "p",
        null,
        null,
        `inspired by ${<a>https://github.com/ginnerzapata/restaurant</a>}`
    )

    footer.appendChild(p);
    content.appendChild(footer);
}

export { render as renderFooter }