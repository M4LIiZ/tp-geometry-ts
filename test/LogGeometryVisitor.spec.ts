import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LogGeometryVisitor from "../src/LogGeometryVisitor";
import LineString from "../src/LineString";

describe("test LogGeometryVisitor", () => {
    it("test Point empty", () => {
        const p = new Point();
        let result = "";
        const visitor = new LogGeometryVisitor((message)=>{
            result = message;
        });
        p.accept(visitor);
        expect(result).to.equal("Je suis un point vide");
    });

    it("test Point with coordinate", () => {
        const p = new Point([3.0, 4.0]);
        let result = "";
        const visitor = new LogGeometryVisitor((message)=>{
            result = message;
        });
        p.accept(visitor);
        expect(result).to.equal("Je suis un point avec x=3 et y=4");
    });

    it("test Linestring empty", () => {
        const r = new LineString();
        let result = "";
        const visitor = new LogGeometryVisitor((message)=>{
            result = message;
        });
        r.accept(visitor);
        expect(result).to.equal("Je suis une polyligne vide");
    });

    it("test Point with coordinate", () => {
        const p = new Point([3.0, 4.0]);
        const q = new Point([0.0, 0.0]);
        const r = new LineString([p, q]);

        let result = "";
        const visitor = new LogGeometryVisitor((message)=>{
            result = message;
        });
        r.accept(visitor);
        expect(result).to.equal("Je suis une polyligne avec 2 coordonnées");
    });


});

