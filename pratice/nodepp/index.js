import express, { Router } from "express";

const app = express();
const router = new Router();

app.use(router);
app.use(express.json());

router.get("/", (req, res) => {
  res.send("Home page");
});

router.get("/about", (req, res) => {
  res.send("About Page");
});

router.get("/contact", (req, res) => {
  res.send("Contact Page");
});

router.use((req, res) => {
  res.send("404 not found");
});

router.get("/user/:id", (req, res) => {
  const id = req.params.id;
  res.send(`User ID: ${id}`);
});

router.get("/user/search", (req, res) => {
  const data = req.query;
  res.send(data.name, data.age);
});

router.post("/user", (req, res) => {
  const data = req.body;
  res.send(`User ${data.name} created successfully`);
});

const users = [];
router.post("/users", (req, res) => {
  const data = req.body;
  users.push(data);
  res.send(`User added successfully`, users);
});

router.get("/users", (req, res) => {
  res.status(200).json(users);
});

router.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((item) => item.id == id);
  res.json(user);
});

router.put("/users/:id", (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const user = users.find((item) => item.id == id);
  if (!user) {
    return res.send("User not found");
  }
  user.name = data.name;

  return res.send("Data updated");
});

app.listen(3000, () => {
  console.log("Serber is running ");
});

let p1 = new Promise((res, rej) => {
  let sucess = true;
  if (sucess) {
    res("Data Fetched");
  }
  rej("Data not fetched");
});

p1.then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});
