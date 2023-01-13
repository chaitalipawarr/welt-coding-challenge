function formatStyleSelector(selector: string, attributes: string) {
  let output: string = "";
  if (selector) {
    if (attributes) {
      output += `${attributes}`;

      //check if the attributes string has {}
      if (
        !(
          attributes.charAt(0) === "{" &&
          attributes.charAt(attributes.length - 1) === "}"
        )
      ) {
        output = `{${output}}`;
      }

      output = `${selector} ${output}`;
    } else {
      console.error("No CSS attributes present");
    }
  } else {
    console.error("CSS selector not present!");
  }

  return output;
}

function addCustomStyle(
  styleIdentifier: string,
  selector: string,
  attributes: any,
  mediaQuery?: string
): void {
  let styleTag = document.createElement("style");
  let styleString = "";

  if (styleIdentifier) {
    styleTag.setAttribute("id", styleIdentifier);
  }

  styleString = formatStyleSelector(selector, attributes);

  if (mediaQuery) {
    styleString = `@media (${mediaQuery}) { ${styleString} }`;
  }

  styleTag.textContent = styleString;
  document.head.appendChild(styleTag);
}
