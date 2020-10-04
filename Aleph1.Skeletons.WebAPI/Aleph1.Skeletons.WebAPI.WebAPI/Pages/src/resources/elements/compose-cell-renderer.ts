import { ICellRendererComp, ICellRendererParams } from "ag-grid-community";
import { TemplatingEngine, View, Container } from "aurelia-framework";

export class ComposeCellRenderer implements ICellRendererComp
{
	private templatingEngine: TemplatingEngine;
	private params: ICellRendererParams;
	private enhancedView: View;

	init?(params: ICellRendererParams): void
	{
		this.templatingEngine = Container.instance.get(TemplatingEngine);
		this.params = params;
	}

	getGui(): HTMLElement
	{
		const compose = document.createElement("compose");
		compose.setAttribute("view-model.bind", "viewModel");
		compose.setAttribute("view.bind", "view");
		compose.setAttribute("model.bind", "$this");
		compose.classList.add("block", "h-full");

		// element = <compose view-model.bind="viewModel" view.bind="view" model.bind="model"></compose>
		this.enhancedView = this.templatingEngine.enhance({ element: compose, bindingContext: this.params });
		return compose;
	}

	refresh(): boolean
	{
		return true;
	}

	destroy(): void
	{
		this.enhancedView.detached();
		this.enhancedView.unbind();
	}
}
