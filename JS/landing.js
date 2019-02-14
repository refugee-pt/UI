class Carousel{
    constructor(item){
        this.item = item;

        this.leftb = item.querySelector(".left-button");
        this.rightb = item.querySelector(".right-button")

        this.images = item.querySelectorAll("img");

        let allImages = Array.from(this.images);

        // this.data = allImages[0].dataset.img;

        // this.itemElement = document.querySelector(`.carousel-img[data-img="${this.data}"]`);

        // this.quote = document.querySelector(`.quote[data-img="${this.data}]`).textContent;

        // this.quoteArea = document.querySelector('.quote-area');

        // this.quoteArea.textContent = this.quote;



        allImages[0].style.display = "block";



        

        // this.leftb.addEventListener('click', () => 

        // )

        // this.rightb.addEventListener('click', () => );



    }
    cycle(){



    }
}

class Quote{
    constructor(quote){
        this.quote = quote;
    }
}


let carousel = document.querySelectorAll('.carousel').forEach(item => new Carousel(item));