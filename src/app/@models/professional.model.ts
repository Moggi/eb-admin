import { User } from './user.model';


export class Professional {
    public id: string;
    public is_available: boolean;
    public username: string;
    // public user: User;

    constructor();
    constructor(obj: {}); 
    constructor(obj?: any) {
        this.id = obj && obj.id || null;
        this.is_available = obj && obj.is_available || false;
        this.username = obj && obj.username || null;
        // this.user = obj && new User(obj.user) || null;
    }

    toString(){
        return this.id;
    }
}