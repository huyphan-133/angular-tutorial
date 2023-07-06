export class LikeComponent{
    constructor(private _likeCount:number, private _isLiked: boolean){}
    get likeCount(){
        return this._likeCount;
    }

    onClick(){
        if(this._isLiked){
            this._likeCount--;
        }else{
            this._likeCount++;
        }
        this._isLiked=!this._isLiked;        
    }
}