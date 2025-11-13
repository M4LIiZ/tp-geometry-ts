import "mocha";
import { expect } from "chai";
import Point from "../src/Point";

describe("test Point", () => {
    it("test default constructor", () => {
        const p = new Point();
        expect(p.getCoordinate()).to.deep.equal([]);
        expect(Number.isNaN(p.x()));
        expect(Number.isNaN(p.y()));
        expect(p.getType()).to.equal("Point");
        expect(p.isEmpty()).to.equal(true);
    });

    it("test constructor with coordinates", () => {
        const p = new Point([3.0,4.0]);
        expect(p.getCoordinate()).to.deep.equal([3.0,4.0]);
        expect(p.x()).to.equal(3.0);
        expect(p.y()).to.equal(4.0);
        expect(p.isEmpty()).to.equal(false);
    });

    it("test should translate point", () => {
        const p = new Point ([3.0,4.0]);
        p.translate(1.0, 3.0);
        expect(p.getCoordinate()).to.deep.equal([4.0, 7.0]);   
    });

    it("test default should translate", () =>{
        const p = new Point ([]);
        p.translate(1.0, 3.0);
        expect(p.getCoordinate()).to.deep.equal([]); 
    });

    it("test should copy", () => {
        const p = new Point ([3.0,4.0]);
        const pClone = p.clone();
        p.translate(1.0, 3.0);
        expect(pClone.getCoordinate()).to.deep.equal([3.0,4.0]);
    });

    it("test default should copy", () => {
        const p = new Point();
        const pClone = p.clone();
        expect(pClone.isEmpty()).to.equal(true);
        expect(pClone.getCoordinate()).to.deep.equal([]);

    });

    

});

