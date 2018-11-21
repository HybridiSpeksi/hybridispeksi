import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../components/Home/Home';


it('renders without crashing', () => {
  shallow(<Home />);
});
