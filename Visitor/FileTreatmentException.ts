export class FileTreatmentException {
    constructor(msg?: String) {
        if (msg) throw Error(msg as string);
    }
}
