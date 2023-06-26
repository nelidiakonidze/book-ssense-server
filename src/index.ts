import express, { Request, Response } from "express";
import mongoose from "mongoose";
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
app.use(bodyParser.json()); // Parse JSON request bodies

const books = [
  {
    title: "book 1",
    genre: "drama",
    author: "abc",
    rating: 8,
  },
  {
    title: "book 2",
    genre: "drama",
    author: "abc",
    rating: 7,
  },
  {
    title: "book 3",
    genre: "drama",
    author: "abc",
    rating: 6,
  },
];
app.get("/books", (req: Request, res: Response) => {
  // Add your MongoDB code here to fetch books
  res.json({ books });
});

app.post("/books", (req: Request, res: Response) => {
  const { title, genre, author, rating } = req.body; // Assuming the book title is sent in the request body
  const newBook = {
    title,
    genre,
    author,
    rating,
  };

  books.push(newBook);
  res.json({ message: `Book with title '${title}' received successfully.` });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

mongoose
  .connect("mongodb://localhost:27017/bookstore", {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB", error);
  });
