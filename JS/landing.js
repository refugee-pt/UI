class Carousel{
    constructor(item){
       
        this.item = item;

        this.data = this.item.dataset.img;

        this.item.classList.add('active');

        this.quote = document.querySelector(`.story-quote .quote[data-img="${this.data}"`).textContent
        this.quoteArea = document.querySelector('.quote-area');

        let image = document.querySelectorAll('.carousel-img');
        image.forEach(image => image.style.display = "none");
        this.item.style.display = "block";
        this.quoteArea.textContent = this.quote;
    } 
}

let leftb = document.querySelector('.left-button');
let rightb = document.querySelector('.right-button');
let carousel = document.querySelectorAll('.carousel .carousel-img');
let carouselArray = Array.from(carousel);
console.log(carouselArray);

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

let currentDisplay = new Carousel(carouselArray[getRandomInt(carouselArray.length)]);

function displayEngine(direction){
    
    let current = document.querySelector('.active');
    let index = carouselArray.indexOf(current);
    let max = carouselArray.length;
    let min = 0;
    
    if(direction === 1){
        current.classList.remove('active');
        if(index === max - 1){return 0}
        return index + 1;
    }
    else if(direction === 0){
        current.classList.remove('active');
        if(index === min){ return max - 1;}
        return index - 1;
    }
    else{ return currentDisplay;}
}


function cycleR(){
    
    let i = displayEngine(1);    
    return new Carousel(carousel[i]);
}

function cycleL(){
    
    let i = displayEngine(0);
    return new Carousel(carousel[i]);
}


leftb.addEventListener('click', (event) => 
   { cycleL(); }
)

rightb.addEventListener('click', (event) => 
    { cycleR();}

)



