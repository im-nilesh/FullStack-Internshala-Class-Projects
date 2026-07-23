import express from "express";

const app = new express();
const port = 5100;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const books = [];

app.get("/", (req, res) => {
  res.send("learing APIs");
});

app.use(express.json());

app.post("/", (req, res) => {
  const { title, author, price } = req.body;
  const newBook = {
    id: Math.random() * 10,
    title: title,
    author: author,
    price: price,
  };

  books.push(newBook);
  res.send(books);
});
