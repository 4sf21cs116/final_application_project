
import React, { useState } from 'react';

function BookForm({ addBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: Date.now(),
      title,
      author,
      category,
    };
    addBook(newBook);
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <div>
      <h2 class="p-5">Add a New Book</h2>
      <form onSubmit={handleSubmit} class="p-4">
        <label class="fs-3 fw-bold">Title:</label>
        <input class=" placeholder-wave p-3 text-light bg-secondary border border-primary-subtle rounded-3"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label class="fs-3 fw-bold">Author:</label>
        <input class="  placeholder-wave p-3 text-light bg-secondary border border-primary-subtle rounded-3"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <label  class="fs-3 fw-bold " >Category:</label>
        <input class=" placeholder-wave p-3 text-light bg-secondary border border-primary-subtle rounded-3"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <button type="submit" class=" placeholder-glow btn btn-dark  ">Add Book</button>
      </form>
    </div>
  );
}

export default BookForm