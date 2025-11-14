import Enveloppe from "./Enveloppe"
import GeometryVisitor from "./GeometryVisitor";

export default interface Geometry {
    getType(): string;

    isEmpty(): boolean;

    translate(dx: number, dy: number);

    clone(): Geometry;

    getEnveloppe(): Enveloppe;

    accept(visitor: GeometryVisitor);

}