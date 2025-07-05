
import { JsClass } from "./JsClass";

class Global {
    registeredClasses: Map<string, typeof JsClass>;

    constructor() {
        this.registeredClasses = new Map<string, typeof JsClass>();
    }
}

export const G = new Global();