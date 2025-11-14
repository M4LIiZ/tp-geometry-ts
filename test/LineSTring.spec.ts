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

    });const p = new Point([3.0, 4.0]);
        const q = new Point([0.0, 0.0]);
        const r = new LineString([p, q]);
    it("test constructor with coordinates", () => {
        const p = new Point([3.0, 4.0]);
        const q = new Point([0.0, 0.0]);
        const r = new LineString([p, q]);

        expect(r.getNumPoints()).to.equal(2);
        expect(r.getPointN(0)).to.equal(p);
        expect(r.getPointN(1)).to.equal(q);
        expect(r.isEmpty()).to.equal(false);
    });

    it("test should translate points", () => {
        const p = new Point([3.0, 4.0]);
        const q = new Point([0.0, 0.0]);
        const r = new LineString([p, q]);
        p.translate(1.0, 3.0);
        q.translate(2.0, 5.0);
        expect(r.getPointN(0)).to.equal(p);
        expect(r.getPointN(1)).to.equal(q);
    });


    it("test default should translate points", () => {
        const r = new LineString();
        r.translate(5.0, 1.0)
        expect(r.isEmpty()).to.equal(true);
    });

    it("test should copy", () => {
        const p = new Point([3.0, 4.0]);
        const q = new Point([1.0, 3.0]);

        const pClone = p.clone();
        const qClone = q.clone();

        p.translate(1.0, 3.0);
        q.translate(1.0, 3.0);

        expect(pClone.getCoordinate()).to.deep.equal([3.0, 4.0]);
        expect(qClone.getCoordinate()).to.deep.equal([1.0, 3.0]);
    });

    it("test default should copy", () => {
        const p = new Point();
        const q = new Point();

        const pClone = p.clone();
        const qClone = q.clone();

        expect(pClone.isEmpty()).to.equal(true);
        expect(qClone.isEmpty()).to.equal(true);

        expect(pClone.getCoordinate()).to.deep.equal([]);
        expect(qClone.getCoordinate()).to.deep.equal([]);

    });

    it("test should create lineString enveloppe", () => {
        const p = new Point([3.0, 4.0]);
        const q = new Point([0.0, 0.0]);
        const r = new LineString([p, q]);

        const env = r.getEnveloppe();
        expect(env.getXmin()).to.equal(0);
        expect(env.getXmax()).to.equal(3);
        expect(env.getYmin()).to.equal(0);
        expect(env.getYmax()).to.equal(4);
        
    });

    it("test should create empty lineString enveloppe", () => {
        const p = new Point();
        const q = new Point();
        const r = new LineString()

        const env = r.getEnveloppe();
        expect(env.getXmin()).to.be.NaN;
        expect(env.getXmax()).to.be.NaN;
        expect(env.getYmin()).to.be.NaN;
        expect(env.getYmax()).to.be.NaN;
        
    });



});

