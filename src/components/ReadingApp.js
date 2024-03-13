import React from "react"
import { BiEdit } from "react-icons/bi"
import { AiFillDelete } from "react-icons/ai"

const ReadingApp = ({
  title,
  author,
  year,
  review,
  notes,
  updateMode,
  deleteBook,
}) => {
  return (
    <div className="books">
      <div className="title">
        Title: <strong>{title}</strong></div>
      <div className="author">
        Author: <strong>{author}</strong>
      </div>
      <div className="year">Read in: <strong>{year}</strong></div>
      <div className="review">Rate: <strong>{review}</strong></div>
      <div className="notes">Notes: {notes}</div>
      <div className="icons">
        <BiEdit className="icon" onClick={updateMode} />
        <AiFillDelete className="icon" onClick={deleteBook} />
      </div>
    </div>
  );
};

export default ReadingApp;