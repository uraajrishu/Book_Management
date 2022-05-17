const express = require('express');
const router = express.Router();
const {userLogin,createUser} = require("../controllers/userController")
const { createBook,getBooks, getBooksBYId, updateBook, deleteBook } = require("../controllers/bookController")
const {createReview,updatereview,deleteReview} = require("../controllers/reviewController")
const {authentication} = require('../middleware/middleware')

//User routes
router.post("/login", userLogin);
router.post("/register", createUser);

//Book routes
router.post("/books",authentication, createBook);
router.get("/books",authentication, getBooks);
router.get("/books/:bookId",authentication, getBooksBYId);
router.put("/books/:bookId",authentication,updateBook);
router.delete("/books/:bookId",authentication, deleteBook);

//Review

router.post("/books/:bookId/review", createReview);
router.put("/books/:bookId/review/:reviewId",updatereview);
router.delete("/books/:bookId/review/:reviewId", deleteReview);

module.exports = router;

//middleware.authentication,