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
for (let index in books){
    console.log(books[index].rented > 1);
    }
console.log("********************************************************")

console.log("********************* Le livre le plus empruntés ?")
let array = books.filter(book => (book.rented));
for (let index in array){
    console.log(Math.max(array[index].rented));
    }
console.log("*******************************************************")

console.log("********************* Le livre avec l'ID 873495 est :")
const bookId = books.find(book => book.id === 873495);{
    console.log(bookId);
}
console.log("*******************************************************")

console.log("********************* Supprimer le livre avec l'ID 873495 est :")
const valueToRemove = 133712
const filteredBooks = books.filter(book => book !== valueToRemove);{
    console.log(filteredBooks)
}
console.log("*******************************************************")