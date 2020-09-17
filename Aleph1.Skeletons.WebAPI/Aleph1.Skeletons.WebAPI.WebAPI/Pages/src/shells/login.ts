import { UserService } from "resources/services";
import { autoinject, computedFrom } from "aurelia-framework";
import { LoginModel } from "resources/models";
import { handleErrors } from "resources/decorators/handle-errors";

@autoinject
export class LoginSell
{
	credentials: LoginModel = new LoginModel();
	constructor(public userService: UserService) { }

	@computedFrom("credentials.username", "credentials.password")
	public get loginDisabled(): boolean
	{
		return !this.credentials.username || !this.credentials.password;
	}

	@handleErrors("התרחשה שגיאה בעת ההתחברות")
	public login(): Promise<void>
	{
		return this.userService.login(this.credentials);
	}
}
