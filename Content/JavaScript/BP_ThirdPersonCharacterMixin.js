"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UE = require("ue");
const puerts_1 = require("puerts");
let BP = UE.Class.Load("/Game/ThirdPerson/Blueprints/BP_ThirdPersonCharacter.BP_ThirdPersonCharacter_C");
const BP_Mixin = puerts_1.blueprint.tojs(BP);
;
class BPExt {
    ReceiveBeginPlay() {
        const controller = this.GetController();
        if (controller instanceof UE.PlayerController) {
            UE.SubsystemBlueprintLibrary.GetLocalPlayerSubSystemFromPlayerController(controller, UE.EnhancedInputLocalPlayerSubsystem.StaticClass()).AddMappingContext(this.DefaultMappingContext, 0);
        }
        this.EventLook.Add(this.OnEventLook.bind(this));
        this.EventMove.Add(this.OnEventMove.bind(this));
        this.EventBeginJump.Add(this.OnEventBeginJump.bind(this));
        this.EventEndJump.Add(this.OnEventEndJump.bind(this));
        // this.EventAttack.Add(this.OnEventAttack.bind(this));
    }
    OnEventLook(x, y) {
        this.AddControllerYawInput(x);
        this.AddControllerPitchInput(y);
    }
    OnEventMove(x, y) {
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
}
puerts_1.blueprint.mixin(BP_Mixin, BPExt);
//# sourceMappingURL=BP_ThirdPersonCharacterMixin.js.map