import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import Header from './Header';
import BookList from './BookList';
import BookForm from './BookForm';

function App() {
  const [books, setBooks] = useState([]);
  
  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const deleteBook = (bookId) => {
    const updatedBooks = books.filter((book) => book.id !== bookId);
    setBooks(updatedBooks);
  };

  return (
    <div>
      <Header />
      <BookForm addBook={addBook} />
      <BookList books={books} deleteBook={deleteBook} />
    </div>
  );
}

export default App