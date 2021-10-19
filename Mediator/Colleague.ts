import { Mediator } from "./Mediator";

export interface Colleague {
    setMediator: (mediator: Mediator) => void;
    setColleagueEnabled: (enabled: boolean) => void;
}
