import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from './Book';
import '../App.css';
import KalviumBooks from './KalviumBooks';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar'; 


const BooksList = () => {
  const [books, setBooks] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://reactnd-books-api.udacity.com/books', {
          headers: { 'Authorization': 'whatever-you-want' }
        });

        setBooks(response.data.books);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []); // Fetch books on component mount

  const handleSearchChange = (searchValue) => {
    setSearchInput(searchValue);
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="container">
    <div className="navbar">
      <div className="left-section">
        <Link to="/" className='Kalviumbooks'><KalviumBooks /></Link>
      </div>
      <div className="center-section">
        <SearchBar onSearchChange={handleSearchChange}/>
      </div>
      <div className="right-section">
        <Link to="/register" className="register-link">Register</Link>
      </div>
    </div>

    <div className="content">
      {filteredBooks.map(book => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  </div>
  );
};

export default BooksList;
