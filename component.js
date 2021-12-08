const mySelect = document.querySelector('section')
const options = document.querySelectorAll('div')
const modalContainer = document.querySelector('.modal_container')
const modalOptions = document.querySelectorAll('span')

const handleModalOpen = () => {
    modalContainer.style.display = 'flex'
}

const handleModalClose = () => {
    modalContainer.style.display = 'none'
}

const handleCheck = event => {
    const text = event.target.innerText
    // mySelect.querySelector('div').innerText = text
    // mySelect.innerHTML = '<div>'+text+'</div>'
    mySelect.innerHTML = `<div>${text}</div>`
    console.log(mySelect.firstChild)
}



options.forEach(element => element.addEventListener('click', handleCheck))
mySelect.addEventListener('click', handleModalOpen)
modalContainer.addEventListener('click', handleModalClose)

