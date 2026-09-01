/**
 * Shape of the CORS response headers produced by CorsBuilder.
 */
export type CorsHeader = {
    /** Allowed origin for the response. */
    "Access-Control-Allow-Origin": string;

    /** Allowed request headers. */
    "Access-Control-Allow-Headers": string;

    /** Allowed HTTP methods. */
    "Access-Control-Allow-Methods": string;

    /** Headers exposed to the client. */
    "Access-Control-Expose-Headers"?: string;

    /** Whether credentials are allowed. */
    "Access-Control-Allow-Credentials"?: string;

    /** How long the preflight response is cached (seconds). */
    "Access-Control-Max-Age"?: string;
};
