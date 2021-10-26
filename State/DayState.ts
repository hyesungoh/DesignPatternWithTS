import { Context } from "./Context";
import { NightState } from "./NightState";
import { State } from "./State";

export class DayState implements State {
    private static singleton: DayState = new DayState();
    private constructor() {}
    static getInstance() {
        return this.singleton;
    }

    doClock = (context: Context, hour: number) => {
        if (hour < 9 || 17 <= hour) {
            context.changeState(NightState.getInstance());
        }
    };

    doUse = (context: Context) => {
        context.recordLog("금고사용(주간)");
    };

    doAlarm = (context: Context) => {
        context.callSecurityCenter("비상벨(주간)");
    };

    doPhone = (context: Context) => {
        context.callSecurityCenter("일반통화(주간)");
    };

    toString = (): string => {
        return "[주간]";
    };
}
