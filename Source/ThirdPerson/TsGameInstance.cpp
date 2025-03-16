// Fill out your copyright notice in the Description page of Project Settings.


#include "TsGameInstance.h"

void UTsGameInstance::OnStart()
{
    Super::OnStart();
    if (JsDebugPort <= 0)
    {
        JsEnv = MakeShared<puerts::FJsEnv>();
    }
    else
    {
        JsEnv = MakeShared<puerts::FJsEnv>(std::make_unique<puerts::DefaultJSModuleLoader>(TEXT("JavaScript")), std::make_shared<puerts::FDefaultLogger>(), JsDebugPort);
        if (WaitDebugger)
        {
            JsEnv->WaitDebugger();
        }

        if (!JsEntryFile.IsEmpty())
        {
            JsEnv->Start(JsEntryFile);
        }
    }
}

void UTsGameInstance::Shutdown()
{
    Super::Shutdown();
    JsEnv.Reset();
}
