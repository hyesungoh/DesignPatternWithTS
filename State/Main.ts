import { SafeFrame } from "./SafeFrame";

class Main {
    constructor() {
        const frame: SafeFrame = new SafeFrame();
        let hour: number = 0;

        setInterval(() => {
            hour = hour === 23 ? 0 : hour + 1;
            frame.setClock(hour);
        }, 1000);
    }
}

const m = new Main();