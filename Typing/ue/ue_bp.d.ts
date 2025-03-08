/// <reference path="puerts.d.ts" />
declare module "ue" {
    import {$Ref, $Nullable} from "puerts"

    import * as cpp from "cpp"

    import * as UE from "ue"

// __TYPE_DECL_START: 211F243F44C9706398935698783676E5
    namespace Game.ThirdPerson.Blueprints.BP_ThirdPersonCharacter {
        class BP_ThirdPersonCharacter_C extends UE.TPSMPCharacter {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BP_ThirdPersonCharacter_C;
            static Load(InName: string): BP_ThirdPersonCharacter_C;
        
            __tid_BP_ThirdPersonCharacter_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: B99BB975420C8B78514B06896D1F06BD
    namespace Game.ThirdPerson.Blueprints.GM_MainMenu {
        class GM_MainMenu_C extends UE.MainMenuGameMode {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            DefaultSceneRoot: UE.SceneComponent;
            MainMenuUI: UE.WidgetBlueprint;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): GM_MainMenu_C;
            static Load(InName: string): GM_MainMenu_C;
        
            __tid_GM_MainMenu_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: B822F6314FFD812FBCEF7BA8C02CB249
    namespace Game.ThirdPerson.UI.WBP_MainMenu {
        class WBP_MainMenu_C extends UE.UserWidget {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            HostBtn: UE.Button;
            JoinBtn: UE.Button;
            UrlInput: UE.EditableText;
            BndEvt__WBP_MainMenu_HostBtn_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature() : void;
            BndEvt__WBP_MainMenu_JoinBtn_K2Node_ComponentBoundEvent_1_OnButtonClickedEvent__DelegateSignature() : void;
            ExecuteUbergraph_WBP_MainMenu(EntryPoint: number) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): WBP_MainMenu_C;
            static Load(InName: string): WBP_MainMenu_C;
        
            __tid_WBP_MainMenu_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 7B7D15D645E3A2E94B557BBACCFA9D39
    namespace Game.Characters.Mannequins.Animations.ABP_Manny {
        class AnimBlueprintGeneratedMutableData extends UE.AnimBlueprintMutableData {
            constructor();
            constructor(__FloatProperty: number);
            __FloatProperty: number;
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_AnimBlueprintGeneratedMutableData_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 7B7D15D645E3A2E94B557BBACCFA9D39
    namespace Game.Characters.Mannequins.Animations.ABP_Manny {
        class ABP_Manny_C extends UE.AnimInstance {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            __AnimBlueprintMutables: UE.Game.Characters.Mannequins.Animations.ABP_Manny.AnimBlueprintGeneratedMutableData;
            AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystemInstance;
            AnimBlueprintExtension_Base: UE.AnimSubsystemInstance;
            AnimGraphNode_Root: UE.AnimNode_Root;
            AnimGraphNode_TransitionResult_7: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_6: UE.AnimNode_TransitionResult;
            AnimGraphNode_BlendSpacePlayer: UE.AnimNode_BlendSpacePlayer;
            AnimGraphNode_StateResult_5: UE.AnimNode_StateResult;
            AnimGraphNode_SequencePlayer_3: UE.AnimNode_SequencePlayer;
            AnimGraphNode_StateResult_4: UE.AnimNode_StateResult;
            AnimGraphNode_StateMachine_1: UE.AnimNode_StateMachine;
            AnimGraphNode_SaveCachedPose: UE.AnimNode_SaveCachedPose;
            AnimGraphNode_TransitionResult_5: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_4: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_3: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_2: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_1: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult: UE.AnimNode_TransitionResult;
            AnimGraphNode_ApplyAdditive: UE.AnimNode_ApplyAdditive;
            AnimGraphNode_UseCachedPose_1: UE.AnimNode_UseCachedPose;
            AnimGraphNode_SequencePlayer_2: UE.AnimNode_SequencePlayer;
            AnimGraphNode_StateResult_3: UE.AnimNode_StateResult;
            AnimGraphNode_SequencePlayer_1: UE.AnimNode_SequencePlayer;
            AnimGraphNode_StateResult_2: UE.AnimNode_StateResult;
            AnimGraphNode_SequencePlayer: UE.AnimNode_SequencePlayer;
            AnimGraphNode_StateResult_1: UE.AnimNode_StateResult;
            AnimGraphNode_UseCachedPose: UE.AnimNode_UseCachedPose;
            AnimGraphNode_StateResult: UE.AnimNode_StateResult;
            AnimGraphNode_StateMachine: UE.AnimNode_StateMachine;
            AnimGraphNode_Slot: UE.AnimNode_Slot;
            AnimGraphNode_ControlRig: UE.AnimNode_ControlRig;
            __CustomProperty_ShouldDoIKTrace_385011E94C94F6DE70691192D3E0622C: boolean;
            Character: UE.Character;
            MovementComponent: UE.CharacterMovementComponent;
            Velocity: UE.Vector;
            GroundSpeed: number;
            ShouldMove: boolean;
            IsFalling: boolean;
            AnimGraph(AnimGraph: $Ref<UE.PoseLink>) : void;
            /*
             *Executed when the Animation is initialized
             */
            BlueprintInitializeAnimation() : void;
            /*
             *Executed when the Animation is updated
             */
            BlueprintUpdateAnimation(DeltaTimeX: number) : void;
            EvaluateGraphExposedInputs_ExecuteUbergraph_ABP_Manny_AnimGraphNode_TransitionResult_305F37BB4A5AD886760B8E99A5C561E1() : void;
            ExecuteUbergraph_ABP_Manny(EntryPoint: number) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ABP_Manny_C;
            static Load(InName: string): ABP_Manny_C;
        
