import { FrameworkConfiguration } from "aurelia-framework";

export function configure(config: FrameworkConfiguration): void
{
	//config.globalResources([]);
}

export * from "./models/authentication-info";

export * from "./services/user-service";
export * from "./services/auth-http-client";