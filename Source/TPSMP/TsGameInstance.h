// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "JsEnv.h"

#include "CoreMinimal.h"
#include "Engine/GameInstance.h"
#include "TSGameInstance.generated.h"

/**
 * 
 */
UCLASS()
class TPSMP_API UTsGameInstance : public UGameInstance
{
	GENERATED_BODY()
	
public:
    virtual void Init() override;

    virtual void OnStart() override;

    virtual void Shutdown() override;
	
private:
    /* Js entry file */
    UPROPERTY(EditDefaultsOnly, BlueprintReadOnly, Category = "Puerts", meta = (AllowPrivateAccess = "true"))
    FString JsEntry;

    UPROPERTY(EditDefaultsOnly, BlueprintReadOnly, Category = "Puerts", meta = (AllowPrivateAccess = "true"))
    int JsDebugPort = 0;

    UPROPERTY(EditDefaultsOnly, BlueprintReadOnly, Category = "Puerts", meta = (AllowPrivateAccess = "true"))
    bool WaitDebugger = false;

    TSharedPtr<puerts::FJsEnv> JsScript;
};