            __tid_ABP_Manny_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 7B7D15D645E3A2E94B557BBACCFA9D39
    namespace Game.Characters.Mannequins.Animations.ABP_Manny {
        class AnimBlueprintGeneratedConstantData extends UE.AnimBlueprintConstantData {
            constructor();
            constructor(__NameProperty_154: string, __NameProperty_155: string, __NameProperty_156: string, __NameProperty_157: string, __IntProperty_158: number, __FloatProperty_159: number, __NameProperty_160: string, __IntProperty_161: number, __BoolProperty_162: boolean, __FloatProperty_163: number, __StructProperty_164: UE.InputScaleBiasClampConstants, __FloatProperty_165: number, __BoolProperty_166: boolean, __EnumProperty_167: UE.EAnimSyncMethod, __ByteProperty_168: UE.EAnimGroupRole, __NameProperty_169: string, __NameProperty_170: string, __IntProperty_171: number, __NameProperty_172: string, __NameProperty_173: string, __IntProperty_174: number, __StructProperty_175: UE.AnimNodeFunctionRef, AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystem_PropertyAccess, AnimBlueprintExtension_Base: UE.AnimSubsystem_Base, AnimGraphNode_Root: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_TransitionResult_7: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_TransitionResult_6: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_BlendSpacePlayer: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_StateResult_5: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_SequencePlayer_3: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_StateResult_4: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_StateMachine_1: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_SaveCachedPose: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_TransitionResult_5: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_TransitionResult_4: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_TransitionResult_3: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_TransitionResult_2: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_TransitionResult_1: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_TransitionResult: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_ApplyAdditive: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_UseCachedPose_1: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_SequencePlayer_2: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_StateResult_3: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_SequencePlayer_1: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_StateResult_2: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_SequencePlayer: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_StateResult_1: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_UseCachedPose: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_StateResult: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_StateMachine: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_Slot: UE.AnimNodeExposedValueHandler_PropertyAccess, AnimGraphNode_ControlRig: UE.AnimNodeExposedValueHandler_PropertyAccess);
            __NameProperty_154: string;
            __NameProperty_155: string;
            __NameProperty_156: string;
            __NameProperty_157: string;
            __IntProperty_158: number;
            __FloatProperty_159: number;
            __NameProperty_160: string;
            __IntProperty_161: number;
            __BoolProperty_162: boolean;
            __FloatProperty_163: number;
            __StructProperty_164: UE.InputScaleBiasClampConstants;
            __FloatProperty_165: number;
            __BoolProperty_166: boolean;
            __EnumProperty_167: UE.EAnimSyncMethod;
            __ByteProperty_168: UE.EAnimGroupRole;
            __NameProperty_169: string;
            __NameProperty_170: string;
            __IntProperty_171: number;
            __NameProperty_172: string;
            __NameProperty_173: string;
            __IntProperty_174: number;
            __StructProperty_175: UE.AnimNodeFunctionRef;
            AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystem_PropertyAccess;
            AnimBlueprintExtension_Base: UE.AnimSubsystem_Base;
            AnimGraphNode_Root: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_TransitionResult_7: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_TransitionResult_6: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_BlendSpacePlayer: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_StateResult_5: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_SequencePlayer_3: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_StateResult_4: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_StateMachine_1: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_SaveCachedPose: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_TransitionResult_5: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_TransitionResult_4: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_TransitionResult_3: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_TransitionResult_2: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_TransitionResult_1: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_TransitionResult: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_ApplyAdditive: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_UseCachedPose_1: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_SequencePlayer_2: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_StateResult_3: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_SequencePlayer_1: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_StateResult_2: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_SequencePlayer: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_StateResult_1: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_UseCachedPose: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_StateResult: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_StateMachine: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_Slot: UE.AnimNodeExposedValueHandler_PropertyAccess;
            AnimGraphNode_ControlRig: UE.AnimNodeExposedValueHandler_PropertyAccess;
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_AnimBlueprintGeneratedConstantData_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: CEF0A70148D95DDBBC354F85E2B4BB63
    namespace Game.Characters.Mannequins.Animations.ABP_Quinn {
        class ABP_Quinn_C extends UE.Game.Characters.Mannequins.Animations.ABP_Manny.ABP_Manny_C {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ABP_Quinn_C;
            static Load(InName: string): ABP_Quinn_C;
        
