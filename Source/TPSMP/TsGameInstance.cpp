// Fill out your copyright notice in the Description page of Project Settings.


#include "TsGameInstance.h"

void UTsGameInstance::Init()
{
    Super::Init();
}

void UTsGameInstance::OnStart()
{
    Super::OnStart();

    if (JsEntry.IsEmpty())
    {
        return;
    }

    if (JsDebugPort > 0)
    {
        JsScript = MakeShared<puerts::FJsEnv>(std::make_unique<puerts::DefaultJSModuleLoader>(TEXT("JavaScript")), std::make_shared<puerts::FDefaultLogger>(), JsDebugPort);
        if (WaitDebugger)
        {
            JsScript->WaitDebugger();
        }
    }
    else
    {
        JsScript = MakeShared<puerts::FJsEnv>();
    }

    TArray<TPair<FString, UObject*>> Arguments;
    Arguments.Add(TPair<FString, UObject*>(TEXT("GameInstance"), this));
    JsScript->Start(JsEntry, Arguments);
}

void UTsGameInstance::Shutdown()
{
    Super::Shutdown();
    JsScript.Reset();
}