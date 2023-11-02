const express = require('express');
const app = express();
const port = 4000;

const indexRoute = require("./routes/index");
const aboutRoute = require("./routes/about");

app.use(express.static("public"));

app.use('/', indexRoute)
app.use('/about', aboutRoute)

app.get('/', (rec, res) => {
    res.send("Hello World");
  });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});