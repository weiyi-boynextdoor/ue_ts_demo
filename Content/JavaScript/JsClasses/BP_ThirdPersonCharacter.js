"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BP_ThirdPersonCharacter = void 0;
const UE = require("ue");
const JsClass_1 = require("../JsClass");
class BP_ThirdPersonCharacter extends JsClass_1.JsClass {
    character;
    Init(Object) {
        const bp_character = Object;
        this.character = new WeakRef(bp_character);
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
        const character = this.character.deref();
        character.AddControllerYawInput(x);
        character.AddControllerPitchInput(y);
    }
    OnEventMove(x, y) {
        const character = this.character.deref();
        // Rotator(pitch, yaw, roll)
        const rotation = character.GetControlRotation();
        const right = UE.KismetMathLibrary.GetRightVector(new UE.Rotator(0, rotation.Yaw, rotation.Roll));
        character.AddMovementInput(right, x);
        const forward = UE.KismetMathLibrary.GetForwardVector(new UE.Rotator(0, rotation.Yaw, 0));
        character.AddMovementInput(forward, y);
    }
    OnEventBeginJump() {
        const character = this.character.deref();
        character.Jump();
    }
    OnEventEndJump() {
        const character = this.character.deref();
        character.StopJumping();
    }
}
exports.BP_ThirdPersonCharacter = BP_ThirdPersonCharacter;
//# sourceMappingURL=BP_ThirdPersonCharacter.js.map