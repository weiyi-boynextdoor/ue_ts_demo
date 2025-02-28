import * as UE from 'ue'
import {argv, blueprint} from 'puerts';

let WBP_MainMenu = UE.Class.Load('/Game/ThirdPerson/UI/WBP_MainMenu.WBP_MainMenu_C');

const MainMenuMixin = blueprint.tojs<typeof UE.Game.ThirdPerson.UI.WBP_MainMenu.WBP_MainMenu_C>(WBP_MainMenu);

interface MainMenuExt extends UE.Game.ThirdPerson.UI.WBP_MainMenu.WBP_MainMenu_C {};

class MainMenuExt {
    Construct() {
        console.log("WBP_MainMenu Construct from ts");
    }

    BndEvt__WBP_MainMenu_HostBtn_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature() {
        console.log("HostBtn Clicked from ts");
        (UE.GameplayStatics.GetGameMode(this.GetWorld()) as UE.MainMenuGameMode).HostServer('/Game/ThirdPerson/Maps/ThirdPersonMap', 7777);
    }

    BndEvt__WBP_MainMenu_JoinBtn_K2Node_ComponentBoundEvent_1_OnButtonClickedEvent__DelegateSignature() {
        console.log("JoinBtn Clicked from ts");
        let url = this.UrlInput.GetText();
        (UE.GameplayStatics.GetGameMode(this.GetWorld()) as UE.MainMenuGameMode).JoinServer(url);
    }
}

blueprint.mixin(MainMenuMixin, MainMenuExt);
