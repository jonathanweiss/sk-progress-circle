import { expect } from 'chai';
import Progress from '../src/index';

const ELEMENT_CONSTRUCTION_DELAY = 128;

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

  it('is defined', () => {
    expect(Progress).not.to.equal(undefined);
  });

  it('renders an empty element', (done) => {
    const emptyProgress = document.createElement('sk-progress');
    emptyProgress.id = 'empty';
    $target.appendChild(emptyProgress);

    window.setTimeout(() => {
      const $emptyProgress = $target.querySelector('#empty');

      expect($emptyProgress.offsetWidth).to.be.above(0);
      expect($emptyProgress.offsetHeight).to.be.above(0);
      done();
    }, ELEMENT_CONSTRUCTION_DELAY);
  });

  it('renders an big, filled element', (done) => {
    const bigProgress = document.createElement('sk-progress');
    bigProgress.id = 'big';
    bigProgress.status = 100;
    bigProgress.size = 400;
    bigProgress.color = 'blue';
    bigProgress.backgroundColor = 'lightgrey';
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
    }, ELEMENT_CONSTRUCTION_DELAY);
  });
});
