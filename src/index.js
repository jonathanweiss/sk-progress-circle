import 'skatejs-web-components';
import { emit, prop, define, h, Component } from 'skatejs';

import shadowStyles from './shadow.less';
import { getContainerStyles, getLabelStyles, getBackgroundElementStyles } from './styleHelper';

const React = { createElement: h }; // eslint-disable-line no-unused-vars

const Progress = define('sk-progress', class Progress extends Component {
  static displayLabelContent(value, label) {
    return label.replace('%s', value);
  }

  static get props() {
    return {
    /**
     * @description Color to use for the background of the circle
     * @memberof Progress
     * @default '#a9a9a9'
     * @type {string}
     * @example @html <sk-progress backgroundColor="#a9a9a9"></ak-button>
     * @example @js button.background-color = '#a9a9a9';
     */
      backgroundColor: prop.string({
        attribute: true,
        default: '#a9a9a9',
      }),
      color: prop.string({
        attribute: true,
        default: '#339900',
      }),
      label: prop.string({
        attribute: true,
        default: '%s%',
      }),
      labelColor: prop.string({
        attribute: true,
        default: '#111111',
      }),
      labelSize: prop.number({
        attribute: true,
        default: 16,
      }),
      size: prop.number({
        attribute: true,
        default: 100,
      }),
      status: prop.number({
        attribute: true,
        default: 0,
      }),
    };
  }

  static render(elem) {
    const { status, color, backgroundColor, label, size, labelColor, labelSize } = elem;

    emit(elem, 'change', {
      detail: {
        data: status,
      },
    });

    return (
      <div style={getContainerStyles(status, size, color)} className="progress" role="progressbar" aria-valuenow={status} aria-valuemin="0" aria-valuemax="100" aria-live="polite">
        <style type="text/css">{shadowStyles.toString()}</style>
        <span style={getLabelStyles(labelColor, labelSize, size)}>{Progress.displayLabelContent(status, label)}</span>
        <div style={getBackgroundElementStyles(size, backgroundColor)} class="bg"></div>
      </div>
    );
  }

});

export default Progress;
