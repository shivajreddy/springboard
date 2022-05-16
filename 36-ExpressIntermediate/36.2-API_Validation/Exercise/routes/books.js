const express = require("express");
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
    const book = await Book.create(req.body);
    const result = jsonschema.validate({ book }, bookschema);
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
