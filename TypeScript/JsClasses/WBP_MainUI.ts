import * as UE from 'ue';
import { JsClass } from '../JsClass';

export class WBP_MainUI extends JsClass {
    ui: UE.Game.ThirdPerson.UI.WBP_MainUI.WBP_MainUI_C;

    Init(Object: UE.Object) {
        const bp_ui = Object as UE.Game.ThirdPerson.UI.WBP_MainUI.WBP_MainUI_C;
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