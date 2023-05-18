'use strict'
const btnCheckout = document.querySelector('.btn3')
const checkoutEl = document.querySelector('.checkout')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal');
const btnAddCart = document.getElementsByClassName('.add-cart')
const btnPlaceOrder = document.querySelector('.orderbtn')

btnCheckout.addEventListener('click', function(e) {
e.preventDefault()
checkoutEl.classList.remove('hidden')
})

const openModal = function () {
  checkoutEl.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  checkoutEl.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !checkoutEl.classList.contains('hidden')) {
    closeModal();
  }
});

//Cart function
btnPlaceOrder.addEventListener('click', function(){
  btnPlaceOrder.textContent = 'Order Successful 🎉'

})
