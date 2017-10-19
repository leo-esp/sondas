import React, { Component } from 'react';
import Probe from './Probe';
import Nasa from './Nasa';
import './css/App.css';
const colors = ['red', 'orange', 'green', 'blue', 'white', 'pink', 'darkorange', 'grey', 'darkred'];

class App extends Component {
    constructor(){
        super();
        this.nasa = new Nasa();
        this.nasa.delimitateArea(10, 10);
        this.state={probeList: [], msg: ''};
    }

    sendProbe(){
        if(this.x.value > 10 || this.y.value > 10){
            this.setState({msg: 'You can not send a probe out of search limit range! max x: 10 and max y: 10'});
            return;
        }
        if(['N', 'E', 'S', 'W'].indexOf(this.direction.value) === -1){
            this.setState({msg: 'The direction can only be N, E, S, W!'});
            return;
        }
        this.nasa.sendProbe(new Probe(parseInt(this.x.value), parseInt(this.y.value), this.direction.value, this.nasa.getProbeSize()), this.commands.value);
        this.setState({probeList: this.nasa.probeList});
        this.x.value= "";
        this.y.value= "";
        this.direction.value= "";
        this.commands.value= "";
    }

    render() {
        return (
            <div>
                <main style={{backgroundSize: `${this.nasa.getProbeSize()}px ${this.nasa.getProbeSize()}px`}}>
                    {this.state.probeList.map((probe, index) => {
                        return (
                            <div className={`${probe.direction}`} style={{width: `${probe.size}px`, height: `${probe.size}px`, fill: `${colors[index]}`, position: 'absolute', left:`${(probe.x*probe.size)}px`, bottom: `${(probe.y*probe.size)}px` }} key={index}>
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1000 1000">
                                <g><path fill={colors[index]} d="M341.4,856.1l-168.2,25.7c-13.4,2-26.7-4.1-33.8-15.6l-62.7-102c-3.5-5.7-5.1-12.2-4.9-18.6c0-0.5-0.1-1.1-0.1-1.6V528.2c0-18.6,15.1-33.7,33.7-33.7c18.6,0,33.7,15.1,33.7,33.7v89.5l134.7-239.9l67.7,115.5V856.1z M894.7,494.5c-18.6,0-33.7,15.1-33.7,33.7v89.5L726.3,377.8l-67.7,115.5v362.8l168.2,25.7c13.4,2,26.7-4.1,33.8-15.7l62.7-102c3.5-5.7,5.1-12.2,4.9-18.6c0-0.5,0.1-1.1,0.1-1.6V528.2C928.3,509.6,913.3,494.5,894.7,494.5z M591.2,857.6l-57.5,42.9v55.9c0,18.6-15.1,33.7-33.7,33.7c-18.6,0-33.7-15.1-33.7-33.7v-55.9l-57.5-42.9V484.2c0-6-1.6-11.9-4.6-17l-92.2-157.4L470.6,27.2c6-10.6,17.2-17.2,29.4-17.2c12.2,0,23.4,6.6,29.4,17.2l158.7,282.6l-92.2,157.4c-3,5.2-4.6,11-4.6,17V857.6z M591,318.2c14.3-11.8,16.4-33.1,4.5-47.4c-3.9-4.7-39.7-46.2-94.7-46.2c-54.5,0-91.7,40.8-95.8,45.5c-12.3,14-10.9,35.4,3.1,47.6c6.4,5.6,14.3,8.4,22.2,8.4c9.3,0,18.6-3.9,25.2-11.4c5.7-6.3,24.9-22.6,45.3-22.6c23.9,0,42.8,21.7,42.8,21.7C555.5,328,576.7,330.1,591,318.2z"/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></g>
                                </svg>
                            </div>
                        )
                    })}
                </main>
                <div className="painel">
                    <input type="number" placeholder="Position X" ref={(input) => { this.x = input; }}/>
                    <input type="number" placeholder="Position Y" ref={(input) => { this.y = input; }}/>
                    <input type="text" placeholder="Direction (N,E,S,W)" ref={(input) => { this.direction = input; }}/>
                    <input type="text" placeholder="Commands" ref={(input) => { this.commands = input; }}/>
                    <button type="button" onClick={this.sendProbe.bind(this)}>Send Probe</button>
                </div>
                <div className="error">
                    <span>{this.state.msg}</span>
                </div>
            </div>
            
        );
    }
}

export default App;
