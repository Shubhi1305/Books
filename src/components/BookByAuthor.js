import useFetch from "../useFetch";

const BookByAuthor = ({ author }) => {

    const { data, loading, error } = useFetch(`http://localhost:3000/books/bookAuthor/${author}`)
    console.log(data)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (

        <ul>  
            {data ? data.map(book => (
                <li key={book._id}>{book.title}</li>
        )) : <p>No book found.</p>}

        </ul>
     
    )
}

export default BookByAuthor;