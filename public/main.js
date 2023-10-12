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
const getMappedArray = (array,func ) => {
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

console.log( getMappedArray(students, el => el.name))
console.log( getMappedArray(students, el => ({...el,isStudent: true})))
console.log(students.map(el => el.name))
console.log(students.map(el => ({...el,isStudent: true})))



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
console.log(students.filter((s)=> s.scores >= 100))
// console.log(students.filter(s=> s.scores >= 100)) более сокращенно убрали ковычки.


