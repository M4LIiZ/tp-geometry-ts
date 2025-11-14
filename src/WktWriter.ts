import Geometry from "./Geometry";
import Point from "./Point";
import LineString from "./LineString";



export default class WktWriter {

    write(geometry: Geometry) {
        if (geometry instanceof Point) {
            if (geometry.isEmpty()) {
                return "POINT EMPTY";
            }
            return "POINT(" + geometry.getCoordinate() +")";

        } else if (geometry instanceof LineString) {
            if (geometry.isEmpty()) {
                return "LINESTRING EMPTY";
            }

            let forstring = [];
            for (let i = 0; i < geometry.getNumPoints(); i++) {
                let currpoint = geometry.getPointN(i).getCoordinate();
                forstring.push(currpoint);
            }
            return "LINESTRING(" + forstring + ")";
        }
        else {
            throw new TypeError("geometry type not supported");
        }
    }
}