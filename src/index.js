import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { books } from "./books";
import Book from "./Book";

const Title = () => {
  return <h1>Best seller Books</h1>;
};
const Booklist = () => {
  return (
    <>
      <Title> </Title>
      <section className="booklist">
        {books.map((book, index) => {
          return <Book {...book} key={book.id} index={index}></Book>;
        })}
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Booklist />);
