"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UE = require("ue");
const puerts_1 = require("puerts");
const utils = require("./utils");
let BP = UE.Class.Load('/Game/Blueprints/BP_Actor.BP_Actor_C');
const BP_Mixin = puerts_1.blueprint.tojs(BP);
;
class BPExt {
    FirstTick() {
        utils.printString(this, "BP_Actor mixin success!!!!!");
    }
}
puerts_1.blueprint.mixin(BP_Mixin, BPExt);
//# sourceMappingURL=BP_ActorMixin.js.map