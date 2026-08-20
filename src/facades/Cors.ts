import type {CorsHeader} from "@/builders/CorsBuilder";
import CorsBuilder from "@/builders/CorsBuilder";

export type {CorsHeader};

export default class Cors {
    public static get init(): CorsHeader {
        return new CorsBuilder().init();
    }
}
