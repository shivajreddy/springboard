const express = require("express");
const ExpressError = require('../expressError');
const books = new express.Router();

const Book = require("../models/book");

const bookschema = require('../schemas/bookschema.json');
const jsonschema = require('jsonschema');

/** GET / => {books: [book, ...]}  */
books.get('/test', (req, res, next) => {
  return res.status(333).send('reached test');
});

books.get("/", async function (req, res, next) {
  try {
    const books = await Book.findAll(req.query);
    return res.json({ books });
  } catch (err) {
    return next(err);
  }
});

/** GET /[id]  => {book: book} */

books.get("/:id", async function (req, res, next) {
  try {
    const book = await Book.findOne(req.params.id);
    return res.json({ book });
  } catch (err) {
    return next(err);
  }
});

/** POST /   bookData => {book: newBook}  */

books.post("/", async function (req, res, next) {
  try {
    /**
    {
      "isbn": "0691161518",
      "amazon_url": "http://a.co/eobPtX2",
      "author": "Matthew Lane",
      "language": "english",
      "pages": 264,
      "publisher": "Princeton University Press",
      "title": "Power-Up: Unlocking the Hidden Mathematics in Video Games",
      "year": 2017
    }
    */
    // validate data
    const input_validation = jsonschema.validate(req.body, bookschema);
    if (!input_validation.valid) {
      const all_errors = input_validation.errors.map(error => error.stack);
      console.log('detected errors')
      return next(new ExpressError(all_errors, 403));
    };

    // data validated
    const book = await Book.create(req.body);
    return res.status(201).json({ book });
  } catch (err) {
    return next(err);
  }
});

/** PUT /[isbn]   bookData => {book: updatedBook}  */

books.put("/:isbn", async function (req, res, next) {
  try {
    const book = await Book.update(req.params.isbn, req.body);
    return res.json({ book });
  } catch (err) {
    return next(err);
  }
});

/** DELETE /[isbn]   => {message: "Book deleted"} */

books.delete("/:isbn", async function (req, res, next) {
  try {
    await Book.remove(req.params.isbn);
    return res.json({ message: "Book deleted" });
  } catch (err) {
    return next(err);
  }
});

module.exports = books;
