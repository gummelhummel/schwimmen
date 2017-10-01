export class Entry {

    public type: string
    public meter: number;
    public date: string;

    constructor(type: string = '', meter: number = 0, date: string = '') {
        this.type = type;
        this.meter = meter;
        this.date = date;
    }
}
