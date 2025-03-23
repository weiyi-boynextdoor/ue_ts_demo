import * as UE from "ue";
import { blueprint} from "puerts";

let BP = UE.Class.Load("/Game/ThirdPerson/Blueprints/BP_ThirdPersonCharacter.BP_ThirdPersonCharacter_C");

const BP_Mixin = blueprint.tojs<typeof UE.Game.ThirdPerson.Blueprints.BP_ThirdPersonCharacter.BP_ThirdPersonCharacter_C>(BP);

interface BPExt extends UE.Game.ThirdPerson.Blueprints.BP_ThirdPersonCharacter.BP_ThirdPersonCharacter_C {};

class BPExt {
    ReceiveBeginPlay() {
        const controller = this.GetController();
        if (controller instanceof UE.PlayerController) {
            (UE.SubsystemBlueprintLibrary.GetLocalPlayerSubSystemFromPlayerController(controller, UE.EnhancedInputLocalPlayerSubsystem.StaticClass()) as UE.EnhancedInputLocalPlayerSubsystem).AddMappingContext(this.DefaultMappingContext, 0);
        }
        this.EventLook.Add(this.OnEventLook.bind(this));
        this.EventMove.Add(this.OnEventMove.bind(this));
        this.EventBeginJump.Add(this.OnEventBeginJump.bind(this));
        this.EventEndJump.Add(this.OnEventEndJump.bind(this));
        this.EventAttack.Add(this.OnEventAttack.bind(this));
    }

    OnEventLook(x: number, y: number) {
        this.AddControllerYawInput(x);
        this.AddControllerPitchInput(y);
    }

    OnEventMove(x: number, y: number) {
        // Rotator(pitch, yaw, roll)
        const rotation = this.GetControlRotation();
        const right = UE.KismetMathLibrary.GetRightVector(new UE.Rotator(0, rotation.Yaw, rotation.Roll));
        this.AddMovementInput(right, x);
        const forward = UE.KismetMathLibrary.GetForwardVector(new UE.Rotator(0, rotation.Yaw, 0));
        this.AddMovementInput(forward, y);
    }

    OnEventBeginJump() {
        this.Jump();
    }

    OnEventEndJump() {
        this.StopJumping();
    }

    OnEventAttack() {
        const montage = UE.AnimMontage.Load("/Game/Characters/Mannequins/Animations/AM_Kick.AM_Kick");
        this.PlayAnimMontage(montage);
    }
}

blueprint.mixin(BP_Mixin, BPExt);
