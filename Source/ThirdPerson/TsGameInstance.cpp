// Fill out your copyright notice in the Description page of Project Settings.


#include "TsGameInstance.h"

void UTsGameInstance::Init()
{
    Super::Init();
    if (JsDebugPort <= 0)
    {
        JsEnv = MakeShared<puerts::FJsEnv>(JsRootPath);
    }
    else
    {
        JsEnv = MakeShared<puerts::FJsEnv>(std::make_unique<puerts::DefaultJSModuleLoader>(JsRootPath), std::make_shared<puerts::FDefaultLogger>(), JsDebugPort);
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
