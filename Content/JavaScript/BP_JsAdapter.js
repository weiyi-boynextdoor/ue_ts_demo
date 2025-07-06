"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UE = require("ue");
const puerts_1 = require("puerts");
const G_1 = require("./G");
let BP = UE.Class.Load('/Game/Blueprints/BP_JsAdapter.BP_JsAdapter_C');
const BP_Mixin = puerts_1.blueprint.tojs(BP);
;
class BPExt {
    Init(Object) {
        if (G_1.G.registeredClasses.has(this.JsClassName)) {
            let jsClass = G_1.G.registeredClasses.get(this.JsClassName);
            const jsInstance = new jsClass();
            jsInstance.Init(Object);
        }
        else {
            try {
                const jsClass = require(this.JsFilePath)[this.JsClassName];
                G_1.G.registeredClasses.set(this.JsClassName, jsClass);
                const jsInstance = new jsClass();
                jsInstance.Init(Object);
            }
            catch (e) {
                console.error(`Failed to load JS class ${this.JsClassName} from ${this.JsFilePath}:`, e);
            }
        }
    }
}
puerts_1.blueprint.mixin(BP_Mixin, BPExt, { objectTakeByNative: true });
//# sourceMappingURL=BP_JsAdapter.js.map