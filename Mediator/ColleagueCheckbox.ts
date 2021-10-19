import { Colleague } from "./Colleague";
import { Mediator } from "./Mediator";

export class ColleagueCheckbox implements Colleague {
    public element: HTMLInputElement;
    private mediator: Mediator;

    constructor(label: string, name: string, state: boolean) {
        const inputLabel = document.createElement("label");
        inputLabel.innerHTML = label;
        document.body.appendChild(inputLabel);

        this.element = document.createElement("input");
        this.element.type = "radio";
        this.element.name = name;
        this.element.checked = state;
        this.element.addEventListener("change", this.itemStateChanged);
        document.body.appendChild(this.element);
    }

    setMediator = (mediator: Mediator) => {
        this.mediator = mediator;
    };

    setColleagueEnabled = (enabled: boolean) => {
        this.element.disabled = !enabled;
    };

    itemStateChanged = () => {
        this.mediator.colleagueChanged();
    };
}
