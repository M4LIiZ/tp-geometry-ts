import Coordinate from "./Coordinate";
import Enveloppe from "./Enveloppe"
import EnveloppeBuilder from "./EnveloppeBuilder";
import Geometry from "./Geometry";


export default class Point implements Geometry {
  [x: string]: any;
  private coordinate?: Coordinate;

  constructor(coordinate?: Coordinate) {
    this.coordinate = coordinate || [];
  }

  getEnveloppe(): Enveloppe {
    let pointsBuilder = new EnveloppeBuilder();
    pointsBuilder.insert(this.getCoordinate());

    return pointsBuilder.build();
  }

  clone(): Point {
    return new Point([... this.coordinate])

  }

  translate(dx: number, dy: number) {
    if (this.isEmpty()) {
      return;
    }

    this.coordinate[0] += dx;
    this.coordinate[1] += dy;
  }

  isEmpty(): boolean {
    return this.coordinate.length == 0;
  }


  getType(): string {
    return "Point"
  }

  getCoordinate(): Coordinate {
    return this.coordinate;
  }

  x(): number {
    return this.coordinate.length > 0 ? this.coordinate[0] : Number.NaN;
  }

  y(): number {
    return this.coordinate.length > 1 ? this.coordinate[1] : Number.NaN;
  }

}
