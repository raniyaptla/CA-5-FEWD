// App.jsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MyForm from "./Components/Form";
import BooksList from "./Components/BookList";
import "./App.css";

function App() {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchChange = (value) => {
    setSearchInput(value);
  };

  return (
    <div className="app-container">
      <Routes>
        <Route path="/register" element={<MyForm />} />
        <Route path="/" element={<BooksList />} />
      </Routes>
    </div>
  );
}

export default App;
