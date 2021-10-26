import { Context } from "./Context";
import { DayState } from "./DayState";
import { State } from "./State";

export class SafeFrame implements Context {
    private textClock: HTMLSpanElement;
    private textArea: HTMLTextAreaElement;
    private buttonUse: HTMLButtonElement;
    private buttonAlarm: HTMLButtonElement;
    private buttonPhone: HTMLButtonElement;

    private state: State = DayState.getInstance();

    constructor() {
        // textClock 생성 및 배치
        this.textClock = document.createElement("span");
        document.body.appendChild(this.textClock);

        // textArea 생성 및 배치
        this.textArea = document.createElement("textarea");
        this.textArea.rows = 100;
        document.body.appendChild(this.textArea);

        this.buttonUse = document.createElement("button");
        this.buttonUse.innerHTML = "USE";
        document.body.appendChild(this.buttonUse);

        this.buttonAlarm = document.createElement("button");
        this.buttonAlarm.innerHTML = "ALARM";
        document.body.appendChild(this.buttonAlarm);

        this.buttonPhone = document.createElement("button");
        this.buttonPhone.innerHTML = "PHONE";
        document.body.appendChild(this.buttonPhone);

        this.buttonUse.addEventListener("click", this.onClickButton);
        this.buttonAlarm.addEventListener("click", this.onClickButton);
        this.buttonPhone.addEventListener("click", this.onClickButton);
    }

    onClickButton = (e: MouseEvent) => {
        const { innerHTML } = e.target as HTMLButtonElement;

        if (innerHTML === "USE") {
            this.state.doUse(this);
        } else if (innerHTML === "ALARM") {
            this.state.doAlarm(this);
        } else if (innerHTML === "PHONE") {
            this.state.doPhone(this);
        }
    };

    setClock = (hour: number) => {
        this.textClock.innerHTML = `${hour > 9 ? hour : `0${hour}`}:00`;
        this.state.doClock(this, hour);
    };

    changeState = (state: State) => {
        this.recordLog(`${this.state}에서 ${state}로 상태가 변화했습니다.`);
        this.state = state;
    };

    callSecurityCenter = (msg: string) => {
        this.textArea.value += `call! ${msg}\n`;
    };

    recordLog = (msg: string) => {
        this.textArea.value += `${msg}\n`;
    };
}
