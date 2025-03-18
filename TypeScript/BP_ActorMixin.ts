import * as UE from 'ue'
import {argv, blueprint} from 'puerts';

let BP = UE.Class.Load('/Game/Blueprints/BP_Actor.BP_Actor_C');

const BP_Mixin = blueprint.tojs<typeof UE.Game.Blueprints.BP_Actor.BP_Actor_C>(BP);

interface BPExt extends UE.Game.Blueprints.BP_Actor.BP_Actor_C {};

class BPExt {
    ReceiveBeginPlay() {
        console.log("BP_Actor ReceiveBeginPlay from ts");
    }
}

blueprint.mixin(BP_Mixin, BPExt);
