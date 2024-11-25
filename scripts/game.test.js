/**
 * @jest-environment jsdom
 */

const { expect } = require("@jest/globals");
const { default: test } = require("node:test");
const { describe } = require("yargs");

beforeEach(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "tf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
});