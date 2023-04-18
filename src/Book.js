const Book = ({ image, title, author, index }) => {
  return (
    <article className="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>

      <h4>{author}</h4>
      <span className="number">{`# ${index + 1}`}</span>
    </article>
  );
};

export default Book;
