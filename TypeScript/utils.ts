import * as UE from 'ue'
import {argv, blueprint, $ref} from 'puerts';

export function printString(context: UE.Object, str: string) {
    const BP_cls = UE.Class.Load('/Game/ThirdPerson/UI/WBP_DebugInfo.WBP_DebugInfo_C');
    let widgets = UE.NewArray(blueprint.tojs<typeof UE.Game.ThirdPerson.UI.WBP_DebugInfo.WBP_DebugInfo_C>(BP_cls));
    UE.WidgetBlueprintLibrary.GetAllWidgetsOfClass(context, $ref(widgets), BP_cls);
    for (let i = 0; i < widgets.Num(); i++) {
        let widget = widgets.Get(i);
        widget.PrintString("BP_Actor mixin success!!!!!");
    }
}