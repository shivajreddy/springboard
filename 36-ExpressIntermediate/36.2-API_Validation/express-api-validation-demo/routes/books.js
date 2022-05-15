const express = require("express");
const router = new express.Router();
const ExpressError = require("../expressError");
const jsonschema = require("jsonschema");
const bookSchema = require("../schemas/bookSchema.json");


router.get('/:isbn', (req, res, next) => {
  try {
    const isbn = req.params.isbn;
    if (!isbn) throw new ExpressError('isbn aint there', 404);
    return res.status(200).send('asldkfj');
  } catch (error) {
    return next(error);
  }
})

router.put('/:isbn', (req, res, next) => {
  try {
    const isbn = req.params.isbn;
    if (!isbn) throw new ExpressError('isbn aint there', 404);
    return res.status(200).send('asldkfj');
  } catch (error) {
    return next(error);
  }
})

router.delete('/:isbn', (req, res, next) => {
  try {
    const isbn = req.params.isbn;
    if (!isbn) throw new ExpressError('isbn aint there', 404);
    return res.status(200).send('asldkfj');
  } catch (error) {
    return next(error);
  }
})

router.post("/with-validation", function (req, res, next) {
  const result = jsonschema.validate(req.body, bookSchema);

  if (!result.valid) {
    // pass validation errors to error handler
    //  (the "stack" key is generally the most useful)
    let listOfErrors = result.errors.map(error => error.stack);
    let error = new ExpressError(listOfErrors, 400);
    return next(error);
  }

  // at this point in code, we know we have a valid payload
  const { book } = req.body;
  return res.json(book);
});
// end

router.post("/", function (req, res, next) {
  const bookData = req.body.book;

  if (!bookData) {
    // pass a 400 error to the error-handler
    let error = new ExpressError("Book data is required", 400);
    return next(error);
  }

  // (not implemented) insert book into database here

  return res.json(bookData);
});
// end

module.exports = router;
