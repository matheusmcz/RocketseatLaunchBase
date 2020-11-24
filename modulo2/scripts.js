const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card')
const blogCard = document.querySelectorAll('.blogCard')

for (let card of cards) {
    card.addEventListener('click', function () {
        const videoId = card.getAttribute('id')
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src = `https://www.youtube.com/embed/${videoId}`

    })
}

document.querySelector('.close-modal').addEventListener('click', function () {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('iframe').src = ''
})

for (let card of blogCard) {
    card.addEventListener('click', function () {
        const videoId = card.getAttribute('id')
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src = `https://blog.rocketseat.com.br/${videoId}`

    })
}