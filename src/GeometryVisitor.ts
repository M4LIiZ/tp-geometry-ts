import Point from "../src/Point";
import LineString from "./LineString";

export default interface GeometryVisitor{
    visitPoint(point: Point);

    visitLineString(linestring: LineString);

}