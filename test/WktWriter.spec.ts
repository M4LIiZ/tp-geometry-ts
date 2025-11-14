import "mocha";
import { expect } from "chai";

import WktWriter from "../src/WktWriter";
import Point from "../src/Point";
import LineString from "../src/LineString";


describe("test WktWriter", () => {
    it("test point empty", () => {
        const p = new Point();
        const string = new WktWriter()

        expect(string.write(p)).to.equal("POINT EMPTY");


    });

    it("test should write Point at wkt format", () => {
        const p = new Point([3.0,4.0]);
        const string = new WktWriter();

        expect(string.write(p)).to.equal("POINT(3,4)");
    });

    it("test linestring empty", () =>{
        const p = new LineString();
        const string = new WktWriter();

        expect(string.write(p)).to.equal("LINESTRING EMPTY");

    });

    it("test linestring empty", () =>{
        const p = new Point([3.0, 4.0]);
        const q = new Point([0.0, 0.0]);
        const r = new LineString([p,q]);
        const string = new WktWriter();

        expect(string.write(r)).to.equal("LINESTRING(3,4,0,0)");

    });

    it("should throw error for unsupported geometry", () => {
    const writer = new WktWriter();
    const xType = [2,3,4] as any;
    expect(() => writer.write(xType)).to.throw(TypeError, "geometry type not supported");
    });

})

