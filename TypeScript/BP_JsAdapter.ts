import * as UE from 'ue';
import {blueprint} from 'puerts';
import { G } from './G';
import { JsClass } from './JsClass';

let BP = UE.Class.Load('/Game/Blueprints/BP_JsAdapter.BP_JsAdapter_C');

const BP_Mixin = blueprint.tojs<typeof UE.Game.Blueprints.BP_JsAdapter.BP_JsAdapter_C>(BP);

interface BPExt extends UE.Game.Blueprints.BP_JsAdapter.BP_JsAdapter_C {};

class BPExt {
    Init(Object: UE.Object) {
        UE.KismetSystemLibrary.PrintString(Object, `BP_JsAdapter init!!!!!`);
        if (G.registeredClasses.has(this.JsClassName)) {
            let jsClass = G.registeredClasses.get(this.JsClassName);
            const jsInstance = new jsClass();
            jsInstance.Init(Object);
        } else {
            try {
                const jsClass = require(this.JsFilePath)[this.JsClassName] as typeof JsClass;
                G.registeredClasses.set(this.JsClassName, jsClass);
                const jsInstance = new jsClass();
                jsInstance.Init(Object);
            } catch (e) {
                console.error(`Failed to load JS class ${this.JsClassName} from ${this.JsFilePath}:`, e);
            }            
        }
    }
}

blueprint.mixin(BP_Mixin, BPExt, {objectTakeByNative: true});
