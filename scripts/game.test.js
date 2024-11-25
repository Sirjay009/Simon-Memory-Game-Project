/**
 * @jest-environment jsdom
 */

const { expect } = require("@jest/globals");
const { default: test } = require("node:test");
const { describe } = require("yargs");
const { game } = require("../scripts/game");


describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
});

