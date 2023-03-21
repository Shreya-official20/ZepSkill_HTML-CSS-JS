// sol1
let larger;
if(num1 >= num2 && num1 >= num3){
    larger = num1;
}
else if(num2 >= num1 && num2 >= num3){
    larger = num2;
}
else{
    larger = num3;
}
console.log("larger no:" + larger);

// sol2
// let num;
// if(num < 1 || num > 100)
// {
// ;
// }
// else if(num >= x && num <= y){
//     return true;
// }
// else{
//     return false;
// }

function range(x){
    if (x >= 1 && x <= 100) {
        console.log("In range");
      } else {
        console.log("Not in range");
      }
}
range(44);
