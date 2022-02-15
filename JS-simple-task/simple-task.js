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
