// Fill out your copyright notice in the Description page of Project Settings.


#include "MainMenuGameMode.h"

void AMainMenuGameMode::HostServer(const FString& MapName, int32 Port)
{
	FString TravelURL = MapName + FString::Printf(TEXT("?listen?Port=%d"), Port);
	GetWorld()->ServerTravel(TravelURL);
}

void AMainMenuGameMode::JoinServer(const FString& ServerUrl)
{
    APlayerController* PC = GetWorld()->GetFirstPlayerController();
    if (PC)
    {
        PC->ClientTravel(ServerUrl, TRAVEL_Absolute);
    }
}