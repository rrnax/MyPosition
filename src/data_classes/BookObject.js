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

        title === undefined ? this._title = null : this._title = title;
        subtitle === undefined ? this._subtitle = null : this._subtitle = subtitle;
        publisher === undefined ? this._publisher = null : this._publisher = publisher;
        atuhors === undefined ? this._authors = null : this._authors = atuhors;
        categories === undefined ? this._categories = null : this._categories = categories;
        description === undefined ? this._description = null : this._description = description;
        imagesLinks === undefined ? this._imagesLinks = null : this._imagesLinks = imagesLinks;
        language === undefined ? this._language = null : this._language = language;
        pageAmount === undefined ? this._pageAmount = null : this._pageAmount = pageAmount;
        printType === undefined ? this._printType = null : this._printType = printType;
        publishDate === undefined ? this._publishDate = null : this._publishDate = publishDate;
        raitingsCount === undefined ? this._raitingCount = null : this._raitingCount = raitingsCount;
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