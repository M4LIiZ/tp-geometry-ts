import Coordinate from "./Coordinate"


export default class Enveloppe {
    private bottomLeft: Coordinate
    private topRight: Coordinate

    constructor(bottomLeft?: Coordinate, topRight?: Coordinate) {
        this.bottomLeft = bottomLeft;
        this.topRight = topRight;
    }

    isEmpty(): boolean {
        return this.bottomLeft == undefined || this.topRight == undefined;
    }

    getXmin(): number {
        return this.isEmpty() ? Number.NaN : this.bottomLeft[0];

    }

    getYmin(): number {
        return this.isEmpty() ? Number.NaN : this.bottomLeft[1];

    }

    getXmax(): number {
        return this.isEmpty() ? Number.NaN : this.topRight[0];

    }
    getYmax(): number {
        return this.isEmpty() ? Number.NaN : this.topRight[1];

    }

    toString(): string {
        return "Coordonnées de bottomLeft: " + this.bottomLeft + " et " + "Coordonnées de topRight: " + this.topRight;
    }




}