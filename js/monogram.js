// mouseover, mouseleave, mouseout
const productList = document.querySelectorAll('.product')
const priceList = document.querySelectorAll('item-price')
const shopBtnList = document.querySelectorAll('shop-btn')

productList.forEach(product => {
    product.addEventListener('mouseover', () => {
       let index = parseInt(product.id)              
       shopBtnList[index].style.display='block'
       priceList[index].style.display='none'
    })
})
console.log(shopBtnList[0].id)

productList.forEach(product => {
    product.addEventListener('mouseleave', () => {
       let index = parseInt(product.id)              
       shopBtnList[index].style.display='none'
       priceList[index].style.display='block'
    })
})