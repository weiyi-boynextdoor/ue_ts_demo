"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BP_ThirdPersonCharacter = void 0;
const UE = require("ue");
const JsClass_1 = require("../JsClass");
class BP_ThirdPersonCharacter extends JsClass_1.JsClass {
    character;
    Init(Object) {
        const bp_character = Object;
        this.character = bp_character;
        const controller = bp_character.GetController();
        if (controller instanceof UE.PlayerController) {
            UE.SubsystemBlueprintLibrary.GetLocalPlayerSubSystemFromPlayerController(controller, UE.EnhancedInputLocalPlayerSubsystem.StaticClass()).AddMappingContext(bp_character.DefaultMappingContext, 0);
        }
        bp_character.EventLook.Add(this.OnEventLook.bind(this));
        bp_character.EventMove.Add(this.OnEventMove.bind(this));
        bp_character.EventBeginJump.Add(this.OnEventBeginJump.bind(this));
        bp_character.EventEndJump.Add(this.OnEventEndJump.bind(this));
    }
    OnEventLook(x, y) {
        this.character.AddControllerYawInput(x);
        this.character.AddControllerPitchInput(y);
    }
    OnEventMove(x, y) {
        // Rotator(pitch, yaw, roll)
        const rotation = this.character.GetControlRotation();
        const right = UE.KismetMathLibrary.GetRightVector(new UE.Rotator(0, rotation.Yaw, rotation.Roll));
        this.character.AddMovementInput(right, x);
        const forward = UE.KismetMathLibrary.GetForwardVector(new UE.Rotator(0, rotation.Yaw, 0));
        this.character.AddMovementInput(forward, y);
    }
    OnEventBeginJump() {
        this.character.Jump();
    }
    OnEventEndJump() {
        this.character.StopJumping();
    }
}
exports.BP_ThirdPersonCharacter = BP_ThirdPersonCharacter;
//# sourceMappingURL=BP_ThirdPersonCharacter.js.map