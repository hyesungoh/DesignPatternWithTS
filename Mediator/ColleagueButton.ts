import { Colleague } from "./Colleague";
import { Mediator } from "./Mediator";

export class ColleagueButton implements Colleague {
    public element: HTMLButtonElement;
    private mediator: Mediator;

    constructor(caption: string) {
        this.element = document.createElement("input");
        this.element.innerHTML = caption;
        this.element.type = "button";
        document.body.appendChild(this.element);
    }

    setMediator = (mediator: Mediator) => {
        this.mediator = mediator;
    };

    setColleagueEnabled = (enabled: boolean) => {
        this.element.disabled = !enabled;
    };
}
