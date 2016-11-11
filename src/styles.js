const elementStylesDefault = {
  'background-color': '#fff',
  'border-radius': '50%',
  display: 'inline-block',
  position: 'relative',
};

const afterElementStylesDefault = {
  'border-radius': '50%',
  content: ' ',
  display: 'block',
  left: 0,
  opacity: 0.1,
  position: 'absolute',
  top: 0,
  'z-index': 1,
};

const spanStylesDefault = {
  'background-color': '#fff',
  'border-radius': '50%',
  'font-size': '1rem',
  left: 0,
  position: 'absolute',
  top: 0,
  'text-align': 'center',
  'z-index': '2',
};

const mapToStyleDefinition = (styleMap) => {
  const attributesThatNeedQuotes = ['content'];

  return Object.keys(styleMap)
    .map((attribute) => {
      let attributestatus = styleMap[attribute];
      if (attributesThatNeedQuotes.indexOf(attribute) !== -1) {
        attributestatus = `"${attributestatus}"`;
      }

      return `${attribute}: ${attributestatus};\n`;
    })
    .join('');
};

const getGradients = (status, color) => {
  let backgroundDefinition;

  if (status < 50) {
    backgroundDefinition = {
      'background-image': `
        linear-gradient(
          90deg,
          #ffffff 50%,
          transparent 50%,
          transparent
        ),
        linear-gradient(
          ${90 + (3.6 * status)}deg,
          ${color} 50%,
          #ffffff 50%,
          #ffffff
        )
      `,
    };
  } else {
    backgroundDefinition = {
      'background-image': `
        linear-gradient(
          ${-90 + (3.6 * (status - 50))}deg,
          ${color} 50%,
          transparent 50%,
          transparent
        ),
        linear-gradient(
          270deg,
          ${color} 50%,
          #ffffff 50%,
          #ffffff
        );
      `,
    };
  }

  return backgroundDefinition;
};

const getStyles = (elem) => {
  const { backgroundColor, size, status, color, labelColor, labelSize } = elem;

  // I could use the object spread operator, but don't want too many Babel plugins only for this usage here:
  // http://babeljs.io/docs/plugins/transform-object-rest-spread/

  // Add gradient to div container and adjust dimensions
  const elementStyles = Object.assign({}, elementStylesDefault,
    getGradients(status, color), {
      color,
      width: `${size}px`,
      height: `${size}px`,
    });

  // Adjust dimensions and background-color of the ::after pseudo-element
  const afterElementStyles = Object.assign({}, afterElementStylesDefault, {
    'background-color': backgroundColor,
    height: `${size}px`,
    width: `${size}px`,
  });

  // Adjust the dimensions of the inner element based on the size of the progress circle
  const spanStyles = Object.assign({}, spanStylesDefault, {
    color: `${labelColor}`,
    'font-size': `${labelSize}px`,
    height: `${0.6 * size}px`,
    'line-height': `${0.6 * size}px`,
    'margin-left': `${0.2 * size}px`,
    'margin-top': `${0.2 * size}px`,
    width: `${0.6 * size}px`,
  });

  const styles = `
    .progress { ${mapToStyleDefinition(elementStyles)} }
    .progress:after { ${mapToStyleDefinition(afterElementStyles)} }
    .progress > span { ${mapToStyleDefinition(spanStyles)} }
  `;

  return styles;
};

export {
  getStyles, // eslint-disable-line
  // @TODO: expose more functions to make testing easier
};
