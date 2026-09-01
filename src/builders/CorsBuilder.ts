import type {CorsHeader} from "@/types/cors";
import App from "@bejibun/app";

/**
 * Builds CORS response headers from the application configuration.
 *
 * The configuration file is loaded once and cached; subsequent calls reuse
 * the computed headers instead of re-reading the filesystem.
 */
export default class CorsBuilder {
    /** Loaded CORS configuration. */
    protected config: any;

    /** Computed CORS headers, cached after the first init call. */
    protected headers?: CorsHeader;

    /** Lazily loaded singleton configuration. */
    private static loadedConfig: any;

    /**
     * Loads the CORS configuration once, falling back to defaults.
     */
    public constructor() {
        if (!CorsBuilder.loadedConfig) {
            try {
                CorsBuilder.loadedConfig = require(App.Path.configPath("cors.ts")).default;
            } catch {
                CorsBuilder.loadedConfig = require("@/config/cors").default;
            }
        }

        this.config = CorsBuilder.loadedConfig;
    }

    /**
     * Builds the CORS response headers, computing them only on the first call.
     * @returns {CorsHeader} CORS headers mapped from the configuration.
     */
    public init(): CorsHeader {
        if (this.headers) return this.headers;

        const headers: CorsHeader = {
            "Access-Control-Allow-Origin": this.config.origin,

            "Access-Control-Allow-Headers": arrayToHeader(this.config.allowedHeaders),

            "Access-Control-Allow-Methods": arrayToHeader(this.config.methods)
        };

        if (Array.isArray(this.config.exposedHeaders) && this.config.exposedHeaders.length > 0)
            headers["Access-Control-Expose-Headers"] = this.config.exposedHeaders.join(", ");

        if (this.config.credentials) headers["Access-Control-Allow-Credentials"] = "true";

        if (this.config.maxAge) headers["Access-Control-Max-Age"] = this.config.maxAge.toString();

        this.headers = headers;

        return this.headers;
    }
}

/**
 * Normalizes an array or wildcard value into a header string.
 *
 * @param {string | Array<string>} value - Header value, either an array or a string.
 * @returns {string} Comma-joined header value, or "*" for a wildcard.
 */
function arrayToHeader(value: string | Array<string>): string {
    if (Array.isArray(value)) return value.includes("*") ? "*" : value.join(", ");

    return value === "*" ? "*" : value;
}
