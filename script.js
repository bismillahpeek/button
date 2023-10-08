// const input = document.getElementById('input')
// const button = document.getElementById('button')
// const li = document.getElementById('li')

// button.addEventListener ('click', function() {
//     const li = document.createElement('li')
//     const liText = document.createTextNode(input.value)
//     li.classList = 'li'
//     ul.appened(li)
//     li.append(liText)
//     input.value = ''
// })


const input = document.getElementById('input')
const button = document.getElementById('click')
const p = document.getElementById('p')

button.addEventListener('click', function() {
    p.textContent = input.value
    input.value = ''
})
