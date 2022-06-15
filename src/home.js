import { content, createHtmlElement } from "./index";

function render() {
    const main = document.createElement('main');

    const title1 = createHtmlElement(
        "p",
        null,
        null,
        "Title 1"
    )

    const title2 = createHtmlElement(
        "h1",
        null,
        null,
        "Title 2"
    )

    const hr = document.createElement('hr');
    
    const subtitle = createHtmlElement(
        "p",
        null,
        null,
        "Porta phasellus fusce diam metus pellentesque viverra cursus."
    )

    const button = createHtmlElement(
        "button",
        null,
        null,
        "Go to Menu"
    )

    main.appendChild(title1);
    main.appendChild(title2);
    main.appendChild(hr);
    main.appendChild(subtitle);
    main.appendChild(button);

    content.appendChild(main);
}

export { render as renderHome }