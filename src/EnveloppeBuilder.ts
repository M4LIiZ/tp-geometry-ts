import Coordinate from "./Coordinate"
import Enveloppe from "./Enveloppe"


export default class EnveloppeBuilder {

    coordsList: Coordinate[] = [];


    insert(coordinate: Coordinate) {
        this.coordsList.push(coordinate);

    }

    build(): Enveloppe {
        if (this.coordsList.length == 0) {
            return new Enveloppe();
        }

        let [xMin, yMin] = this.coordsList[0];
        let [xMax, yMax] = this.coordsList[0];

        for (let [currX, currY] of this.coordsList) {
            if (xMin > currX) {
                xMin = currX;
            }
            if (yMin > currY) {
                yMin = currY;
            }

            if (xMax < currX) {
                xMax = currX;
            }

            if (yMax < currY) {
                yMax = currY;
            }



        } return new Enveloppe([xMin, yMin], [xMax, yMax]);
    }

}  
