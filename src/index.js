import 'skatejs-web-components';
import { emit, prop, define, h, Component } from 'skatejs';

import { getStyles } from './styles';

const React = { createElement: h }; // eslint-disable-line no-unused-vars

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
      backgroundColor: prop.string({
        attribute: true,
        default: '#36474f',
      }),
      label: prop.string({
        attribute: true,
        default: '%s%',
      }),
      size: prop.number({
        attribute: true,
        default: 100,
      }),
      labelColor: prop.string({
        attribute: true,
        default: '#111111',
      }),
      labelSize: prop.number({
        attribute: true,
        default: 16,
      }),
    };
  }

  static render(elem) {
    const { status, label } = elem;

    emit(elem, 'change', {
      detail: {
        data: status,
      },
    });

    return (
      <div className="progress" role="progressbar" aria-valuenow={status} aria-valuemin="0" aria-valuemax="100" aria-live="polite">
        <style type="text/css">{getStyles(elem)}</style>
        <span>{Progress.displayLabelContent(status, label)}</span>
      </div>
    );
  }

});

export default Progress;
