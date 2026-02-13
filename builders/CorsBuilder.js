import App from "@bejibun/app";
import fs from "fs";
export default class CorsBuilder {
    config;
    constructor() {
        const configPath = App.Path.configPath("cors.ts");
        if (fs.existsSync(configPath))
            this.config = require(configPath).default;
        else
            this.config = require("../config/cors").default;
    }
    init() {
        const headers = {
            "Access-Control-Allow-Origin": this.config.origin,
            "Access-Control-Allow-Headers": Array.isArray(this.config.allowedHeaders) ?
                (this.config.allowedHeaders.includes("*") ? "*" : this.config.allowedHeaders.join(", ")) :
                (this.config.allowedHeaders === "*" ? "*" : this.config.allowedHeaders),
            "Access-Control-Allow-Methods": Array.isArray(this.config.methods) ?
                (this.config.methods.includes("*") ? "*" : this.config.methods.join(", ")) :
                (this.config.methods === "*" ? "*" : this.config.methods)
        };
        if (this.config.exposedHeaders.length > 0)
            headers["Access-Control-Expose-Headers"] = this.config.exposedHeaders.join(", ");
        if (this.config.credentials)
            headers["Access-Control-Allow-Credentials"] = "true";
        if (this.config.maxAge)
            headers["Access-Control-Max-Age"] = this.config.maxAge.toString();
        return headers;
    }
}
