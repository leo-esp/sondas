export default class Probe {
    constructor(x, y, direction, size) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.size = size;
        //Utilities
        this.directionDict = { N: 0, E: 1, S: 2, W: 3 };
        this.directionArray = ['N', 'E', 'S', 'W'];
    }

    turnLeft() {
        if (this.direction === 'N') {
            this.direction = 'W';
        } else {
            this.direction = this.directionArray[
                this.directionDict[this.direction] - 1
            ];
        }
    }
    turnRight() {
        if (this.direction === 'W') {
            this.direction = 'N';
        } else {
            this.direction = this.directionArray[
                this.directionDict[this.direction] + 1
            ];
        }
    }
    moveFoward() {
        switch (this.direction) {
            case 'N':
                this.y = ++this.y;
                break;
            case 'E':
                this.x = ++this.x;
                break;
            case 'S':
                this.y = --this.y;
                break;
            case 'W':
                this.x = --this.x;
                break;
            default:
                break;
        }
    }
    sendCommands(commands, delimitedArea) {
        commands.split('').map(command => {
            if (command === 'M' && this.checkArea(delimitedArea)) {
                this.moveFoward();
            }
            if (command === 'L') {
                this.turnLeft();
            }
            if (command === 'R') {
                this.turnRight();
            }
        });
        console.log(this);
    }
    checkArea(areaLimit) {
        switch (this.direction) {
            case 'N':
                if (parseInt(this.y) >= areaLimit.y - 1) {
                    console.error('This area is out of search limit range! Danger! Coming back to last position!');
                    return false;
                } else {
                    return true;
                }
            case 'E':
                if (parseInt(this.x) >= areaLimit.x - 1) {
                    console.error('This area is out of search limit range! Danger! Coming back to last position!');
                    return false;
                } else {
                    return true;
                }
            case 'S':
                if (parseInt(this.y) <= 0) {
                    console.error('This area is out of search limit range! Danger! Coming back to last position!');
                    return false;
                } else {
                    return true;
                }
            case 'W':
                if (parseInt(this.x) <= 0) {
                    console.error('This area is out of search limit range! Danger! Coming back to last position!');
                    return false;
                } else {
                    return true;
                }
            default:
                break;
        }
    }
}
