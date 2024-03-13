import axios from 'axios'


const baseUrl = "http://localhost:5001";

const getAllBooks = (setBooks) => {
    axios.get(baseUrl)
    .then(({data}) => {
        console.log('data --->', data);
        setBooks(data)
    })
}

const addBooks = (title, setTitle, author, setAuthor, year, setYear, review, setReview, notes, setNotes, setBooks) => {

    axios.post(`${baseUrl}/save`, {
      title: title,
      author: author,
      year: year,
      review: review,
      notes: notes,
    }).then((data) => {
        console.log(data);
        setTitle("");
        setAuthor("");
        setYear("");
        setReview("");
        setNotes("");
        getAllBooks(setBooks);
    })
  }
    
const updateBooks = (
    bookId, title, setTitle,
  author,
  setAuthor,
  year,
  setYear,
  review,
  setReview,
  notes,
  setNotes,
  setBooks, setIsUpdating
) => {
  axios.post(`${baseUrl}/edit`, {
    _id: bookId,
    title: title,
    author: author,
    year: year,
    review: review,
    notes: notes,
  }).then((data) => {
    setTitle("");
    setAuthor("");
    setYear("");
    setReview("");
    setNotes("");
    setIsUpdating(false)
    getAllBooks(setBooks)
  }).catch((err) => console.log(err))
  
};

const deleteBook = (_id, setBooks) => {
  axios.post(`${baseUrl}/delete`, {_id})
  .then((data) => {
    getAllBooks(setBooks)
  })
  .catch((err) => console.log(err))
}

export { getAllBooks, addBooks, updateBooks, deleteBook }