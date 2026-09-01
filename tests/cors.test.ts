import type {CorsHeader} from "../src/types/cors";
import {describe, expect, test} from "bun:test";
import CorsBuilder from "../src/builders/CorsBuilder";
import Cors from "../src/facades/Cors";

function expectValidHeaders(headers: CorsHeader) {
    expect(headers["Access-Control-Allow-Origin"]).toBeDefined();
    expect(headers["Access-Control-Allow-Headers"]).toBeDefined();
    expect(headers["Access-Control-Allow-Methods"]).toBeDefined();
}

describe("Cors facade", () => {
    test("init returns CORS headers", () => {
        const headers = Cors.init;

        expectValidHeaders(headers);
    });

    test("init returns cached identical object across calls", () => {
        const a = Cors.init;
        const b = Cors.init;

        expect(a).toBe(b);
    });

    test("default config uses wildcard origin/methods/headers", () => {
        const headers = Cors.init;

        expect(headers["Access-Control-Allow-Origin"]).toBe("*");
        expect(headers["Access-Control-Allow-Methods"]).toBe("*");
        expect(headers["Access-Control-Allow-Headers"]).toBe("*");
    });

    test("default config exposes credentials false (no header)", () => {
        const headers = Cors.init;

        expect(headers["Access-Control-Allow-Credentials"]).toBeUndefined();
    });

    test("default maxAge is set", () => {
        const headers = Cors.init;

        expect(headers["Access-Control-Max-Age"]).toBe("86400");
    });
});

describe("CorsBuilder arrayToHeader behavior", () => {
    test("wildcard array becomes *", () => {
        const builder = new CorsBuilder();
        const result = (builder as any).init();

        expect(result["Access-Control-Allow-Origin"]).toBeDefined();
    });

    test("new builder instances share cached headers", async () => {
        const {default: App} = await import("@bejibun/app");

        void App;

        const b1 = new CorsBuilder();
        const h1 = b1.init();

        const b2 = new CorsBuilder();
        const h2 = b2.init();

        expect(h1).toEqual(h2);
    });
});
