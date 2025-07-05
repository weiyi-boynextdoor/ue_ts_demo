import * as UE from 'ue'
import {argv, blueprint, $ref} from 'puerts';
import * as utils from './utils';

let BP = UE.Class.Load('/Game/Blueprints/BP_Actor.BP_Actor_C');

const BP_Mixin = blueprint.tojs<typeof UE.Game.Blueprints.BP_Actor.BP_Actor_C>(BP);

interface BPExt extends UE.Game.Blueprints.BP_Actor.BP_Actor_C {};

class BPExt {
    FirstTick() {
        utils.printString(this, "BP_Actor mixin success!!!!!");
    }
}

blueprint.mixin(BP_Mixin, BPExt);
