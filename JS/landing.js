class Carousel{
    constructor(item){
        this.item = item;

        this.leftb = item.querySelector(".left-button");
        this.rightb = item.querySelector(".right-button")

        this.images = item.querySelectorAll("img");

        let allImages = Array.from(this.images);


    }
}

class Quote{
    constructor(quote){
        this.quote = quote;
    }
}


let carousel = document.querySelectorAll('.carousel').forEach(item => new Carousel(item));