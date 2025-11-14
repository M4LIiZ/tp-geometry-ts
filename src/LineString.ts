import Point from "./Point";
import Geometry from "./Geometry";
import Enveloppe from "./Enveloppe"
import EnveloppeBuilder from "./EnveloppeBuilder";
import GeometryVisitor from "./GeometryVisitor";

export default class LineString implements Geometry {
    private points: Point[];

    constructor(points?: Point[]) {
        this.points = points || [];
    }

    getEnveloppe(): Enveloppe {
        let builder = new EnveloppeBuilder();
        for (let point of this.points) {
            builder.insert(point.getCoordinate());
        }
        return builder.build();
    }

    clone(): LineString {

        let newPoints = new Array<Point>;
        for (let point of this.points) {
            newPoints.push(point.clone());

        }

        return new LineString(newPoints);
    }

    translate(dx: number, dy: number) {
        for (let point of this.points) {
            point.translate(dx, dy);
        }
    }

    isEmpty(): boolean {
        return this.points.length == 0;
    }

    getNumPoints(): number {
        return this.points ? this.points.length : 0;
    }

    getType(): string {
        return "LineString";
    }
    getPointN(n: number): Point {
        return this.points[n];
    }


    accept(visitor: GeometryVisitor) {
        visitor.visitLineString(this);
    }
}
