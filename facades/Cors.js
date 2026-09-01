import CorsBuilder from "../builders/CorsBuilder";
/** Lazily cached CORS builder instance. */
let builder = null;
/**
 * Facade that exposes the CORS headers via a static getter.
 */
export default class Cors {
    /**
     * Returns the CORS response headers, computing them once and reusing the result.
     *
     * @returns {CorsHeader} CORS headers built from the configuration.
     */
    static get init() {
        if (!builder)
            builder = new CorsBuilder();
        return builder.init();
    }
}
