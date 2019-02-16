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

class Story{
    constructor(story){
        this.story = story;

        this.button = document.getElementById('share');

        this.textArea = document.getElementById('story');

        this.submit = document.getElementById('submit');

        // this.button.addEventListener('click',function(event){
        //     this.story[0].classList.toggle('story--open')
        // });       
    }   
    
}




let carousel = document.querySelectorAll('.carousel').forEach(item => new Carousel(item));

let story = document.querySelectorAll('.user-input').forEach(item => new Story(item));

// const mkOption = select => option => {
//     const optEl = document.createElement("option")
//     optEl.innerText = option
//     optEl.value = option
  
//     select.appendChild(optEl)
//   }

// const country = document.getElementById("country")

//   const countries = "./country.json"
//   fetch(countries)
//     .then(res => res.json())
//     .then(Object.values)
    
//     .then(countries => countries.forEach(mkOption(country)))