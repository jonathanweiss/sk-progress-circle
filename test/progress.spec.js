/* eslint-disable react/react-in-jsx-scope */
import 'skatejs-web-components'; // eslint-disable-line
import { expect } from 'chai'; // eslint-disable-line import/no-extraneous-dependencies
import { h, mount } from 'bore'; // eslint-disable-line
import Progress from '../src/index'; // eslint-disable-line

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

    const wrapper = mount(<div><sk-progress /></div>);
    const node = wrapper.one('sk-progress').node;
    expect(node).to.be.an.instanceof(HTMLElement);
    expect(node.localName).to.equal('sk-progress');
  });

  it('renders the shadow DOM', (done) => {
    mount(<div><sk-progress /></div>).waitFor((wrapper) => {
      const componentNode = wrapper.one('sk-progress');
      expect(componentNode.has('style')).to.equal(true);
      expect(componentNode.has('span')).to.equal(true);
      expect(componentNode.all('div')).to.have.lengthOf(2);

      done();
    });
  });

  it('renders an empty element', (done) => {
    mount(<div><sk-progress /></div>).waitFor((wrapper) => {
      const componentNode = wrapper.one('sk-progress');
      const labelNode = componentNode.one('span');
      const containerNode = componentNode.all('.progress')[0];

      expect(labelNode.node.innerText).to.equal('0%');
      expect(containerNode.node.getAttribute('aria-valuenow')).to.equal('0');

      done();
    });
  });

  it('sets the props ["status", "size", color", "backgroundColor"] correctly', (done) => {
    // For some reasons the callback is not executed in Safari when run with Karma...
    if (window.navigator.vendor.indexOf('Apple Computer, Inc.') !== -1) {
      done();
    }

    mount(<div><sk-progress backgroundColor="lightgrey" color="blue" size="400" status="100" /></div>).waitFor((wrapper) => {
      const componentNode = wrapper.one('sk-progress');

      const labelNode = componentNode.one('span');
      const containerNode = componentNode.all('.progress')[0];
      const backgroundNode = componentNode.all('.bg')[0];

      expect(labelNode.node.innerText).to.equal('100%');
      expect(componentNode.node.getAttribute('status')).to.equal('100');

      expect(backgroundNode.node.style.width).to.equal('400px');
      expect(backgroundNode.node.style.height).to.equal('400px');
      expect(backgroundNode.node.style.backgroundColor).to.equal('lightgrey');

      expect(containerNode.node.getAttribute('aria-valuenow')).to.equal('100');

      done();
    });
  });

  it('displays a custom label', (done) => {
    mount(<div><sk-progress label="%s percentage" labelColor="yellow" labelSize="20px" /></div>).waitFor((wrapper) => {
      const componentNode = wrapper.one('sk-progress');
      const labelNode = componentNode.one('span');

      expect(labelNode.node.innerText).to.equal('0 percentage');
      expect(labelNode.node.style.fontSize).to.equal('20px');
      expect(labelNode.node.style.color).to.equal('yellow');

      done();
    });
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
/* eslint-enable react/react-in-jsx-scope */
