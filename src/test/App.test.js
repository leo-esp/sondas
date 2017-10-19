import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Probe from '../Probe';
import Nasa from '../Nasa';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('should to be in right position', () => {
    const nasa = new Nasa();
    nasa.delimitateArea(10, 10);
    nasa.sendProbe(new Probe(1, 2, 'N'), 'LMLMLMLMM');
    expect(nasa.probeList[0].x).toBe(1);
    expect(nasa.probeList[0].y).toBe(3);
    expect(nasa.probeList[0].direction).toBe('N');
})