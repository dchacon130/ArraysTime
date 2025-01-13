const books = [
    {
      "year": "2020",
      "title": "Book Title 1",
      "autor": "Author 1"
    },
    {
      "year": "2019",
      "title": "Book Title 2",
      "autor": "Author 2"
    },
    {
      "year": "2018",
      "title": "Book Title 3",
      "autor": "Author 3"
    },
    {
      "year": "2017",
      "title": "Book Title 4",
      "autor": "Author 4"
    },
    {
      "year": "2016",
      "title": "Book Title 5",
      "autor": "Author 5"
    }
  ]

  const books2 = [
    {
      "year": "2025",
      "title": "queen",
      "autor": "Freddie Mercury"
    }
  ]

  const bookEmpy = ['Diego', 'Alexander', 'Chacon']

//Imprimir todos los libros
console.log('* Print all books: ')
books.forEach(book => console.log(book))

//Agregar un nuevo libro
console.log('* Adding a new book: ')
const newBook = {
    "year": "1605",
    "title": "Don Quijote de la mancha",
    "autor": "Miguel de Cervantes"
}
books.push(newBook)
books.forEach(book => console.log(book))

//Buscar un libro por titulo
console.log('* Search a book: ')
const byTitle = "Book Title 4"
const bookResult = books.find(libro => libro.title === byTitle)
if (bookResult){
    console.log(bookResult)
}else{
    console.log(`Book ${byTitle} not found`)
}

//Eliminiar un libro
console.log('* Delet a book: ')
const yearToDelete = '2016'
const result = books.findIndex(libro => libro.year === yearToDelete)
console.log(`Posicion: ${result}`)
if(result !== -1){
    books.splice(result, 1)
    books.forEach(book => console.log(book))
}else{
    console.log(`Book ${yearToDelete} not found`)
}

//Unir dos arrays
console.log('* Unir dos arrays: ')
const allBooks = books.concat(books2)
console.log(allBooks)

//Busca el index de un campo
console.log('* Index Of: ')
const valueToSearch = 'Diego'
const resultIndexOf = bookEmpy.indexOf(valueToSearch)
if(resultIndexOf !== -1){
  console.log(`# of posicion: ${resultIndexOf}`)
}else{ 
  console.log(`Book ${valueToSearch} not found`)
}

//Array reverse
console.log('* Reverse Array: ')
const reversed = bookEmpy.reverse()
console.log(`Array reverse: ${reversed}`)

//Sin el primer elemento
console.log('* Shift: ')
const withoutFirstElement = bookEmpy.shift()
console.log(`Sin el primer elemento: ${withoutFirstElement}`)
console.log(bookEmpy)

//Ordenar arreglos
console.log('* Order by: ')
bookEmpy.unshift('Emmily', 'Claudia')
books.sort()
console.log(bookEmpy)
