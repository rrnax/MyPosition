class BookObject{
    constructor(
        title,
        subtitle,
        publisher,
        atuhors,
        categories,
        description,
        imagesLinks,
        language,
        pageAmount,
        printType,
        publishDate,
        raitingsCount){

        this._title = title;
        this._subtitle = subtitle;
        this._publisher = publisher;
        this._authors = atuhors;
        this._categories = categories;
        this._description = description;
        this._imagesLinks = imagesLinks;
        this._language = language;
        this._pageAmount = pageAmount;
        this._printType = printType;
        this._publishDate = publishDate;
        this._raitingCount = raitingsCount;
    }

    get title(){
        return this._title;
    }

    get subtitle(){
        return this._subtitle;
    }

    get publisher(){
        return this._publisher;
    }

    get authors(){
        return this._authors;
    }

    get categories(){
        return this._categories;
    }

    get description(){
        return this._description;
    }

    get imagesLinks(){
        return this._imagesLinks;
    }

    get language(){
        return this._language;
    }

    get pageAmount(){
        return this._pageAmount;
    }

    get printType(){
        return this._printType;
    }

    get publishDate(){
        return this._publishDate;
    }

    get raitingsCount(){
        return this._raitingCount;
    }

}

export default BookObject;