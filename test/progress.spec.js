import { expect } from 'chai';
import Progress from '../src/index';

const ELEMENT_CONSTRUCTION_DELAY = 16;

describe('sk-progress', () => {
  let $target = null;

  beforeEach(() => {
    const element = document.createElement('div');
    element.id = 'target';
    document.body.appendChild(element);

    $target = document.getElementById('target');
  });

  afterEach(() => {
    $target = document.getElementById('target');
    $target.parentNode.removeChild($target);
  });

  it('can create an HTML element', () => {
    const createElement = () => (document.createElement('sk-progress'));
    expect(createElement).to.not.throw(Error);
  });

  it('renders an empty element', () => {
    const emptyProgress = document.createElement('sk-progress');
    emptyProgress.id = 'empty';
    $target.appendChild(emptyProgress);

    const $emptyProgress = $target.querySelector('#empty');
    expect($emptyProgress.tagName).to.equal('SK-PROGRESS');
  });

  it('renders an big, filled element', (done) => {
    const bigProgress = document.createElement('sk-progress');
    bigProgress.id = 'big';
    bigProgress.status = 100;
    bigProgress.size = 400;
    bigProgress.color = 'blue';
    bigProgress.backgroundColor = 'lightgrey';

    // In Safari the component itself doesn't have dimensions (but the <div> of the shadow DOM has) unless we render it as "block"
    bigProgress.style.display = 'block';
    $target.appendChild(bigProgress);

    window.setTimeout(() => {
      const $bigProgress = $target.querySelector('#big');

      expect($bigProgress.offsetWidth).to.be.above(399);
      expect($bigProgress.offsetHeight).to.be.above(399);

      expect($bigProgress.status).to.equal(100);

      done();
    }, ELEMENT_CONSTRUCTION_DELAY);
  });

  it('uses a custom label', (done) => {
    const customProgress = document.createElement('sk-progress');
    customProgress.id = 'custom';
    customProgress.label = '%s percentage';
    customProgress.status = 44;
    customProgress.size = 200;
    customProgress.labelColor = 'yellow';
    customProgress.labelSize = '20px';
    $target.appendChild(customProgress);

    window.setTimeout(() => {
      const $customProgress = $target.querySelector('#custom');

      expect($customProgress.status).to.equal(44);

      done();
    }, ELEMENT_CONSTRUCTION_DELAY);
  });

  it('triggers an event', (done) => {
    const eventProgress = document.createElement('sk-progress');
    eventProgress.addEventListener('change', () => {
      done();
    });

    $target.appendChild(eventProgress);

    window.setTimeout(() => {
      eventProgress.status = 11;
    }, 0);
  });
});
