// basic operator
// point1
console.log(population/2); 
// point2
population++;
console.log(population);
// point3
console.log(population > 6);
// point4
console.log(population < 33);
// point5
const description = country + 'is in' + continent + ', and its' + population + 'million people speak' + language;
console.log(description);


//logical operator
if(language === 'english' && population < 50 && !isIsland){
    console.log('You should live in ${country} :)');
}
else{
    console.log('${country} does not meet all the criteria :(');
}