import type { CorsHeader } from "../types/cors";
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
    private static loadedConfig;
    /**
     * Loads the CORS configuration once, falling back to defaults.
     */
    constructor();
    /**
     * Builds the CORS response headers, computing them only on the first call.
     * @returns {CorsHeader} CORS headers mapped from the configuration.
     */
    init(): CorsHeader;
}
