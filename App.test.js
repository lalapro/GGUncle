import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { CartScreen } from './app/containers'

it('renders without crashing', () => {
  let rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});

describe('Testing ReassignLocationMenu component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <CartScreen count={2} />
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ count: 1 });
    expect(wrapper).toMatchSnapshot();
  });
});
