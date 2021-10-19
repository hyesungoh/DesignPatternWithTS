import { Colleague } from "./Colleague";
import { Mediator } from "./Mediator";

export class ColleagueTextField implements Colleague {
    public element: HTMLInputElement;
    private mediator: Mediator;

    constructor(label: string) {
        const inputLable = document.createElement("label");
        inputLable.innerHTML = label;
        document.body.appendChild(inputLable);

        this.element = document.createElement("input");
        this.element.type = "text";
        this.element.addEventListener("change", this.textValueChanged);
        document.body.appendChild(this.element);
    }

    setMediator = (mediator: Mediator) => {
        this.mediator = mediator;
    };

    setColleagueEnabled = (enabled: boolean) => {
        this.element.disabled = !enabled;
        this.element.style.backgroundColor = enabled ? "white" : "lightgray";
    };

    textValueChanged = () => {
        this.mediator.colleagueChanged();
    };
}
