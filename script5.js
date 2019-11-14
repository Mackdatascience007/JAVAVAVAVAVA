//*** Bibliothèque */

const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
    ];

    
console.log("********************* Est-ce que tous les livres ont été au moins empruntés une fois ?")
books.forEach(book => {
	if(book.rented > 1 )console.log("Tous les livres ont été empruntés au moins une fois"); 
	else console.log("Non, ce n'est pas le cas")
});
console.log("********************************************************")

console.log("********************* Le livre le plus empruntés ?")
let maxRented = books.sort(function (x, y) {
    return x.rented - y.rented;
    });
    console.log(maxRented[maxRented.length - 1].title);
console.log("*******************************************************")

console.log("********************* Le livre le moins empruntés ?")
let minRented = books.sort(function (x, y) {
    return x.rented - y.rented;
    });
    console.log(minRented[0].title);
console.log("*******************************************************")

console.log("********************* Le livre avec l'ID 873495 est :")
const bookId = books.find(book => book.id === 873495);{
    console.log(bookId);
}
console.log("*******************************************************")

console.log("********************* Supprimer le livre avec l'ID 113712 est :")
const delId = books.findIndex(book => {
	return book.id === 133712
})
console.log(books.splice(delId, 1));
console.log(books);
console.log("*******************************************************")

console.log("********************* Trier les livres par ordre alphabétique (sans l'ID 133712)")
let booksSorted = books.sort(function (x, y) {
    return x.title.localeCompare(y.title);
    });
    console.log(booksSorted);
console.log("*******************************************************")