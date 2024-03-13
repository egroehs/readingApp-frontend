
import { useEffect, useState } from "react";
import ReadingApp from "./components/ReadingApp"
import { addBooks, getAllBooks, updateBooks, deleteBook } from "./utils/handleApi.js";

function App() {

  const [books, setBooks] = useState([])
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [year, setYear] = useState("")
  const [review, setReview] = useState("");
  const [notes, setNotes] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [bookId, setBookId] = useState("")

  useEffect(() => {
    getAllBooks(setBooks)
  }, [])

  const updateMode = (_id, title, author, year, review, notes) => {
    setIsUpdating(true)
    setTitle(title)
    setAuthor(author)
    setYear(year)
    setReview(review)
    setNotes(notes)
    setBookId(_id)
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Reading Tracker</h1>

        <div className="top">
          <input
            className="title"
            type="text"
            placeholder="Books title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="author"
            type="text"
            placeholder="Authors name..."
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <input
            className="year"
            type="number"
            placeholder="Year of reading..."
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
          <input
            className="review"
            type="number"
            placeholder="1/10..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
          <input
            className="notes"
            type="text"
            placeholder="Write your opinion..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />

          <div
            className="btn"
            onClick={
              isUpdating
                ? () =>
                    updateBooks(
                      bookId,
                      title,
                      setTitle,
                      author,
                      setAuthor,
                      year,
                      setYear,
                      review,
                      setReview,
                      notes,
                      setNotes,
                      setBooks,
                      setIsUpdating
                    )
                : () =>
                    addBooks(
                      title,
                      setTitle,
                      author,
                      setAuthor,
                      year,
                      setYear,
                      review,
                      setReview,
                      notes,
                      setNotes,
                      setBooks
                    )
            }
          >
            {isUpdating ? "Editing" : "Add Book"}
          </div>
        </div>

        <div className="list">
          {books.map((item) => (
            <ReadingApp
              key={item._id}
              title={item.title}
              author={item.author}
              year={item.year}
              review={item.review}
              notes={item.notes}
              updateMode={() =>
                updateMode(
                  item._id,
                  item.title,
                  item.author,
                  item.year,
                  item.review,
                  item.notes
                )
              }
              deleteBook={() => deleteBook(item._id, setBooks)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
