function bmi(mass , height)
{
    let BMI = mass / (height * height);
    return BMI;
}

var massMark = 10;
var heightMark = 10;
var massJohn = 20;
var heightJohn = 20;

var markbmi = bmi(massMark , heightMark);
var Jhonbmi = bmi(massJohn ,heightJohn);

console.log(markbmi);
console.log(Jhonbmi);