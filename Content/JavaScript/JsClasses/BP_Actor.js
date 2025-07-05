"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BP_Actor = void 0;
const JsClass_1 = require("../JsClass");
const utils = require("../utils");
class BP_Actor extends JsClass_1.JsClass {
    Init(Object) {
        const bp_actor = Object;
        bp_actor.OnFirstTick.Add(() => {
            utils.printString(bp_actor, "BP_Actor mixin success!!!!!");
        });
    }
}
exports.BP_Actor = BP_Actor;
//# sourceMappingURL=BP_Actor.js.map