import 'babel-polyfill';
import 'skatejs-web-components';
import { emit, prop, define, h, Component } from 'skatejs';

import shadowStyles from './shadow.less';
import { getContainerStyles, getLabelStyles, getBackgroundElementStyles } from './styleHelper';

const React = { createElement: h }; // eslint-disable-line no-unused-vars

class Progress extends Component {
  /**
   * Returns a string representing the value using the string template
   * @static
   * @param {Number} value The progress (0..100)
   * @param {String} label A template string that may contain'%s' which will be replaced with the value
   * @return {String} The resulting text
   */
  static displayLabelContent(value, template) {
    return template.replace('%s', value);
  }

  static get props() {
    return {
    /**
     * @description Color to use for the background of the circle
     * @memberof Progress
     * @default '#a9a9a9'
     * @type {string}
     * @example @html <sk-progress background-color="#a9a9a9"></sk-progress>
     * @example @js progress.backgroundColor = '#a9a9a9';
     */
      backgroundColor: prop.string({
        attribute: true,
        default: '#404040',
      }),
    /**
     * @description Color to use for the progress part of the circle
     * @memberof Progress
     * @default '#339900'
     * @type {string}
     * @example @html <sk-progress color="#339900"></sk-progress>
     * @example @js progress.color = '#339900';
     */
      color: prop.string({
        attribute: true,
        default: '#339900',
      }),
    /**
     * @description Text to be used inside the circle to diplay the current status. The "%s" will be replaced with the actual number
     * @memberof Progress
     * @default '%s%'
     * @type {string}
     * @example @html <sk-progress label="%s percent"></sk-progress>
     * @example @js progress.label = '%s percent';
     */
      label: prop.string({
        attribute: true,
        default: '%s%',
      }),
    /**
     * @description Text color of the label
     * @memberof Progress
     * @default '#111111'
     * @type {string}
     * @example @html <sk-progress label-color="darkgrey"></sk-progress>
     * @example @js progress.labelColor = 'darkgrey';
     */
      labelColor: prop.string({
        attribute: true,
        default: '#111111',
      }),
    /**
     * @description Font-size of the label
     * @memberof Progress
     * @default '16px'
     * @type {string}
     * @example @html <sk-progress label-size="24px"></sk-progress>
     * @example @js progress.labelSize = '24px';
     */
      labelSize: prop.string({
        attribute: true,
        default: '16px',
      }),
    /**
     * @description Width and height of the ciricle in pixels
     * @memberof Progress
     * @default 100
     * @type {number}
     * @example @html <sk-progress size="200"></sk-progress>
     * @example @js progress.size = 200;
     */
      size: prop.number({
        attribute: true,
        default: 100,
      }),
    /**
     * @description Progress status from 0 to 100
     * @memberof Progress
     * @default 0
     * @type {number}
     * @example @html <sk-progress status="33"></sk-progress>
     * @example @js progress.status = 33;
     */
      status: prop.number({
        attribute: true,
        default: 0,
      }),
    };
  }

  /**
   * Displays the progress circle
   * @static
   * @param {Object} elem The DOM node
   * @return {Object} The resulting JSX tree
   */
  static render(elem) {
    // Read relevant properties from the element
    const { status, color, backgroundColor, label, size, labelColor, labelSize } = elem;

    // Emit the change event
    emit(elem, 'change', {
      detail: {
        data: status,
      },
    });

    /* eslint-disable react/react-in-jsx-scope */
    return (
      <div style={getContainerStyles(status, size, color)} className="progress" role="progressbar" aria-valuenow={status} aria-valuemin="0" aria-valuemax="100" aria-live="polite">
        <style type="text/css">{shadowStyles.toString()}</style>
        <span style={getLabelStyles(labelColor, labelSize, size)}>{Progress.displayLabelContent(status, label)}</span>
        <div style={getBackgroundElementStyles(size, backgroundColor)} class="bg" />
      </div>
    );
    /* eslint-enable react/react-in-jsx-scope */
  }
}

export default define('sk-progress', Progress);
