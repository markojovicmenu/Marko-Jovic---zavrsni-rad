// task1
var array1 = [11, 22, 33];
console.log(array1);

array1.push("Hello");
console.log(array1);

array1.shift();
console.log(array1);

array1.pop();
console.log(array1);



// task2
var object = {gde:"VivifyAcademy", sta: "Zavrsni rad", ko:"Menu ekpia"}
    object.kada = "02.02.2023";
    console.log(object);


    
// task3
var complexArray = [ 'nizovima', {key1: 'pristupamo', key2: 'ispisati', 
                        nizUnutarObjekta: ['vezbamo', 'cuvamo'] }, 
                        {key1: 'objektima', key2: 'podacima'}, 'nacin'];
       console.log("Zadatak u kojem "
       +complexArray[1].nizUnutarObjekta[0]+ " kako da "+complexArray[1].key1+
        " podacima sacuvanim u " +complexArray[0]+" i "+complexArray[2].key1+". Na ovaj "
        +complexArray[3]+ " omogucavamo da odredjeni string mozemo "+complexArray[1].key2+
         " sa razlicitim "+complexArray[2].key2+", u zavisnosti koje vrednosti "
         +complexArray[1].nizUnutarObjekta[1]+" u nizu i/ili objektu.");



// task4
var i = 1;
for ( i = 1 ; i<=100 ; i++) {
    if(i%3===0 && i%5===0){
        console.log("FizzBuzz");
    }else if (i%3===0) {
        console.log("Fizz");
}
    else if (i%5===0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}


// task5
var arrNumber = [2,5,9,7];
function sumArray (arrNumber){
    var sum= 0
    for (let x of arrNumber){
    sum +=x;
    }
return sum;
}
var result = sumArray(arrNumber);
console.log(result);