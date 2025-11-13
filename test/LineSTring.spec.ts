import "mocha";
import { expect } from "chai";
import LineString from "../src/LineString";
import Point from "../src/Point";

describe("test LineString", () => {
    it("test default constructor", () => {
        const p = new LineString();
        expect(p.getNumPoints()).to.equal(0);
        expect(p.getType()).to.equal("LineString");
        expect(p.isEmpty()).to.equal(true);

    });
    it("test constructor with coordinates", () => {
        const p = new Point([3.0,4.0]);
        const q = new Point([0.0,0.0]);
        const r = new LineString([p,q]);
        expect(r.getNumPoints()).to.equal(2);
        expect(r.getPointN(0)).to.equal(p);
        expect(r.getPointN(1)).to.equal(q);
        expect(r.isEmpty()).to.equal(false);
    });

        it("should translate points", () => {
            const p = new Point ([3.0,4.0]);
            const q = new Point([0.0,0.0]);
            const r = new LineString([p,q]);
            p.translate(1.0, 3.0);
            q.translate(2.0, 5.0);
            expect(r.getPointN(0)).to.equal(p);
            expect(r.getPointN(1)).to.equal(q);   
        });
    
        it("should not translate points", () =>{
            const r  = new LineString();
            r.translate(5.0, 1.0)
            expect(r.isEmpty()).to.equal(true);
        })
    


});

