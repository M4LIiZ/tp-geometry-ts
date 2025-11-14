import GeometryVisitor from "./GeometryVisitor";
import LineString from "./LineString";
import Point from "./Point";



export default class WktVisitor implements GeometryVisitor {

    private buffer?: string;

    visitPoint(point: Point) {
        if (point.isEmpty()) {
            this.buffer = "POINT EMPTY";
        } else {
            this.buffer = "POINT(" + point.getCoordinate() + ")";
        }
    }
    
    visitLineString(linestring: LineString) {
        if (linestring.isEmpty()) {
                this.buffer = "LINESTRING EMPTY";
            } else{

            let forstring = [];
            for (let i = 0; i < linestring.getNumPoints(); i++) {
                let currpoint = linestring.getPointN(i).getCoordinate();
                forstring.push(currpoint);
            }
            this.buffer = "LINESTRING(" + forstring + ")";
        }
    }

    getResult(): string{
        return this.buffer;
    }

}