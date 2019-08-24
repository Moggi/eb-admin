

export class User {
    public id: string;
    public username: string;
    public email: number;
    public first_name: string;
    public last_name: string;
    public phone: string;
    public cellphone: string;

    constructor();
    constructor(obj: {}); 
    constructor(obj?: any) {
        this.id = obj && obj.id || null;
        this.username = obj && obj.username || null;
        this.email = obj && obj.email || null;
        this.first_name = obj && obj.first_name || null;
        this.last_name = obj && obj.last_name || null;
        this.phone = obj && obj.phone || null;
        this.cellphone = obj && obj.cellphone || null;
    }
    
    public get_full_name() {
        if(!this.first_name && !this.last_name)
            return '<no name>';
        return `${this.first_name} ${this.last_name}`;
    }
    
    public get_email() {
        if(!this.email)
            return '<no email>';
        return `${this.email}`;
    }
}