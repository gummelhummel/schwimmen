import { Player } from './';
export class Team {
    public _id: string;
    public userId: string;
    public teamname: string;
    public members: Player[];

    constructor(_id: string, userId: string, teamname: string, members: Player[]) {
        this._id = _id;
        this.userId = userId;
        this.teamname = teamname;
        this.members = members ? members : [];
    }

}
