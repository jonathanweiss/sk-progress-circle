import 'skatejs-web-components';
import { emit, prop, define, h, Component } from 'skatejs';

import { getStyles } from './styles';

const React = { createElemetn: h }; // eslint-disable-line no-unused-vars

const Progress = define('sk-progress', class Progress extends Component {
  static displayLabelContent(value, label) {
    return label.replace('%s', value);
  }

  static get props() {
    return {
      status: prop.number({
        attribute: true,
        default: 0,
      }),
      color: prop.string({
        attribute: true,
        default: 'green',
      }),
      backgroundcolor: prop.string({
        attribute: true,
        default: '#36474f',
      }),
      endless: prop.boolean({
        attribute: true,
        default: false,
      }),
      label: prop.string({
        attribute: true,
        default: '%s%',
      }),
      size: prop.number({
        attribute: true,
        default: 100
      }),
    };
  }

  static render(elem) {
    const { width, height, color, backgroundcolor, size } = elem;
    const value = elem.status;

    emit(elem, 'change', {
      detail: {
        data: value,
      },
    });

    return (
      <div className={`progress is-${elem.color} state-${value}`}>
        <style>{getStyles(value, width, height, color, backgroundcolor, size)}</style>
        <span>{Progress.displayLabelContent(value, elem.label)}</span>
      </div>
    );
  }

});

export default Progress;
