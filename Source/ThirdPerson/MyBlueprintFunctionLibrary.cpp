// Fill out your copyright notice in the Description page of Project Settings.


#include "MyBlueprintFunctionLibrary.h"

void UMyBlueprintFunctionLibrary::PrintStringTest(const FString& StringToPrint)
{
    UE_LOG(LogTemp, Log, TEXT("PrintStringTest: %s"), *StringToPrint);
}
