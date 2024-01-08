const plusBtn = document.querySelectorAll('plus-btn')
const minusBtn = document.querySelectorAll('minus-btn')


plusBtn.forEach(product => {
    plusBtn.addEventListener('mouseleave', () => {
        plusBtn[index].style.display='none'
        minusBtn[index].style.display='block'
    })
})                                    
