"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printString = printString;
const UE = require("ue");
const puerts_1 = require("puerts");
function printString(context, str) {
    const BP_cls = UE.Class.Load('/Game/ThirdPerson/UI/WBP_DebugInfo.WBP_DebugInfo_C');
    let widgets = UE.NewArray(puerts_1.blueprint.tojs(BP_cls));
    UE.WidgetBlueprintLibrary.GetAllWidgetsOfClass(context, (0, puerts_1.$ref)(widgets), BP_cls);
    for (let i = 0; i < widgets.Num(); i++) {
        let widget = widgets.Get(i);
        widget.PrintString("BP_Actor mixin success!!!!!");
    }
}
//# sourceMappingURL=utils.js.map