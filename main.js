/*
document.addEventListener('DOMContentLoaded', ()=>{

//card options
const cardArray = [
  {  name: 'apple',
    img: 'images/apple.png'
},
{
    name: 'cake',
    img: 'images/cake.png'
},
{
    name: 'car',
    img:'images/car.png'
},
{
    name:'pizza',
    img:'images/pizza.png'
},
{
    name: 'hotdog',
    img : 'images/hotdog.png'
},
{
    name:'tree',
    img: 'img/tree.png'
},
{  name: 'apple',
    img: 'images/apple.png'
},
{
    name: 'cake',
    img: 'images/cake.png'
},
{
    name: 'car',
    img:'images/car.png'
},
{
    name:'pizza',
    img:'images/pizza.png'
},
{
    name: 'hotdog',
    img : 'images/hotdog.png'
},
{
    name:'tree',
    img: 'img/tree.png'
}

]

cardArray.sort(() => 0.5 - Math.random()) 

const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result')
let cardsChosen = [];
let cardsChosenId =[];
let cardsWon =[];
//create your board
function createBoard(){
    for(let i =0; i<cardArray.length; i++){
        let card = document.createElement('img')
        card.setAttribute('src', 'images/black.png')
        card.setAttribute('data-id', i)
        //card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}
//check for matches

function checkForMatch(){
    let cards = document.querySelectorAll('img');
    const optionOneId = cardsChosen[0];
    const optionTwoId = cardsChosen[1];
    if (cardsChosen[0] === cardsChosen[1]){
        alert('You found a match');
        cards[optionOneId].setAttribute('src', 'images/8ball.png')
        cards[optionTwoId].setAttribute('src','images/8ball.png')
        cardsWon.push(cardsChosen)
    }else{
        cards[optionOneId].setAttribute('src','images/black.png')
        cards[optionTwoId].setAttribute('src', 'images/black.png')
        alert('Sorry, try again')
    }
    cardsChosen= []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = 'Congratulations you found them all'
    }
}


//flip your card
function flipCard(){
    let cardId = this.getAttribute('data-id');
    cardChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2){
        setTimeout(checkForMatch, 500);

    }

}

    createBoard()


})
*/
document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {  name: 'apple',
        img: 'images/apple.png'
    },
    {
        name: 'cake',
        img: 'images/cake.png'
    },
    {
        name: 'car',
        img:'images/car.png'
    },
    {
        name:'pizza',
        img:'images/pizza.png'
    },
    {
        name: 'hotdog',
        img : 'images/hotdog.png'
    },
    {
        name:'black',
        img: 'img/black.png'
    },
    {  name: 'apple',
        img: 'images/apple.png'
    },
    {
        name: 'cake',
        img: 'images/cake.png'
    },
    {
        name: 'car',
        img:'images/car.png'
    },
    {
        name:'pizza',
        img:'images/pizza.png'
    },
    {
        name: 'hotdog',
        img : 'images/hotdog.png'
    },
    {
        name:'black',
        img: 'img/black.png'
    }
    
      
      
    ]
  
    cardArray.sort(() => 0.5 - Math.random())
    
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    const cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'images/full.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      var cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId === optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/full.png')
        cards[optionTwoId].setAttribute('src', 'images/full.png')
        alert('You have clicked the same image!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/8ball.png')
        cards[optionTwoId].setAttribute('src', 'images/8ball.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'images/full.png')
        cards[optionTwoId].setAttribute('src', 'images/full.png')
        alert('Sorry, try again')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
      }
    }
  
    //flip your card
    function flipCard() {
      var cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })
  