const socials = document.querySelector('.share')
const shareBtn = document.getElementById('button-one')
const removeShareBtn = document.querySelector('#button-two')

shareBtn.addEventListener('click', () => {
    socials.classList.add('active')
})

removeShareBtn.addEventListener('click', () => {
    socials.classList.remove('active')
})