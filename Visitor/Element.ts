import { Visitor } from "./Visitor";

export interface Element {
    accept: (v: Visitor) => void;
}
