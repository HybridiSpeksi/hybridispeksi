import React from 'react';
import { shallow } from 'enzyme';
import Esitysvalinta from './Esitysvalinta';

const esitykset = [
  { day: 'Lauantai', date: new Date('2017-12-17T03:24:00'), name: 'Lauantai ILTA' },
  { day: 'Sunnuntai', date: new Date('2017-12-17T03:24:00'), name: 'Sunnuntai' },
];

it('renders without crashing', () => {
  shallow(<Esitysvalinta esitykset={esitykset} />);
});
