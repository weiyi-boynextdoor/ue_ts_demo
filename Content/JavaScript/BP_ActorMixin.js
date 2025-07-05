"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UE = require("ue");
const puerts_1 = require("puerts");
let BP = UE.Class.Load('/Game/Blueprints/BP_Actor.BP_Actor_C');
const BP_Mixin = puerts_1.blueprint.tojs(BP);
;
class BPExt {
    FirstTick() {
        const BP_cls = UE.Class.Load('/Game/ThirdPerson/UI/WBP_DebugInfo.WBP_DebugInfo_C');
        let widgets = UE.NewArray(puerts_1.blueprint.tojs(BP_cls));
        UE.WidgetBlueprintLibrary.GetAllWidgetsOfClass(this, (0, puerts_1.$ref)(widgets), BP_cls);
        for (let i = 0; i < widgets.Num(); i++) {
            let widget = widgets.Get(i);
            widget.PrintString("BP_Actor mixin success!!!!!");
        }
    }
}
puerts_1.blueprint.mixin(BP_Mixin, BPExt);
//# sourceMappingURL=BP_ActorMixin.js.map