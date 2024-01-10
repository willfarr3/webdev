const plusBtn = document.querySelectorAll('plus-btn')
const minusBtn = document.querySelectorAll('minus-btn')
const sideHdr = document.querySelectorAll('side-heading')
const hamburgerBtn = document.querySelector('hamburger-button')
const link = document.querySelector('link')


plusBtn.addEventListener('click', () => {
    plusBtn.forEach(plusBtn => {
        plusBtn.addEventListener('click', () => {
            let index = parseint(plusBtn.id)
            plusBtn[index].style.display='none'
            minusBtn[index].style.display='block'
            sideHdr[index].style.display='block'
        })
    })                           
})
minusBtn.addEventListener('click',() =>  {
    plusBtn.forEach(minusBtn => {
        plusBtn.addEventListener('click', () => {
            let index = parseint(plusBtn.id)
            plusBtn[index].style.display='block'
            minusBtn[index].style.display='none'
            sideHdr[index].style.display='none'
        })
    })                           
})



hamburgerBtn.addEventListener('click', () => {
    link.style.display='none'
})