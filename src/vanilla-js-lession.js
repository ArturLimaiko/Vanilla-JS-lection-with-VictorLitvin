const user = {name: "bob"}
const user2 = user
user2.name = "Alex"
console.log(user.name) //Alex

const arr = [1, 2, 3, 4]
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
    id: 5,
    name: "Farid",
    isStudent: true
}

//CRUD операции(Create - Read - Update - Delete)

//получаем копию исходного массива
//Create
const copyUsers = [...users, newUser]//создаем новый массив и с помощью деструктуризации или с помощью shpread оператора ...
console.log(copyUsers) //(5) [{…}, {…}, {…}, {…}, {…}]
//Read

//Update
//изменим свойство уже созданного объекта
//создаем новый массив методом map - в этот массив метод map вызывает коллбек функцию и результат вызова этой колб функции кладет в новую коробку
//- а если id === 2 то тогда в значении isStudent: меняем на false
const updatedUsers = copyUsers.map((user) => user.id === 2 ? {...user, isStudent: false} : user);


//Delete
const deletedUsers = updatedUsers.filter((student) => student.id !== 4) //true
console.log(deletedUsers)//(4) [{…}, {…}, {…}, {…}] возвращает  новый массив без ученика с id 4
console.log(deletedUsers === updatedUsers) // возвращает false     // если получаем true значит не получилось нового массива- если false значит создался новый массив
console.log(copyUsers === updatedUsers) //возвращает false    // если получаем true значит не получилось нового массива- если false значит создался новый массив



//пример с объектом у которого много вложенных объектов
const superUser = {
    id: 1,
    name: "Leanne Graham",
    userName: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt.556",
        city: "Gwenborough",
        zipcode: "9222-0232",
        geo: {
            lat: "-32.1241",
            lng: "-811.12311",
        }
    },
    phone: "1-12312-12312-212",
    website: "hildegard.org",
    company: {
        name: "Bret",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
    }
}
    //поменяем  catchPhrase в объекте company
// 1.   создаем новый объект const superUserCopy   и передаем туда сам объект {...superUser,
// 2.   далее передаем тот объект который хотим изменить company : , дальше создаем новый объект
// 3.  ...superUser.company ,  catchPhrase: "new-code phrase"  и указываем  ключ:"значение"  которого хотим поменять.
const superUserCopy = {...superUser, company: {...superUser.company, catchPhrase: "new-code phrase"}}
console.log(superUserCopy)



//поменяем таким же образом координаты
const superUserCopy2 = {
    ...superUser, //сделали копию объекта superUser
    address: {...superUser.address, //сделали копию объекта address
        geo:{...superUser.address.geo, lng: "+99.9999"}}}; // объект geo перезаписали и положили туда то что лежало раньше  и одно из значений перезаписали {...superUser.address.geo , lng: "+99.9999"}



//поменяем таким же образом email
const superUserCopy3 = {
    ...superUser, email:"newusers@gmail.com"
}
console.log(superUserCopy3)