            __tid_ABP_Quinn_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: CEF0A70148D95DDBBC354F85E2B4BB63
    namespace Game.Characters.Mannequins.Animations.ABP_Quinn {
        class AnimBlueprintGeneratedConstantData extends UE.Game.Characters.Mannequins.Animations.ABP_Manny.AnimBlueprintGeneratedConstantData {
            constructor();
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_AnimBlueprintGeneratedConstantData_1__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: BCA382AF41A385E6A0A542867C8059AA
    namespace Game.Characters.Mannequins.Rigs.CR_Mannequin_BasicFootIK {
        class CR_Mannequin_BasicFootIK_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ZOffset_L_Target: number;
            ZOffset_R_Target: number;
            ZOffset_L: number;
            ZOffset_R: number;
            ZOffset_Pelvis: number;
            ShouldDoIKTrace: boolean;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): CR_Mannequin_BasicFootIK_C;
            static Load(InName: string): CR_Mannequin_BasicFootIK_C;
        
            __tid_CR_Mannequin_BasicFootIK_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: BCA382AF41A385E6A0A542867C8059AA
    namespace Game.Characters.Mannequins.Rigs.CR_Mannequin_BasicFootIK {
        class RigVMMemory_Literal extends UE.RigVMMemoryStorage {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            LocalVariableDefault__FootTrace_AnimatedFloorLocation__Const: UE.Vector;
            FootTrace_FootTrace_MathVectorAdd_A__Const: UE.Vector;
            FootTrace_FootTrace_GetTransform_Item__Const: UE.RigElementKey;
            FootTrace_FootTrace_GetTransform_Space__Const: UE.ERigVMTransformSpace;
            FootTrace_FootTrace_GetTransform_bInitial__Const: boolean;
            FootTrace_FootTrace_MathFloatAdd_B__Const: number;
            FootTrace_FootTrace_GetTransform_1_Item__Const: UE.RigElementKey;
            FootTrace_FootTrace_MathVectorAdd_B__Const: UE.Vector;
            FootTrace_FootTrace_RigUnit_VisualDebugVectorItemSpace_1_bEnabled__Const: boolean;
            FootTrace_FootTrace_RigUnit_VisualDebugVectorItemSpace_1_Mode__Const: number;
            FootTrace_FootTrace_RigUnit_VisualDebugVectorItemSpace_1_Color__Const: UE.LinearColor;
            FootTrace_FootTrace_RigUnit_VisualDebugVectorItemSpace_1_Thickness__Const: number;
            FootTrace_FootTrace_RigUnit_VisualDebugVectorItemSpace_1_Scale__Const: number;
            FootTrace_FootTrace_RigUnit_VisualDebugVectorItemSpace_1_Space__Const: UE.RigElementKey;
            FootTrace_FootTrace_MathVectorSub_B__Const: UE.Vector;
            FootTrace_FootTrace_RigUnit_VisualDebugVectorItemSpace_2_Mode__Const: number;
            FootTrace_FootTrace_SphereTraceByTraceChannel_TraceChannel__Const: UE.ETraceTypeQuery;
            FootTrace_FootTrace_SphereTraceByTraceChannel_Radius__Const: number;
            FootTrace_FootTrace_RigUnit_VisualDebugVectorItemSpace_Mode__Const: number;
            FootTrace_1_FootTrace_1_GetTransform_Item__Const: UE.RigElementKey;
            FootTrace_1_FootTrace_1_RigUnit_VisualDebugVectorItemSpace_1_Mode__Const: number;
            FootTrace_1_FootTrace_1_RigUnit_VisualDebugVectorItemSpace_2_Mode__Const: number;
            FootTrace_1_FootTrace_1_SphereTraceByTraceChannel_TraceChannel__Const: UE.ETraceTypeQuery;
            FootTrace_1_FootTrace_1_RigUnit_VisualDebugVectorItemSpace_Mode__Const: number;
            VariableNode_9_Value__Const: number;
            AlphaInterp_Bias__Const: number;
            AlphaInterp_InRange__Const: UE.InputRange;
            AlphaInterp_InterpSpeedIncreasing__Const: number;
            ModifyTransforms_ItemToModify__Const: TArray<UE.RigUnit_ModifyTransforms_PerItem>;
            ModifyTransforms_Mode__Const: UE.EControlRigModifyBoneMode;
            ModifyTransforms_1_ItemToModify__Const: TArray<UE.RigUnit_ModifyTransforms_PerItem>;
            ModifyTransforms_1_1_ItemToModify__Const: TArray<UE.RigUnit_ModifyTransforms_PerItem>;
            PBIK_Root__Const: string;
            PBIK_Effectors__Const: TArray<UE.PBIKEffector>;
            PBIK_BoneSettings__Const: TArray<UE.PBIKBoneSetting>;
            PBIK_ExcludedBones__Const: TArray<string>;
            PBIK_Settings__Const: UE.PBIKSolverSettings;
            PBIK_Debug__Const: UE.PBIKDebug;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): RigVMMemory_Literal;
            static Load(InName: string): RigVMMemory_Literal;
        
