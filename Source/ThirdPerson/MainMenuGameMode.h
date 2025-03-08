// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "GameFramework/GameModeBase.h"
#include "MainMenuGameMode.generated.h"

/**
 * 
 */
UCLASS()
class AMainMenuGameMode : public AGameModeBase
{
	GENERATED_BODY()
	
public:
	UFUNCTION(BlueprintCallable, Category = "Network")
	void HostServer(const FString& MapName, int32 Port = 7777);

	UFUNCTION(BlueprintCallable, Category = "Network")
	void JoinServer(const FString& ServerUrl);
};
