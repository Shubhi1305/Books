import { useState } from "react";
import useFetch from "../useFetch";

const Books = () => {
    const { data, loading, error } = useFetch("http://localhost:3000/books")
    const [successMessage, setSuccessMessage] = useState("")

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const handleDelete = async (bookId) => {
        try{
            const response = await fetch(`http://localhost:3000/books/${bookId}`,
                { method : "DELETE"},
            );
            if(!response.ok){
                throw "Failed to delete book."
            }
            const data = await response.json()
            if(data){
                setSuccessMessage("Book deleted successfully.")
            }

        } catch(error){
            console.log(error)
        }

    }

return (
    <div>
      <h1>All Books</h1>
    <ul>
        {data ? data.map(book => (
            <li key={book._id}>{book.title}{" "}
            <button onClick={() => handleDelete(book._id)}>Delete</button>{" "}
            <br /><br /></li>
        )) : <p>No book found.</p>}
    </ul>
    <p>{successMessage}</p>
    </div>
    )
}

export default Books;