            __tid_RigVMMemory_Literal_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: BCA382AF41A385E6A0A542867C8059AA
    namespace Game.Characters.Mannequins.Rigs.CR_Mannequin_BasicFootIK {
        class RigVMMemory_Work extends UE.RigVMMemoryStorage {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ExecuteContext_: UE.ControlRigExecuteContext;
            FootTrace_FootTrace_SphereTraceByTraceChannel_HitLocation: UE.Vector;
            FootTrace_FootTrace_MathVectorAdd_Result: UE.Vector;
            FootTrace_FootTrace_GetTransform_Transform: UE.Transform;
            FootTrace_FootTrace_GetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            FootTrace_FootTrace_MathFloatAdd_Result: number;
            FootTrace_FootTrace_MathFloatAdd_A: number;
            FootTrace_FootTrace_GetTransform_1_Transform: UE.Transform;
            FootTrace_FootTrace_GetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            FootTrace_FootTrace_MathVectorAdd_A__IO: UE.Vector;
            FootTrace_FootTrace_MathVectorSub_Result: UE.Vector;
            FootTrace_FootTrace_MathVectorSub_A__IO: UE.Vector;
            FootTrace_FootTrace_SphereTraceByTraceChannel_bHit: boolean;
            FootTrace_FootTrace_SphereTraceByTraceChannel_HitNormal: UE.Vector;
            FootTrace_1_FootTrace_1_SphereTraceByTraceChannel_HitLocation: UE.Vector;
            FootTrace_1_FootTrace_1_MathVectorAdd_Result: UE.Vector;
            FootTrace_1_FootTrace_1_GetTransform_Transform: UE.Transform;
            FootTrace_1_FootTrace_1_GetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            FootTrace_1_FootTrace_1_MathFloatAdd_Result: number;
            FootTrace_1_FootTrace_1_MathFloatAdd_A: number;
            FootTrace_1_FootTrace_1_GetTransform_1_Transform: UE.Transform;
            FootTrace_1_FootTrace_1_GetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            FootTrace_1_FootTrace_1_MathVectorAdd_A__IO: UE.Vector;
            FootTrace_1_FootTrace_1_MathVectorSub_Result: UE.Vector;
            FootTrace_1_FootTrace_1_MathVectorSub_A__IO: UE.Vector;
            FootTrace_1_FootTrace_1_SphereTraceByTraceChannel_bHit: boolean;
            FootTrace_1_FootTrace_1_SphereTraceByTraceChannel_HitNormal: UE.Vector;
            AlphaInterp_Result: number;
            AlphaInterp_Value: number;
            AlphaInterp_ScaleBiasClamp: TArray<UE.InputScaleBiasClamp>;
            AlphaInterp_1_Result: number;
            AlphaInterp_1_Value: number;
            AlphaInterp_1_ScaleBiasClamp: TArray<UE.InputScaleBiasClamp>;
            If_Result: number;
            MathFloatLess_Result: boolean;
            MathFloatLess_A: number;
            MathFloatLess_B: number;
            If_True: number;
            If_False: number;
            ModifyTransforms_ItemToModify__IO: TArray<UE.RigUnit_ModifyTransforms_PerItem>;
            ModifyTransforms_WorkData: TArray<UE.RigUnit_ModifyTransforms_WorkData>;
            ModifyTransforms_1_ItemToModify__IO: TArray<UE.RigUnit_ModifyTransforms_PerItem>;
            ModifyTransforms_1_WorkData: TArray<UE.RigUnit_ModifyTransforms_WorkData>;
            ModifyTransforms_1_1_ItemToModify__IO: TArray<UE.RigUnit_ModifyTransforms_PerItem>;
            ModifyTransforms_1_1_WorkData: TArray<UE.RigUnit_ModifyTransforms_WorkData>;
            GetTransform_Transform: UE.Transform;
            GetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            GetTransform_1_Transform: UE.Transform;
            GetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            PBIK_Effectors__IO: TArray<UE.PBIKEffector>;
            PBIK_EffectorSolverIndices: TArray<TArray<number>>;
            PBIK_BoneSettingToSolverBoneIndex: TArray<TArray<number>>;
            PBIK_SolverBoneToElementIndex: TArray<TArray<number>>;
            PBIK_Solver: TArray<UE.PBIKSolver>;
            PBIK_bNeedsInit: TArray<boolean>;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): RigVMMemory_Work;
            static Load(InName: string): RigVMMemory_Work;
        
