import useFetch from "../useFetch";

const BookByTitle = ({ title }) => {

    const { data, loading, error } = useFetch(`http://localhost:3000/books/${title}`)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
    <div>
        {data ? data.map(book => (
            <div key={book._id}>
            <h1>{book.title}</h1>
            <p><strong>Author: </strong>{book.author}</p>
            <p><strong>Release Year: </strong>{book.publishedYear}</p>
            <p><strong>Genre: </strong>{book.genre.join(", ")}</p>
            </div>
        )) : <p>No book found.</p>}
    </div>
    )

    }

export default BookByTitle;