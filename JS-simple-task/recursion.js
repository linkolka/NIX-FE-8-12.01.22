function checkNumber(num) {

while(num >= 3){
  if(num % 3 === 0) {
  num /=3;
  }
  else {
  num -= 5;
  }
}

if (num === 1) {
return true;
} else {
return false;
}

}

console.log(checkNumber(13));
