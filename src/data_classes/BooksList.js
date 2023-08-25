import BookObject from "./BookObject";

class BooksList {
    constructor(list = []){
        this._list = list;
    }

    copyList(newList) {
        if(Array.isArray(newList) && newList.length > 0){
            this._list = [...newList];
        } else {
            console.log("Invalid array");
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