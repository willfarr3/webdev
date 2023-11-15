// the DOM = document object model
const rockBtn = document.getElementById('rock')

const paperBtn = document.getElementById('paper')
const resetBtn = document.getElementById('reset')
const scissorsBtn = document.getElementById('scissors')
const results = document.querySelector('.results')
const humanscore = document.querySelector('.userscore')
// const result = document.querySelector('.result')
const userImg = document.querySelector('.user-img')
const compImg = document.querySelector('.comp-img')
const choices = ['rock', "paper", "scissors"]
let comp
let userscore = 0 

// console.log(choices)
// function rockbtnClick() {
//     // changes text of object
//     result.innertext=('clicked')
// }

// function paperbtnClick() {
//     result.innertext=('clicked')
// }

// function scissorsbtnClick() {
//     result.innertext=('clicked')
// }

resetBtn.addEventListener('click', () => {
    userImg.src = "../imgs/rps_imgs/rps4.png" 
    compImg.src = "../imgs/rps_imgs/rps4.png"
    results.innertext=('start game')
})



rockBtn.addEventListener('click', () => {
    userImg.src = "../imgs/rps_imgs/" + rockBtn.id + ".png"
    compChoice()
    winlose(rockBtn.id)
    userscore = userscore + 1 
    
    
    
})
paperBtn.addEventListener('click', () => {
    userImg.src = "../imgs/rps_imgs/" + paperBtn.id + ".png"
    compChoice()
    winlose(paperBtn.id)
   
    userscore = userscore + 1 
    
})
scissorsBtn.addEventListener('click', () => {
    userImg.src = "../imgs/rps_imgs/" + scissorsBtn.id + ".png"
    compChoice()
    winlose(scissorsBtn.id)
   
    userscore = userscore + 1 
    
})
function compChoice () {
    const randNum = Math.floor(Math.random()*3)
    comp = choices[randNum]
    compImg.src = "../imgs/rps_imgs/" + comp + ".png"
    // console.log(comp)
}

function winlose(userChoice) {
    if (userChoice == "rock"  && comp == "paper"){
        results.innerText = 'that sounds like a skill issue'}
    else if (userChoice == "scissors"  && comp == "rock"){
        results.innerText = 'that sounds like a skill issue'}
    else if (userChoice == "paper"  && comp == "scissors"){
        results.innerText = 'that sounds like a skill issue'}
    else if (comp == "rock"  && user == "paper"){
        results.innerText = 'pure luck'}
    else if (comp == "scissors"  && user == "rock"){
        results.innerText = 'pure luck'}
    else if (comp == "paper"  && user == "scissors"){
        results.innerText = 'pure luck'}
    else {
        results.innerText = "tie game"
    }
    }


             