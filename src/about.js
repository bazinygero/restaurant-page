import { content, createHtmlElement } from "./index";

function render() {
    const main = document.createElement('main');
    main.classList.add('main');

    const title1 = createHtmlElement(
        "p",
        null,
        null,
        "Title 1"
    )

    const title3 = createHtmlElement(
        "h1",
        null, 
        null,
        "Title 3"
    )

    const hr = document.createElement('hr');

    const media = "Porta phasellus fusce diam metus pellentesque viverra cursus Facilisis mollis suscipit dictumst montes aliquet facilisi fringilla litora in ut eros.";
    const p = createHtmlElement(
        "p",
        null,
        null,
        media
    )

    main.appendChild(title1);
    main.appendChild(title3);
    main.appendChild(hr);
    main.appendChild(p);

    content.appendChild(main);
}

export { render as renderAbout }