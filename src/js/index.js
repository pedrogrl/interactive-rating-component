const divRating = document.querySelector('#rating-div')
const divThanks = document.querySelector('#thanks-div')
const submitButton = document.querySelector('#btn-submit')
const selectorsButtons = document.querySelectorAll('.btn-rate')
const feedbackResult = document.querySelector('.result') 

selectorsButtons.forEach(button => {
  button.addEventListener('click', () => {
    submitButton.classList.remove('btn-submit')
    submitButton.classList.add('btn-submit-clickable')
    submitButton.innerHTML = 'SUBMIT'
    submitButton.style.color = 'white'

    feedbackResult.innerHTML = button.innerHTML
    unlockHiddingDivRating();
  })
})

const unlockHiddingDivRating = () =>{
  document.querySelector('.btn-submit-clickable').addEventListener('click', () =>{
    divRating.classList.add('hidden')
    divThanks.classList.remove('hidden')
  })
}

