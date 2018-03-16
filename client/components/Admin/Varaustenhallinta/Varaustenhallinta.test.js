import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Varaustenhallinta from './Varaustenhallinta';
// import Esitysvalinta from './Esitysvalinta';

const showsMock = [
  {
    _id: 1,
    day: 'Lauantai',
    date: new Date('2017-12-17T03:24:00'),
    name: 'Lauantai ILTA',
  },
  {
    _id: 2,
    day: 'Sunnuntai',
    date: new Date('2017-12-17T03:24:00'),
    name: 'Sunnuntai',
  },
];

describe('Varaustenhallinta component', () => {
  it('renders without crashing', () => {
    const componentWrapper = render(<Varaustenhallinta />);
    // componentWrapper.setState({ esitykset: showsMock });
  });
});
