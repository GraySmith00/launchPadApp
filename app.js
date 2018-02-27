const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
  res.render('index');
});




app.listen(process.env.PORT, process.env.IP, function() {
  console.log(`This server is cookin!`);
});