import React from 'react';
import Roster from './components/roster';
import Enzyme, { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

// WRITE TEST CASES TO TEST ROSTER COMPONENT
describe('Roster', () => {
  it('renders without crashing', () => {
    shallow(<Roster />);
  });

  it('renders the correct text', () => {
    const wrapper = shallow(<Roster />);
    const actual = wrapper.find('h3').text();
    const expected = 'Team Name';
    expect(actual).toEqual(expected);
  }
  );

  it('matches the snapshot', () => {
    const wrapper = shallow(<Roster />);
    expect(toJson(wrapper)).toMatchSnapshot();
  }
  );
}
);