"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WBP_MainUI = void 0;
const UE = require("ue");
const JsClass_1 = require("../JsClass");
class WBP_MainUI extends JsClass_1.JsClass {
    ui;
    Init(Object) {
        const bp_ui = Object;
        this.ui = bp_ui;
        this.ui.Button_0.OnClicked.Add(this.OnButtonClicked.bind(this));
    }
    OnConstruct() {
        console.log("WBP_MainUI Construct from ts");
    }
    OnButtonClicked() {
        UE.KismetSystemLibrary.CollectGarbage();
        UE.GameplayStatics.OpenLevel(this.ui.GetWorld(), '/Game/ThirdPerson/Maps/ThirdPersonMap');
    }
}
exports.WBP_MainUI = WBP_MainUI;
//# sourceMappingURL=WBP_MainUI.js.map