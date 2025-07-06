import * as UE from 'ue';
import { JsClass } from '../JsClass';

export class WBP_MainUI extends JsClass {
    ui: WeakRef<UE.Game.ThirdPerson.UI.WBP_MainUI.WBP_MainUI_C>;

    Init(Object: UE.Object) {
        const bp_ui = Object as UE.Game.ThirdPerson.UI.WBP_MainUI.WBP_MainUI_C;
        this.ui = new WeakRef(bp_ui);
        bp_ui.Button_0.OnClicked.Add(this.OnButtonClicked.bind(this));
    }

    OnConstruct() {
        console.log("WBP_MainUI Construct from ts");
    }

    OnButtonClicked() {
        UE.KismetSystemLibrary.CollectGarbage();
        UE.GameplayStatics.OpenLevel(this.ui.deref().GetWorld(), '/Game/ThirdPerson/Maps/ThirdPersonMap');
    }
}