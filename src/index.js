import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const firstBook = {
  author: "Peter Attia MD",
  image: "./images/book1.jpg",
  title: "Outlive: The Science and Art of Longevity",
};

const secondBook = {
  author: "Jordan Moore",
  image:
    "https://m.media-amazon.com/images/I/51B7kuFwQFL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
  title: "Intersting Facts For Curious Minds",
};
const Booklist = () => {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        image={firstBook.image}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        image={secondBook.image}
      />
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Booklist />);
