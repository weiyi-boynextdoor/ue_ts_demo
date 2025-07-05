import * as UE from 'ue'
import {argv, blueprint} from 'puerts';

let WBP_MainUI = UE.Class.Load('/Game/ThirdPerson/UI/WBP_MainUI.WBP_MainUI_C');

const MainUIMixin = blueprint.tojs<typeof UE.Game.ThirdPerson.UI.WBP_MainUI.WBP_MainUI_C>(WBP_MainUI);

interface MainUIExt extends UE.Game.ThirdPerson.UI.WBP_MainUI.WBP_MainUI_C {};

class MainUIExt {
    Construct() {
        console.log("WBP_MainUI Construct from ts");
    }

    BndEvt__WBP_MainUI_Button_0_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature() {
        UE.KismetSystemLibrary.CollectGarbage();
        UE.GameplayStatics.OpenLevel(this.GetWorld(), '/Game/ThirdPerson/Maps/ThirdPersonMap');
    }
}

blueprint.mixin(MainUIMixin, MainUIExt);
