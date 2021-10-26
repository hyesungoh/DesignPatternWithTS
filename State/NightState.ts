import { Context } from "./Context";
import { DayState } from "./DayState";
import { State } from "./State";

export class NightState implements State {
    private static singleton: NightState = new NightState();
    private constructor() {}
    static getInstance() {
        return this.singleton;
    }

    doClock = (context: Context, hour: number) => {
        if (9 <= hour && hour < 17) {
            context.changeState(DayState.getInstance());
        }
    };

    doUse = (context: Context) => {
        context.recordLog("!!비상!! 야간금고 사용");
    };

    doAlarm = (context: Context) => {
        context.callSecurityCenter("비상벨(야간)");
    };

    doPhone = (context: Context) => {
        context.callSecurityCenter("야간통화 녹음");
    };

    toString = (): string => {
        return "[야간]";
    };
}
