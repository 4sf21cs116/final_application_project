
import React from 'react';

function BookList({ books, deleteBook }) {
  return (
    <div>
      <h2 class="p-4 ">Book List</h2>
      <ul >
        {books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author}
            <button onClick={() => deleteBook(book.id)} class="btn btn-info">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;