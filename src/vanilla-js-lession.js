const user = {name: "bob"}
const user2 = user
user2.name = "Alex"
console.log(user.name) //Alex

const arr = [1,2,3,4]
//arr push(5)//мутирует
//console.log(arr.concat(5))
console.log(arr)
const newArr = arr.concat(5)
console.log(arr === newArr)//false


const users = [
    {
        id: 1,
        name: "Bob",
        isStudent: true
    },
    {
        id: 2,
        name: "Alex",
        isStudent: true
    },
    {
        id: 3,
        name: "Ann",
        isStudent: true
    },
    {
        id: 4,
        name: "Bob",
        isStudent: true
    },
]

const newUser = {
    id:5,
    name:"Farid",
    isStudent:true
}

//CRUD операции(Create - Read - Update - Delete)

//получаем копию исходного массива
//Create
const copyUsers = [...users,newUser]//создаем новый массив и с помощью деструктуризации или с помощью shpread оператора ...
console.log(copyUsers)
//Read
//Update
//изменим свойство уже созданного объекта
//создаем новый массив методом map - в этот массив метод map вызывает коллбек функцию и результат вызова этой колб функции кладет в новую коробку
//- а если id === 2 то тогда в значении isStudent: меняем на false
const updatedUsers = copyUsers.map((user) => user.id === 2 ? {...user, isStudent: false}: user);

//Delete