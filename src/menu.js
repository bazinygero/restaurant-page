import { content, createHtmlElement } from "./index";

const menu = [
  {
    name: "Varenyky",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",
    price: "10$",
  },
  {
    name: "Kotleta po-Kyivski",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",
    price: "20$",
  },
  {
    name: "Borsht",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",
    price: "15$",
  },
];

function render() {
  const main = document.createElement('main');
  main.classList.add('main');

  const title1 = createHtmlElement(
    "p",
    null,
    null,
    "Title 1"
  );
  const title = createHtmlElement("h1", null, null, "Menu");

  const hr = document.createElement('hr');

  main.appendChild(title1);
  main.appendChild(title);
  main.appendChild(hr);

  menu.forEach((item) => {
    const div = createHtmlElement("div", null, ["menu-item"], null);

    const name = createHtmlElement("h2", null, ["golden"], item.name);
    const description = createHtmlElement(
      "p",
      null,
      null,
      item.description
    );
    const price = createHtmlElement("h2", null, ["golden"], item.price);
    const hr = createHtmlElement("hr", null, ["menu-hr"], null);

    div.appendChild(name);
    div.appendChild(description);
    div.appendChild(price);
    div.appendChild(hr);

    main.appendChild(div);
  });

  content.appendChild(main);
}

export { render as renderMenu };