export class Meter {

    public type: string;
    public meters: number;
    public timestamp: string;

    constructor(type: string, meters: number, timestamp: string) {
        this.type = type;
        this.meters = meters;
        this.timestamp = timestamp;
    }
}
