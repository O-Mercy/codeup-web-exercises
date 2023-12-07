export const getBookAndAuthor = async (id) => { // <-- notice the export keyword
    try {
        // Get the book data
        const bookUrl = `http://localhost:3000/books/${id}`;
        const bookResponse = await fetch(bookUrl);
        const book = await bookResponse.json();
        // Get the author data
        const authorUrl = `http://localhost:3000/authors/${book.authorId}`;
        const authorResponse = await fetch(authorUrl);
        const author = await authorResponse.json();
        // Add the author to the book object
        book.author = author;
        // Return the book object
        return book;
    } catch (error) {
        console.error(error);
    }
}