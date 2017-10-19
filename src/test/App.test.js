import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Sondas from './Sondas';
import Nasa from './Nasa';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('deve retornar a posição das sondas', () => {
    Sondas.setArea(5,5);
    Sondas.addSonda(1,2,'N');
    Sondas.movimenta('LMLMLMLMM');
    Sondas.addSonda(3,3,'E');
    Sondas.movimenta('MMRMMRMRRM');
    expect(Sondas.getSondas()).toBe([
        {x: 1, y: 3, direction: 'N'},
        {x: 5, y: 1, direction: 'E'}
    ]);
})