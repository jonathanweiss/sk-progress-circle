const elementStylesDefault = {
  position: 'relative',
  display: 'block',
  width: '100px',
  height: '100px',
  'border-radius': '50%',
  'background-color': '#fff',
};

const afterElementStylesDefault = {
  position: 'absolute',
  left: 0,
  top: 0,
  opacity: 0.1,
  width: '100px',
  height: '100px',
  'border-radius': '50%',
  display: 'block',
  content: ' ',
  'background-color': '#36474f',
  'z-index': 1,
};

const spanStylesDefault = {
  position: 'absolute',
  width: '60px',
  height: '60px',
  left: 0,
  top: 0,
  'background-color': '#fff',
  'border-radius': '50%',
  'margin-left': '20px',
  'margin-top': '20px',
  'text-align': 'center',
  'line-height': '60px',
  'font-size': '1rem',
  'z-index': '2',
};

const mapToStyleDefinition = (styleMap) => {
  const attributesThatNeedQuotes = ['content'];

  return Object.keys(styleMap)
    .map(attribute => {
      let attributeValue = styleMap[attribute];
      if (attributesThatNeedQuotes.indexOf(attribute) !== -1) {
        attributeValue = `"${attributeValue}"`;
      }

      return `${attribute}: ${attributeValue};\n`;
    })
    .join('');
};

const getGradients = (value, color) => {
  let backgroundDefinition;

  if (value < 50) {
    backgroundDefinition = {
      'background-image': `
        linear-gradient(
          90deg,
          #ffffff 50%,
          transparent 50%,
          transparent
        ),
        linear-gradient(
          ${90 + (3.6 * value)}deg,
          ${color} 50%,
          #ffffff 50%,
          #ffffff
        );
      `,
    };
  } else {
    backgroundDefinition = {
      'background-image': `
        linear-gradient(
          ${-90 + (3.6 * (value - 50))}deg,
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

const getStyles = (value, width, height, color, backgroundColor) => {
  // I could use the object spread operator, but don't want too many Babel plugins only for this usage here:
  // http://babeljs.io/docs/plugins/transform-object-rest-spread/
  const elementStyles = Object.assign({}, elementStylesDefault, getGradients(value, color));
  const afterElementStyles = Object.assign({}, afterElementStylesDefault, backgroundColor);
  const spanStyles = Object.assign({}, spanStylesDefault);

  const styles = `
    .progress { ${mapToStyleDefinition(elementStyles)} }
    .progress:after { ${mapToStyleDefinition(afterElementStyles)} }
    .progress > span { ${mapToStyleDefinition(spanStyles)} }
  `;

  return styles;
};

export {
  getStyles,
  getGradients
};
