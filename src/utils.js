export const objToStyleDefinition = (styleMap, attributesThatNeedQuotes = ['content']) => { // eslint-disable-line
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
