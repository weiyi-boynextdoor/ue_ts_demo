import * as UE from 'ue';
import { JsClass } from '../JsClass';

export class BP_ThirdPersonCharacter extends JsClass{
    character: WeakRef<UE.Game.ThirdPerson.Blueprints.BP_ThirdPersonCharacter.BP_ThirdPersonCharacter_C>;
    Init(Object: UE.Object) {
        const bp_character = Object as UE.Game.ThirdPerson.Blueprints.BP_ThirdPersonCharacter.BP_ThirdPersonCharacter_C;
        this.character = new WeakRef(bp_character);
        const controller = bp_character.GetController();
        if (controller instanceof UE.PlayerController) {
            (UE.SubsystemBlueprintLibrary.GetLocalPlayerSubSystemFromPlayerController(controller, UE.EnhancedInputLocalPlayerSubsystem.StaticClass()) as UE.EnhancedInputLocalPlayerSubsystem).AddMappingContext(bp_character.DefaultMappingContext, 0);
        }
        bp_character.EventLook.Add(this.OnEventLook.bind(this));
        bp_character.EventMove.Add(this.OnEventMove.bind(this));
        bp_character.EventBeginJump.Add(this.OnEventBeginJump.bind(this));
        bp_character.EventEndJump.Add(this.OnEventEndJump.bind(this));
    }

    OnEventLook(x: number, y: number) {
        const character = this.character.deref();
        character.AddControllerYawInput(x);
        character.AddControllerPitchInput(y);
    }

    OnEventMove(x: number, y: number) {
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