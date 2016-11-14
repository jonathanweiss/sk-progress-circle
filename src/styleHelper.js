const getGradients = (status, color) => {
  let gradients;

  if (status < 50) {
    gradients = `
      linear-gradient(
        90deg,
        #ffffff 50%,
        transparent 50%,
        transparent
      ),
      linear-gradient(
        ${Math.round(90 + (3.6 * status))}deg,
        ${color} 50%,
        #ffffff 50%,
        #ffffff
      )
    `;
  } else {
    gradients = `
      linear-gradient(
        ${Math.round(-90 + (3.6 * (status - 50)))}deg,
        ${color} 50%,
        transparent 50%,
        transparent
      ),
      linear-gradient(
        270deg,
        ${color} 50%,
        #ffffff 50%,
        #ffffff
      )
    `;
  }

  return gradients;
};

export const getContainerStyles = (status, size, color) => {
  return {
    'background-image': getGradients(status, color),
    color,
    width: `${size}px`,
    height: `${size}px`,
  };
};

export const getLabelStyles = (labelColor, labelSize, size) => {
  return {
    color: `${labelColor}`,
    'font-size': `${labelSize}px`,
    height: `${0.6 * size}px`,
    'line-height': `${0.6 * size}px`,
    'margin-left': `${0.2 * size}px`,
    'margin-top': `${0.2 * size}px`,
    width: `${0.6 * size}px`,
  };
};

export const getBackgroundElementStyles = (size, color) => {
  return {
    'background-color': color,
    height: `${size}px`,
    width: `${size}px`,
  };
};
