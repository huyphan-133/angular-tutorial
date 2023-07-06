export class Point{
    constructor(private _x: number, private _y: number){}

    set x(value){
        this._x = value;
    }

    get x(){
        return this._x
    }

    set y(value){
        if(value<0)
            throw new Error('value cannot be less than 0.');
        this._y = value;
    }

    get y(){
        return this._y;
    }
}