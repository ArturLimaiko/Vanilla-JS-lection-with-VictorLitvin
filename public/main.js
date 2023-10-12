const students = [
    {
        name: "Alex",
        age: 20,
        isMarried: true,
        scores: 100
        //isStudent: true
    },
    {
        name: "Tanya",
        age: 27,
        isMarried: true,
        scores: 531
        //isStudent: true
    },
    {
        name: "Gena",
        age: 22,
        isMarried: true,
        scores: 230
        //isStudent: true
    },
    {
        name: "Alex",
        age: 54,
        isMarried: true,
        scores: 146
        //isStudent: true
    },
];

// const names = ["Alex", "Tanya", "Gena", "Alex"]

// const getStudentNames = (array) => {
//     //создадим пустой массив куда будем класть результат
//     const result = [];
//
//     //функция которая будет получать значение для результирующего масисва
//     //берем элемент исходного массива el и из него получаем el.name
//     const getValueForResultArray = el => el.name
//     //далее запускаем цикл для работы поочередно с элементами исходного массива
//     //проверяем длину массива i < array.length
//     for (let i = 0; i < array.length; i++) {
//     // в новый массив  под 0 индексом result[i] берем то значение которое вернет наша функция будучи вызваная
//     // с итем элементом  исходного массива getValueForResultArray(array[i])
//         result[i] = getValueForResultArray(array[i])
//     }
//     //...
//     return result
// }
// console.log(getStudentNames(students))


//
// const getUpdatedStudents = (array) => {
//     const result = [];
//     const getValueForResultArray = el => ({...el,isStudent: true})
//     for (let i = 0; i < array.length; i++) {
//         result[i] = getValueForResultArray(array[i])
//     }
//
//     return result
// }
//
// console.log(getUpdatedStudents(students))


//УНИВЕРСАЛЬНАЯ ФУНКЦИЯ КОТОРОЙ МОЖНО КАЖДЫЙ РАЗ ПОДКИДЫВАТЬ РАЗНЫЕ КОЛБЕКИ
//получаем преобразованный массив - в параметры передаем исходный массив а 2 параметром -
// функцию в которой будет инкапсулирована логика преобразования каждого элемента исходного массива
const getMappedArray = (array, func) => {
    //создадим пустой массив
    const result = [];
    // бежим циклом
    for (let i = 0; i < array.length; i++) {
        // используем функцию которую передаем.в зависимости от того что мы хотим получить
        result.push(func(array[i]))
    }
// возвращаем  новый массив
    return result
}

console.log(getMappedArray(students, el => el.name))
console.log(getMappedArray(students, el => ({...el, isStudent: true})))
console.log(students.map(el => el.name))
console.log(students.map(el => ({...el, isStudent: true})))


//напишем функцию которая фильтруем элементы
// Примерно так под капотом устроен метод фильтр
// исходный массив array и функцию func ,передаем в параметры
const getFilteredArray = (array, func) => {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        // проверям на соответствие условию элемента - если функция возвращает true то
        if (func((array[i])) === true) {
            //пушим в новый массив
            result.push((array[i]))
        }
    }
    return result;
}

//берем студентов и проверяем есть ли такие у кого >= 100 баллов
console.log(getFilteredArray(students, st => st.scores >= 100))


//Используем метод filter
//берем студентов и проверяем есть ли такие у кого >= 100 баллов
console.log(students.filter((s) => s.scores >= 100))
// console.log(students.filter(s=> s.scores >= 100)) более сокращенно убрали ковычки.


//КОНТЕКСТ ВЫЗОВА THIS
//this - контекст вызова; тот кто будет использовать в качестве метода ;
//тот кто стоит перед точкой


//1. создали НЕ СТРЕЛОЧНУЮ А ОБЫЧНУЮ функцию getMappedArrayWithContext ( СТРЕЛОЧНЫЕ ФУНКЦИИ С КОНТЕКСТОМ НЕ ИСПОЛЬЗУЮТСЯ!!!)
//2. она не получает массив в параметрах
//3. получаем массив в качестве контекста вызова
//4. тебя какой то массив будет вызывать как свой собственный метод, и этот массив - ты проверь у него длину
//5.  и перебери все элементы  того массива который тебя будет вызывать.
function getMappedArrayWithContext(func) {
    const result = [];
    //проверь длину у массива this.length // меняем слово array  на this.
    for (let i = 0; i < this.length; i++) {
        result.push(func(this[i]))
    }
    return result;
}

//назовем функцию myMap// и скажем - пускай у наших массивов появится метод myMap
//и эта функция getMappedArrayWithContext используется у всех массивов под именем myMap
Array.prototype.myMap = getMappedArrayWithContext

console.log(students.myMap(el => el.name))


//МЕТОД FIND
// 1. получает array и функцию( которая будет находить совпадение в массиве)
// 2. если совпало то возвращает найденый элемент в массиве
// 3. проходимся по циклу i < array.length
// 4. и проверяем с помощью функции func - array[i] ,
// 5. если вернула true то возвращаем найденный элемент и выходим из функции return array[i];
// 6. одновременно с выходом из функции обрывается выполнение
const myFind = (array, func) => {
    for (let i = 0; i < array.length; i++) {
        if (func(array[i]) === true) {
            return array[i];
        }
    }
}
//найдем в консоли в массиве со студентами Alex
console.log(myFind(students, el => el.name === 'Alex')) //{name: 'Alex', age: 20, isMarried: true, scores: 100}