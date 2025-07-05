import * as UE from 'ue';
import { JsClass } from '../JsClass';
import * as utils from '../utils';

export class BP_Actor extends JsClass {
    Init(Object: UE.Object) {
        const bp_actor = Object as UE.Game.Blueprints.BP_Actor.BP_Actor_C;
        bp_actor.OnFirstTick.Add(() => {
            utils.printString(bp_actor, "BP_Actor mixin success!!!!!");
        });
    }
}