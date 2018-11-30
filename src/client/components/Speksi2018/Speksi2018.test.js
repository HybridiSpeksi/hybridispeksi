import React from 'react';
import Speksi2018 from './Speksi2018';
import Esitysvalinta from './Esitysvalinta';
import Uusivaraus from './UusiVaraus';

const esitykset = [
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

describe('Speksi2018', () => {
  it('renders without crashing', () => {
    const wrapper = render(<Speksi2018 />);
    expect(wrapper).toMatchSnapshot();
  });

  it('shows list of shows without crashing', () => {
    const wrapper = shallow(<Esitysvalinta esitykset={esitykset} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('shows UusiVaraus form with proper fielsd', () => {
    const component = (
      <Uusivaraus
        handleChange={() => console.log('change')}
        handleSubmit={() => {
          console.log('submit');
        }}
        fname="Seppo"
        sname="Silander"
        email="seppo@silander.fi"
        pnumber="04040404040"
        ncount={1}
        scount={2}
        ocount={3}
        price="78"
        lisatiedot="asdf"
        valittuEsitys={{
          _id: 1,
          day: 'Lauantai',
          date: new Date('2017-12-17T03:24:00'),
          name: 'Lauantai ILTA',
        }}
        esitykset={esitykset}
        messages={{}}
        ilmottu={false}
      />
    );
    const wrapper = shallow(<component />);
    expect(wrapper).toMatchSnapshot();

  });

});
