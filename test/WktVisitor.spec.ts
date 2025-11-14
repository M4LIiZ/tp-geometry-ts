import "mocha";
import { expect } from "chai";
import WktVisitor from "../src/WktVisitor";
import Point from "../src/Point";
import LineString from "../src/LineString";

describe("test WktVisitor", () => {
    it("test point empty", () =>{
        const p = new Point();
        const string = new WktVisitor();
        p.accept(string); 

        expect(string.getResult()).to.equal("POINT EMPTY");
    });

    it("test linstring empty", () =>{
        const p = new LineString();
        const string = new WktVisitor();
        p.accept(string); 

        expect(string.getResult()).to.equal("LINESTRING EMPTY");
    });

    it("test point with coordinate", () =>{
        const p = new Point([3.0,4.0]);
        const string = new WktVisitor();
        p.accept(string); 

        expect(string.getResult()).to.equal("POINT(3,4)");
    });

    it("test linestring with coordinates", () =>{
        const p = new Point([3.0,4.0]);
        const q = new Point([0.0, 0.0]);
        const r = new LineString([p,q]);
        const string = new WktVisitor();
        r.accept(string); 

        expect(string.getResult()).to.equal("LINESTRING(3,4,0,0)");
    });

    
});