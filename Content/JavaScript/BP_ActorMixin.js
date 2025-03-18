"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UE = require("ue");
const puerts_1 = require("puerts");
let BP = UE.Class.Load('/Game/Blueprints/BP_Actor.BP_Actor_C');
const BP_Mixin = puerts_1.blueprint.tojs(BP);
;
class BPExt {
    ReceiveBeginPlay() {
        console.log("BP_Actor ReceiveBeginPlay from ts");
    }
}
puerts_1.blueprint.mixin(BP_Mixin, BPExt);
//# sourceMappingURL=BP_ActorMixin.js.map