class BooksList {
    constructor(list = [], amount = 0){
        this._list = list;
        this._amount = amount;
    }

    set amount(newAmount) {
        if(typeof newAmount === "number" && newAmount > 0) {
            this._amount = newAmount;
        } else {
            console.log("Invalid name");
        }
    }

    set list(newList) {
        if(Array.isArray(newList) && newList.length > 0){
            this._list = [...newList];
        } else {
            console.log("Invalid array");
        }
    }

    get amount() {
        return this._amount;
    }

    get list() {
        return this._list;
    }
}

export default BooksList;