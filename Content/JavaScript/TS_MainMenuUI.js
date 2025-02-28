"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UE = require("ue");
const puerts_1 = require("puerts");
let WBP_MainMenu = UE.Class.Load('/Game/ThirdPerson/UI/WBP_MainMenu.WBP_MainMenu_C');
const MainMenuMixin = puerts_1.blueprint.tojs(WBP_MainMenu);
;
class MainMenuExt {
    Construct() {
        console.log("WBP_MainMenu Construct from ts");
    }
    BndEvt__WBP_MainMenu_HostBtn_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature() {
        console.log("HostBtn Clicked from ts");
        UE.GameplayStatics.GetGameMode(this.GetWorld()).HostServer('/Game/ThirdPerson/Maps/ThirdPersonMap', 7777);
    }
    BndEvt__WBP_MainMenu_JoinBtn_K2Node_ComponentBoundEvent_1_OnButtonClickedEvent__DelegateSignature() {
        console.log("JoinBtn Clicked from ts");
        let url = this.UrlInput.GetText();
        UE.GameplayStatics.GetGameMode(this.GetWorld()).JoinServer(url);
    }
}
puerts_1.blueprint.mixin(MainMenuMixin, MainMenuExt);
//# sourceMappingURL=TS_MainMenuUI.js.map