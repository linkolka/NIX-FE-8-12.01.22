//TASK1

function getAmount(arr) {
 	if(arr.length < 2) {
  	return 0;
  }
  
  let minNum = Math.min.apply(null, arr);
  let maxNum = Math.max.apply(null, arr);
 
  return maxNum - minNum;
}

console.log(getAmount([])); 


//TASK2 

function getStr(str, num) {
  let arr = str.split(' ');
  let result = [];

  for(let i = 0; i < arr.length; i++) {

    if(arr[i].length > num) {
    result.push(arr[i]);
    }
  } 

	return result;
}

console.log(getStr('Миксины могут быть также вызваны вне какого-либо правила', 5));


//TASK3

function getMissingElement(arr) {
let example = [0,1,2,3,4,5,6,7,8,9];
  
  for(let item of example) {
  if(!arr.includes(item)) {
  	return item;
  	}
  }
}
console.log(getMissingElement([9,2,4,5,7,0,8,6,1]));

//TASK4

function checkIncludingStr(str1, str2) {
  
  return str1.slice(-str2.length) === str2;
}

console.log(checkIncludingStr('abcabcd', 'bcd'));

//TASK5

function getAverageValues(arr) {
let result = [];
for (let i = 0; i < arr.length - 1; i++) {
  result.push((arr[i] + arr[i+1])/2);
  }
  return result;
}

console.log(getAverageValues([1, 3, 5, 1, -10]));

//TASK6

function getMaxNumberValue(num) {
  let arr = String(num).split('').sort((a, b) => a - b).reverse();
  
  return Number(arr.join(''));
 
}

console.log(getMaxNumberValue(42145));

//TASK7

const scores = {"A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3,"H": 10, "I": 200, "J": 100, "K": 114, "L": 100, "M": 25,"N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113,"T": 405, "U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23}

function checkName(name) {
let score = 0;
let result;
for (let item of name) {
  score += scores[item];
  }
  
  if(score <=60) {
  	result = "NOT TOO GOOD"
  } else if(score >= 61 && score <= 300) {
  result = "PRETTY GOOD";
  } else if(score >=301 && score <=599) {
  result = "VERY GOOD";
  } else if(score >=600) {
  result = "THE BEST";
  }
  
  return result;
}

console.log(checkName('OLYA'));

//TASK8

function countVowels(str) {
  let vowels = ['a','e','y','u','i','o'];
  let result = 0;
  
  for(let item of str) {
  
  if(vowels.includes(item.toLowerCase())) {
  	result++;
  	}
  }
  return result;
}

console.log(countVowels('Celebration'));

//TASK9

function removeABC(str) {
  let abc = ['a','b','c'];
  let result = '';
  
  for(let item of str) {
    if(!abc.includes(item.toLowerCase())) {
	result += item;
    }
  }
  
  if(result === str) {
  result = null;
  }
  return result;
}

console.log(removeABC('This might Be A bit hard'));

//TASK10

function getUniqueElements(arr1, arr2) {
arr2 = arr2.concat(arr1);
	/*Сначала была идея перед объединением массивов проверить есть ли одинаковые значения у массива 1 и массива 2, но потом подумала, что это имеет смысл только в том случае, если подразумевается, что в 
	внутри этих массивов нет повторяющихся значений
	   for(let item of arr1) {
	    if(!arr2.includes(item)) {
	      arr2.push(item);
	    }
	  } 
	  из условия я поняла, что в уникальные значения должны быть типа string, поэтому перевела их*/
  
  arr2.sort((a, b) => a - b);
  let result = [String(arr2[0])];
  
  for(let i = 0; i< arr2.length - 1; i++) {
  	if(arr2[i] !== arr2[i+1]) {
    result.push(String(arr2[i+1]));
    }
  }
 return result;
}

console.log(getUniqueElements([1, 2, 3], [100, 2, 1, 10]));

//TASK11

function getObjCopy(obj) {
	let arrKey = [];
  let arrValue = [];
  let result = {};
  
  for(let key in obj) {
  	arrValue.push(key);
    arrKey.push(obj[key]);
  }
  
  for (let i = 0; i < arrKey.length; i++) {
  	result[arrKey[i]] = arrValue[i];
  }
  
  return result;
}

console.log(getObjCopy({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));

//TASK12

function calculateDifference(obj, sum) {
let objSum = 0;

	for (let key in obj) {
  	objSum +=obj[key];
  }
  
  return objSum - sum;
}

console.log(calculateDifference({  skate: 200, painting: 200, shoes: 1 }, 400));

//TASK13

function rotations(str) {
	let rightRotations= [str];
	let leftRotations = [str];

	for (let i = 0; i < str.length-1; i++) {
		let itemRotated = leftRotations[i].slice(1)+ str[i];
		leftRotations.push(itemRotated);
	}

	for (let i = 0; i < str.length-1; i++) {
		let itemRotated = rightRotations[i].slice(-1) + rightRotations[i].slice(0,-1);

		rightRotations.push(itemRotated);
  
}

return `Вращение вправо - ${rightRotations}, Вращение влево - ${leftRotations}`;
}

console.log(rotations('abcd'));

//TASK14

function checkBrick(a,b,c,w,h) {
	return a<=w && b<=h || a<=h && b<=w || c<=w && b<=h ||c<=h && b<=w || a<=w && c<=h || a<=h && c<=w;
}

console.log(checkBrick(1,3,4,2,1));
