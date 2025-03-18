// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "Kismet/BlueprintFunctionLibrary.h"
#include "ThirdPerson.h"
#include "MyBlueprintFunctionLibrary.generated.h"
/**
 * 
 */
UCLASS()
class THIRDPERSON_API UMyBlueprintFunctionLibrary : public UBlueprintFunctionLibrary
{
	GENERATED_BODY()
	
	UFUNCTION(BlueprintCallable, Category = "ThirdPersonDemo")
	static void PrintStringTest(const FString& StringToPrint);
};
