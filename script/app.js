//1.написать функцию  filterFalsyValues, которая принимает массив и возвращает массив без '', null, NaN, false, undefined, 0:

function filterFalsyValues(arr) {
  return arr.filter( item => Number.isNaN(item) ? false : item);
}
console.log(filterFalsyValues([5, 'asd', 'false', true, false, null, NaN, undefined,0]))//[5, 'asd', 'false', true]

// 2.написать функцию getMultipliedBigNumbers, которая принимает один прараметр  - массив чисел, и умножает  каждое число в массиве  само
// на себя, и возвращает массив с числами  больше 1000.

function getMultipliedBigNumbers(arr) {
  return arr.map((currentItem) => currentItem * currentItem ).filter (num => num > 1000);
}
console.log(getMultipliedBigNumbers([7, 12, 20, 50, 70, 100]))//[2500, 4900, 10000]

//3.написать функцию getArraysValuseSum ,которая принимает  массив, и возвращает сумму всех чисел в массиве, если элемент массива
// не число, а строка, то суммирует  кол-во букв в строке:

function getArraysValuseSum(arr) {
   return arr.reduce((result, item) => typeof(item) === 'string' ? item.length + result : typeof(item) === 'number' ? result + item : result,0);

}
console.log(getArraysValuseSum(['qwerty']));  //6
console.log(getArraysValuseSum(['400', 400])); //403
console.log(getArraysValuseSum(['100','100'])); //6
console.log(getArraysValuseSum([5, 100, 20])); //125
console.log(getArraysValuseSum([200, -100, 100, 1000])); //1200

//4.написать функцию reverseArray , которая разворачивает массив. Если в массиве больше 5-ти элементов, то функция должна вернуть исходный
//массив. Использовать можно только цикл for:
function reverseArray(arr) {return arr.reverse();}

console.log(reverseArray([5, 12, 17])) //[17, 12, 5]
console.log(reverseArray([5, 12, 17, 18, 20])) //[20, 18, 17, 12, 5]
console.log(reverseArray([5, 12, 17, 18, 20, 21])) //[21, 20, 18, 17, 12, 5]

//Остальные задания, которые нужно переделать без цикла for

//7.Написать функцию substituteElement которая принимает 3 параметра, 1-й - массив, 2-й - элемент, который заменить, 3-й - элемент, на
//на который заменить

function substituteElement(arr, el1, el2) {
  return arr.map((item) =>  item === el1 ?  el2 : item);
}
console.log(substituteElement(['pants', 'shirts', 'socks', 'sweaters'],'pants','converse'));


// //8.Написать функцию arraysHasElement** которая принимает 3 параметра, массив, массив и элемент
// // и возвращает true/false если их оба массива имеют этот элемент.

//use arr.find
function arraysHasElement(arr1, arr2, el) {
    let firstArrayHasThisElement = arr1.find((item) =>   item === el ? true : false,0);
    let secondArrayHasThisElement = arr2.find((item) =>  item === el ? true : false,0);
    return firstArrayHasThisElement === el && secondArrayHasThisElement === el;
}
console.log(arraysHasElement([1, 12, 24, 'papa', 'mama', true],[21, 11, 'paps', 24, 'mams', false],24))
