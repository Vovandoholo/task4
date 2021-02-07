//1.написать функцию  filterFalsyValues, которая принимает массив и возвращает массив без '', null, NaN, false, undefined, 0:
// it can be simplified.
// As you remember to keep item in array - you should make return true.
// To remove item - you should make return false, but all your values are already falsy.
// you can just write return item; - will leave only truthy values in array


function filterFalsyValues(arr) {
  return arr.filter(function(item) {
   return item;
   if (Number.isNaN(item)) {
     return false;
   }
  });
    Number.isNaN(el)
}
console.log(filterFalsyValues([5, 'asd', 'false', true, false, null, NaN, undefined,0]))//[5, 'asd', 'false', true]

// 2.написать функцию getMultipliedBigNumbers, которая принимает один прараметр  - массив чисел, и умножает  каждое число в массиве  само
// на себя, и возвращает массив с числами  больше 1000.
//use return arr.map(....).filter(...)
function getMultipliedBigNumbers(arr) {
let calculator =  arr.map((currentItem) => currentItem * currentItem );
let result = calculator.filter (num => num > 1000);
return result;
}
console.log(getMultipliedBigNumbers([7, 12, 20, 50, 70, 100]))//[2500, 4900, 10000]

//3.написать функцию getArraysValuseSum ,которая принимает  массив, и возвращает сумму всех чисел в массиве, если элемент массива
// не число, а строка, то суммирует  кол-во букв в строке:
// arr.map((item) => {return  item === el1 ?  el2 : item;});
function getArraysValuseSum(arr) {
   return arr.reduce((result, item) =>
   { return  typeof(item) === 'string' ? item.length + result : typeof(item) === 'number' ? result + item : result;},0);

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
  let result = arr.map((item) => {return  item === el1 ?  el2 : item;});
return result;
}
console.log(substituteElement(['pants', 'shirts', 'socks', 'sweaters'],'pants','converse'));


// //8.Написать функцию arraysHasElement** которая принимает 3 параметра, массив, массив и элемент
// // и возвращает true/false если их оба массива имеют этот элемент.

//use arr.find
function arraysHasElement(arr1, arr2, el) {

    let firstArrayHasThisElement = arr1.find(function(item){
      if (item === el) {
        return  true;
      }
    },0);
    let secondArrayHasThisElement = arr2.find(function(item){
      if (item === el) {
        return  true;
      }
    },0);
    return firstArrayHasThisElement === el && secondArrayHasThisElement === el;
}
console.log(arraysHasElement([1, 12, 24, 'papa', 'mama', true],[21, 11, 'paps', 24, 'mams', false],24))
