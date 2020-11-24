const modalOverLay = document.querySelector('.modal');
const maximize = document.querySelector('.maximize').querySelector('i')
console.log(maximize)
document.querySelector('.maximize').addEventListener('click', function () {

    // RESTAURANDO TAMANHO MODAL

    if (modalOverLay.style.width == '100%') {
        modalOverLay.style.width = '90%'
        modalOverLay.style.height = '90%'
        modalOverLay.style.margin = '5vh auto'
        maximize.style.transform = 'rotate(0deg)'
    } else {
        // MAXIMIZANDO MODAL

        modalOverLay.style.width = '100%'
        modalOverLay.style.height = '100%'
        modalOverLay.style.margin = 'auto'
        maximize.style.transform = 'rotate(180deg)'
    }

})

// AO FECHAR, RESTAURAR MODAL

document.querySelector('.close-modal').addEventListener('click', function () {
    modalOverLay.style.width = '90%'
    modalOverLay.style.height = '90%'
    modalOverLay.style.margin = '5vh auto'
})

