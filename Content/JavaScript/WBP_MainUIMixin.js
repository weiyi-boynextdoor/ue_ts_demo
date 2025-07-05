"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UE = require("ue");
const puerts_1 = require("puerts");
let WBP_MainUI = UE.Class.Load('/Game/ThirdPerson/UI/WBP_MainUI.WBP_MainUI_C');
const MainUIMixin = puerts_1.blueprint.tojs(WBP_MainUI);
;
class MainUIExt {
    Construct() {
        console.log("WBP_MainUI Construct from ts");
    }
    BndEvt__WBP_MainUI_Button_0_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature() {
        UE.KismetSystemLibrary.CollectGarbage();
        UE.GameplayStatics.OpenLevel(this.GetWorld(), '/Game/ThirdPerson/Maps/ThirdPersonMap');
    }
}
puerts_1.blueprint.mixin(MainUIMixin, MainUIExt);
//# sourceMappingURL=WBP_MainUIMixin.js.map