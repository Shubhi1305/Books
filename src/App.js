import Books from"./components/Books"
import BookByTitle from "./components/BookByTitle"
import BookByAuthor from "./components/BookByAuthor"
import AddBookForm from "./components/AddBookForm"

export default function App(){
  return(
    <main>
      
      <Books />

      <BookByTitle title={"Shoe Dog"} />

      <h1>Books by Harper Lee</h1>
      <BookByAuthor author={"Harper Lee"} />
    </main>
  )
}
