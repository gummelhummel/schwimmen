import { Meter } from './';
export class Player {

    public email: string;
    public username: string;
    public firstname: string;
    public lastname: string;
    public image: string;
    public meters: Meter[];
    public totalmeters: number;

    constructor(email: string, username: string, firstname: string, lastname: string, image: string, meters: Meter[], totalmeters: number) {
        this.email = email;
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.image = image;
        this.meters = meters;
        this.totalmeters = totalmeters;
    }

    getSum(): number {
        let summe: number = 0;
        this.meters.forEach((meter) => {
            summe += meter.meters;
        });
        return summe;
    }

    getSumOfType(type: string): number {
        let summe: number = 0;
        this.meters.forEach((meter) => {
            if (meter.type == type) summe += meter.meters;
        });
        return summe;
    }
}
