try {
let cart = document.querySelector('.cart');
let cartCount = document.querySelector('.cart-count');
let cartDisplay = document.querySelector('.cart-display');
// let cartClose = document.querySelector('.cart-close');
let harmburger = document.querySelector('.harmburger');
let logoHead = document.querySelector('.logo');
let closeLogo = document.querySelector('.logo .close-logo');
let body = document.querySelector('body')
let firstSlideItem = document.querySelector('.js-center')
let secondSlideItem = document.querySelector('.js-featured')
let featuredImg = [...document.querySelectorAll('.feature-image img')]
let sellHeader = [...document.querySelectorAll('.sell-header h4')]
let categoryImg = [...document.querySelectorAll('.categs .row .card img')]
// let categoryImg = [...document.querySelectorAll('.categs .row .card img')]
let allIn = [...document.querySelectorAll('.all-in img')]
let productName = [...document.querySelectorAll('.product-name a')]
let carouselItem = [...document.querySelectorAll('.carousel-item img')]

//changed all images and texts to placeholders
carouselItem.forEach(img =>{
  img.src = 'https://via.placeholder.com/3941x2244'
})

productName.forEach(a =>{
    a.innerHTML = 'Product <br /> Category'
  })
allIn.forEach(img =>{
  let secondSlideItem = document.querySelector('.js-featured')
    img.src = 'https://via.placeholder.com/3375x4209'
  })
categoryImg.forEach(img =>{
  let secondSlideItem = document.querySelector('.js-featured')
    img.src = 'https://via.placeholder.com/3375x4209'
  })

featuredImg.forEach(img =>{
let secondSlideItem = document.querySelector('.js-featured')
  img.src = 'https://via.placeholder.com/212x238'
})

sellHeader.forEach(header =>{
  let secondSlideItem = document.querySelector('.js-featured')
    header.innerHTML = 'lorem ipsum bacon'
  })

//End Of Placeholder 



//run query selector on cart,this attaches eventlistener by default to cart item
// cartBody.addEventListener('click',function (e) {
//   let inputItem = cartBody.querySelector("input[type='number']");
//   //handles removal of item
//   if(e.target.parentElement.parentElement.parentElement.localName == 'li'){
//     e.target.parentElement.parentElement.parentElement.remove();
//     cartItems -= 1;
//     cartCount.innerHTML = cartItems
//     if(cartBody.childElementCount == 0){
//       cartDisplay.style.width='350px'
//     }else{
//       cartDisplay.style.width='auto'
  
//     }
//   }
 
//   //handle quantity change
//  inputItem.addEventListener('change',function(){
//    console.log(this.value)
//  })
 
// })
//creates individual list item in cart

// function createCartItem(itemImg,itemTitle,itemPrice){
//   let listItem = document.createElement('li');
//   let divIcon = document.createElement('div')
//     divIcon.setAttribute('class','item-icon')
//     //sub elements on divIcon
//     let divIcon_img = document.createElement('img')
//     divIcon_img.setAttribute('class','img-cart')
//     divIcon_img.setAttribute('src',itemImg)
//     //prepending
//     divIcon.append(divIcon_img)
    
//   let divItemDetail = document.createElement('div')
//   divItemDetail.setAttribute('class','item-detail')
//      //subElements on divItemDetail
//     let detailName = document.createElement('span')
//     detailName.innerHTML = itemTitle
//     detailName.setAttribute('class','item-detail-name')
//     let detailRemove = document.createElement('span')
//     detailRemove.setAttribute('class','item-detail-remove')
//     let trashIcon = document.createElement('i')
//     trashIcon.setAttribute('class','fas fa-trash-alt mx-1')
//     let removeSpan = document.createElement('span')
//     removeSpan.innerHTML = 'remove'
//     //Prepending Items
//     detailRemove.prepend(trashIcon,removeSpan)
//     divItemDetail.prepend(detailName,detailRemove)

//   let divItemQty = document.createElement('div')
//     //appending items
//      divItemQty.setAttribute('class','item-qty')
//      let qtyInput = document.createElement('input')
//      qtyInput.setAttribute('type','number')
//      qtyInput.setAttribute('name','qty')
//      qtyInput.setAttribute('min','1')

//     divItemQty.appendChild(qtyInput)
//   let divItemAmt = document.createElement('div')
//     //item amount creation
//     divItemAmt.setAttribute('class','item-amt');
//     let pTag = document.createElement('p');
//     pTag.innerHTML = `&#8358; ${itemPrice}`
//     divItemAmt.appendChild(pTag)
  
//     listItem.prepend(divIcon,divItemDetail,divItemQty,divItemAmt);
//     cartBody.appendChild(listItem)
// }

// function addToCart(e){
//   let cartArticle = e.target.parentElement.parentElement.parentElement;
//   let itemImg = cartArticle.querySelector('.feature-image img').src
//   let itemTitle = cartArticle.querySelector('.sell-header h4').innerHTML
//   let itemPrices = cartArticle.querySelector('.sell-price span').innerHTML
//   itemPrice = Number(itemPrices.slice(1))
//   console.log(`image is ${itemImg} , title is ${itemTitle} , price is ${itemPrice}`)
//   createCartItem(itemImg,itemTitle,itemPrice)
//   cartItems += 1;
//   cartCount.innerHTML = cartItems
//  createCartObject.push({
//    itemImg,
//    itemTitle,
//    itemPrice,
//    cartItems
//  })
// }
//selecting Items in Cart slide One & two

  // firstSlideItem.addEventListener('click',addToCart)
  // secondSlideItem.addEventListener('click',addToCart)
  //Toggle ON and CLOSE of Icons
// cart.addEventListener('click',()=>{
//   cartDisplay.classList.toggle('open')
// })
// cartClose.addEventListener('click',()=>{
//     cartDisplay.classList.toggle('open')
//     body.classList.toggle('.height')

//   })
 harmburger.addEventListener('click',()=>{
    logoHead.classList.toggle('open')
    body.classList.toggle('height')
  })
  closeLogo.addEventListener('click',()=>{
    logoHead.classList.toggle('open')
  })

} catch (error) {
  console.log(error)
}
// if you remove the try catch block then uncomment the cart-display html code



    $('.center').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      arrows:false,
      autoplay:true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });
    // top manufacturers..
    // show more ...
    $('.feature').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        arrows:false,
        autoplay:true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
