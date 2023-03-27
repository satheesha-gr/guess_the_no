function playAgain(){
    window.location.reload('body');
}
let input = document.querySelector('input');
let guess = document.querySelector('.start');
let check = document.querySelector('.check');
let set = document.querySelector('body');
let correct = document.querySelector('.number');
let chance = document.querySelector('.chance');
let high = document.querySelector('.high')
let ranNo = Math.floor(Math.random()*100);
let count = 100;


check.addEventListener('click',()=>{  
    console.log(ranNo);

    if(ranNo > parseInt(input.value)){
        guess.innerText="Your Guess Is Low..."
        input.value=""
        count--;
        chance.innerText=`💯Chances : ${count}`;
    }
    else if(ranNo < parseInt(input.value)){
        guess.innerText="Your Guess Is High..."
        input.value=""
        count--;
        chance.innerText=`💯Chances : ${count}`;
    }
    else{
        guess.innerText="🤩 Hurray You Won 🤩"
        set.setAttribute('style','background-color: green')
        correct.innerHTML=ranNo;
        high.innerText=`🏅Highest score : ${count}`;
    }
})