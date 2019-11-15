//*** Le Genôme */

let array1 = "CCGUCGUUGCGCUACAGC".match(/.{1,3}/g);
console.log(array1)
switch(array1){
case "UCU" ,"UCC" ,"UCA" ,"UCG", "AGU" ,"AGC":
console.log("serine");
break;
case "CCU CCC CCA CCG":
console.log("proline");
break;
case "UUA UUG":
console.log("Leucine");
break;
case "UUU UUC":
console.log("Phénylalanine");
break;
case "CGU CGC CGA CGG AGA AGG":
console.log("Arginine");
break;
case "UAU UAC":
console.log("Tyrosine");
break;

default:
    console.log("Cette entrée n'est pas reconnue");
    break;
}