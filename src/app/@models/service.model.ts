
export class Service {
    public id: string;
    public name: string;
    public avg_price: number;
    public avg_time: string;
    public is_type: boolean;
    public from_type: string;
    public type_color: string;

    constructor();
    constructor(obj: {}); 
    constructor(obj?: any) {
        this.id = obj && obj.id || null;
        this.name = obj && obj.name || "";
        this.avg_price = obj && obj.avg_price || 0;
        this.avg_time = obj && obj.avg_time || '';
        this.is_type = obj && obj.is_type || false;
        this.from_type = obj && obj.from_type || null;
        this.type_color = obj && obj.type_color || '';
    }

    toString(){
        return this.name;
    }
}