            __tid_RigVMMemory_Work_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 32D949864AD588EA6612C69B65C3A997
    namespace Game.Characters.Mannequins.Rigs.ABP_Manny_PostProcess {
        class ABP_Manny_PostProcess_C extends UE.AnimInstance {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystemInstance;
            AnimBlueprintExtension_Base: UE.AnimSubsystemInstance;
            AnimGraphNode_Root: UE.AnimNode_Root;
            AnimGraphNode_LinkedInputPose: UE.AnimNode_LinkedInputPose;
            AnimGraphNode_ControlRig: UE.AnimNode_ControlRig;
            AnimGraphNode_PoseDriver_13: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_12: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_11: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_10: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_9: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_8: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_7: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_6: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_5: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_4: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_3: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_2: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_1: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver: UE.AnimNode_PoseDriver;
            AnimGraph(InPose: UE.PoseLink, AnimGraph: $Ref<UE.PoseLink>) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ABP_Manny_PostProcess_C;
            static Load(InName: string): ABP_Manny_PostProcess_C;
        
            __tid_ABP_Manny_PostProcess_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: F7C7AAA74586C76563A785A0FC324944
    namespace Game.Characters.Mannequins.Rigs.ABP_Quinn_PostProcess {
        class ABP_Quinn_PostProcess_C extends UE.AnimInstance {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystemInstance;
            AnimBlueprintExtension_Base: UE.AnimSubsystemInstance;
            AnimGraphNode_Root: UE.AnimNode_Root;
            AnimGraphNode_LinkedInputPose: UE.AnimNode_LinkedInputPose;
            AnimGraphNode_ControlRig: UE.AnimNode_ControlRig;
            AnimGraphNode_PoseDriver_13: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_12: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_11: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_10: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_9: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_8: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_7: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_6: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_5: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_4: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_3: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_2: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_1: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver: UE.AnimNode_PoseDriver;
            AnimGraph(InPose: UE.PoseLink, AnimGraph: $Ref<UE.PoseLink>) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ABP_Quinn_PostProcess_C;
            static Load(InName: string): ABP_Quinn_PostProcess_C;
        
            __tid_ABP_Quinn_PostProcess_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 8EF62DCF4D3CF245D7B05BB356A467FF
    namespace Game.Characters.Mannequins.Rigs.CR_Mannequin_Body {
        class CR_Mannequin_Body_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["L Arm IK Mode"]: boolean;
            ["R Arm IK Mode"]: boolean;
            ["L Leg IK Mode "]: boolean;
            ["R Leg IK Mode"]: boolean;
            ["Spine IK Mode"]: boolean;
            ["Neck IK Mode"]: boolean;
            ["Spine Offsets"]: TArray<UE.Transform>;
            ["Spine Length"]: number;
            ["Neck Length"]: number;
            ["L Arm IK Align"]: boolean;
            ["R Arm IK Align"]: boolean;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): CR_Mannequin_Body_C;
            static Load(InName: string): CR_Mannequin_Body_C;
        
            __tid_CR_Mannequin_Body_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 4AC5A9F94641E5CE0D39F98028C9CF48
    namespace Game.Characters.Mannequins.Rigs.CR_Mannequin_Procedural {
        class CR_Mannequin_Procedural_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): CR_Mannequin_Procedural_C;
            static Load(InName: string): CR_Mannequin_Procedural_C;
        
            __tid_CR_Mannequin_Procedural_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
}
