import { ColleagueButton } from "./ColleagueButton";
import { ColleagueCheckbox } from "./ColleagueCheckbox";
import { ColleagueTextField } from "./ColleagueTextField";
import { Mediator } from "./Mediator";

export class LoginFrame implements Mediator {
    private checkGuest: ColleagueCheckbox;
    private checkLogin: ColleagueCheckbox;
    private textUser: ColleagueTextField;
    private textPass: ColleagueTextField;
    private buttonOk: ColleagueButton;
    private buttonCancel: ColleagueButton;

    constructor() {
        this.createCollegues();
        this.colleagueChanged();
    }

    createCollegues = () => {
        const checkboxGroup = "loginType";
        this.checkGuest = new ColleagueCheckbox("Guest", checkboxGroup, true);
        this.checkLogin = new ColleagueCheckbox("Login", checkboxGroup, false);

        this.textUser = new ColleagueTextField("ID");
        this.textPass = new ColleagueTextField("PW");

        this.buttonOk = new ColleagueButton("OK");
        this.buttonCancel = new ColleagueButton("CANCEL");

        // mediator 세팅
        this.checkGuest.setMediator(this);
        this.checkLogin.setMediator(this);
        this.textUser.setMediator(this);
        this.textPass.setMediator(this);
        this.buttonOk.setMediator(this);
        this.buttonCancel.setMediator(this);
    };

    colleagueChanged = () => {
        if (this.checkGuest.element.checked) {
            this.textUser.setColleagueEnabled(false);
            this.textPass.setColleagueEnabled(false);
            this.buttonOk.setColleagueEnabled(true);
        } else {
            this.textUser.setColleagueEnabled(true);
            this.userpassChanged();
        }
    };

    userpassChanged = () => {
        if (this.textUser.element.value.length > 0) {
            this.textPass.setColleagueEnabled(true);
            if (this.textPass.element.value.length > 0) {
                this.buttonOk.setColleagueEnabled(true);
            } else {
                this.buttonOk.setColleagueEnabled(false);
            }
        } else {
            this.textPass.setColleagueEnabled(false);
            this.buttonOk.setColleagueEnabled(false);
        }
    };
}
