import * as UE from 'ue'
import {argv, blueprint, $ref} from 'puerts';

let BP = UE.Class.Load('/Game/Blueprints/BP_Actor.BP_Actor_C');

const BP_Mixin = blueprint.tojs<typeof UE.Game.Blueprints.BP_Actor.BP_Actor_C>(BP);

interface BPExt extends UE.Game.Blueprints.BP_Actor.BP_Actor_C {};

class BPExt {
    FirstTick() {
        const BP_cls = UE.Class.Load('/Game/ThirdPerson/UI/WBP_DebugInfo.WBP_DebugInfo_C');
        let widgets = UE.NewArray(blueprint.tojs<typeof UE.Game.ThirdPerson.UI.WBP_DebugInfo.WBP_DebugInfo_C>(BP_cls));
        UE.WidgetBlueprintLibrary.GetAllWidgetsOfClass(this, $ref(widgets), BP_cls);
        for (let i = 0; i < widgets.Num(); i++) {
            let widget = widgets.Get(i);
            widget.PrintString("BP_Actor mixin success!!!!!");
        }
    }
}

blueprint.mixin(BP_Mixin, BPExt);
