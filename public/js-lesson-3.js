//События event()
// обработчик, слушатель , подписчик
// handler, listener, subscriber => function
//function () (вызывает браузер) => callback
// но прежде чем вызвать функцию браузер формирует объект события => {.....} =>  и этот объект имеет своего родителя  Event и далее будем иметь дело с вариациями этого ивента
// New Array() , new Object(), new Event()
// так же называют вот таким образом Event => event => ev => e

const sm = document.getElementById("small")
const md = document.getElementById("medium")
const bg = document.getElementById("big")

//функция или метод объекта document которая в качестве параметра принимает id "small" и возвращает ссылку на элемент с указанной id

function handler(e) {
    console.log(e.target)
    console.log(e.currentTarget)
}

// function handler2(params) {
//     alert(params)
// }

function double(params) {
    handler(params)
    handler2(params)
}

//
// sm.onclick = handler
// sm.onclick = double

sm.addEventListener(('click') , handler, {capture: true})
md.addEventListener(('click') , handler, true)
bg.addEventListener(('click') , handler, true)

//снимаем обработчик события
// sm.onclick = null
//
// sm.addEventListener("click", ev => handler)
//

const sum = (a, b) => a + b


function getName() {
    return this.name
}

const obj = {
    name: 'Bob',
    sum: sum
}
obj.sum(144, 111)

    [1, 2, 3, 4, 5, 6].push(5)