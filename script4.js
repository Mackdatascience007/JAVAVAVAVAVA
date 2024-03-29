//*** Startup Nation */

const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
    ];

console.log("********************* Entrepreneurs nés dans les années 70 :")
let celebrity = entrepreneurs.filter(entrepreneur => (entrepreneur.year >= 1970 && entrepreneur.year < 1980));
for (let index in celebrity){
    console.log(celebrity[index].first + " " + celebrity[index].last);
    }
console.log("********************************************************")

console.log("********************* Noms et prénoms des Entrepreneurs :")
for (let index in entrepreneurs){
    console.log(entrepreneurs[index].first + " " + entrepreneurs[index].last);
    }
console.log("********************************************************")

console.log("********************* Ages des entrepreneurs aujourd'hui :")
for (let index in entrepreneurs){
    let age = 2019 - entrepreneurs[index].year;
    console.log(entrepreneurs[index].first + " " + entrepreneurs[index].last + "----" + age + " ans");
    }
console.log("********************************************************")

console.log("********************* Noms des Entrepreneurs dans l'ordre alphabetique :")
lastName = []
entrepreneurs.forEach(entrepreneur =>{
	lastName.push(`${entrepreneur.last}`);
});
console.log(lastName.sort())
console.log("********************************************************")

