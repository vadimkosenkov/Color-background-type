const myValuePart1 = document.querySelector('.myValuePart1')
const btn1 = document.querySelector('.btn1')

const myValuePart2 = document.querySelector('.myValuePart2')
const btn2 = document.querySelector('.btn2')

const myValuePart3 = document.querySelector('.myValuePart3')
const btn3 = document.querySelector('.btn3')

const myValuePart4 = document.querySelector('.myValuePart4')
const btn4 = document.querySelector('.btn4')


btn1.addEventListener('click', funcValue1)
btn2.addEventListener('click', funcValue2)
btn3.addEventListener('click', funcValue3)
btn4.addEventListener('click', funcValue4)

function funcValue1() {
    document.body.style.backgroundColor = myValuePart1.value
}

function funcValue2() {
    document.body.style.backgroundColor = myValuePart2.value
}

function funcValue3() {

    document.body.style.backgroundColor = null
    document.body.className = myValuePart3.value
}

function funcValue4() {
    document.body.className = null
    document.body.style.backgroundColor = null
    document.body.style.setProperty('--mycolor', myValuePart4.value)
}

function funcValue5(selectElement) {
    document.body.className = null
    document.body.style.backgroundColor = null
    document.body.style.setProperty('--mycolor', selectElement.value)
}