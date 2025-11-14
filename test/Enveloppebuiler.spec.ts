import "mocha";
import { expect } from "chai";
import EnveloppeBuilder from "../src/EnveloppeBuilder";

describe("test EnveloppeBuilder", () => {
    it("test default constructor", () => {
        const builder = new EnveloppeBuilder();
        const env = builder.build();
        expect(env.isEmpty()).to.equal(true);

    });

    it("test should create envelope with 1 coordinate", () => {
        const builder = new EnveloppeBuilder();
        builder.insert([4, 5]);
        const env = builder.build();
        expect(env.getXmin()).to.equal(4);
        expect(env.getXmax()).to.equal(4);
        expect(env.getYmin()).to.equal(5);
        expect(env.getYmax()).to.equal(5);
    });

    it("test should create envelope with 4 coordinates", () => {
        const builder = new EnveloppeBuilder();
        builder.insert([4, 5]);
        builder.insert([8, 3]);
        builder.insert([9, 1]);
        builder.insert([1, 7]);
        const env = builder.build();
        expect(env.getXmin()).to.equal(1);
        expect(env.getXmax()).to.equal(9);
        expect(env.getYmin()).to.equal(1);
        expect(env.getYmax()).to.equal(7);
    });

    it("isEmpty should return false 1 coordinate", () => {
        const builder = new EnveloppeBuilder();
        builder.insert([4, 5]);
        const env = builder.build();
        expect(env.isEmpty()).to.equal(false);
    });

    it ("should write string of coordinates", () => {
        const builder = new EnveloppeBuilder();
        builder.insert([4, 5]);
        builder.insert([8, 3]);
        const env = builder.build();
        expect(env.toString()).to.equal("Coordonnées de bottomLeft: 4,3 et Coordonnées de topRight: 8,5")
    });







});