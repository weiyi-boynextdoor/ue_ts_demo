import * as UE from 'ue';
import { JsClass } from '../JsClass';
import * as utils from '../utils';

export class BP_Actor extends JsClass {
    actor: WeakRef<UE.Game.Blueprints.BP_Actor.BP_Actor_C>;
    Init(Object: UE.Object) {
        const bp_actor = Object as UE.Game.Blueprints.BP_Actor.BP_Actor_C;
        this.actor = new WeakRef(bp_actor);
        bp_actor.OnFirstTick.Add(() => {
            utils.printString(this.actor.deref(), "BP_Actor mixin success!!!!!");
        });
    }
}