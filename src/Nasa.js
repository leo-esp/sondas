export default class Nasa {
    constructor(){
        this.probeList = [];
        this.delimitedArea = {x:1, y: 1}
    }
    delimitateArea(x,y){
        if(x || y){
            console.error('The area must be greater than 0!');
        }
        this.delimitedArea.x=x;
        this.delimitedArea.y=y;
    }

    sendProbe(probe, commands=''){
        this.probeList.push(probe);
        if(commands){
            probe.sendCommands(commands, this.delimitedArea);
        }
    }

    getProbeSize(){
        return 500 / (this.delimitedArea.x+1);
    }
}