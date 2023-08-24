import BookObject from "./BookObject";

class BooksList {
    constructor(list = []){
        this._list = list;
    }

    set list(newList) {
        if(Array.isArray(newList) && newList.every(item => item instanceof BookObject) && newList.length > 0){
            this._list = [...newList];
        } else {
            this._list = [...newList];
        }
    }

    get list() {
        return this._list;
    }

    addVolume(volume){
        if(volume instanceof BookObject){
            this._list.push(volume);
        }
    }

    clearList(){
        this._list = [];
    }
}

export default BooksList;