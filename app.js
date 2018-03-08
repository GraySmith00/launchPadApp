const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
  // const codeGroupsArray = [
  //   [81, 87, 69, 82, 84, 89, 85, 73], //melody
  //   [66, 78, 77, 188, 71, 72, 74, 75], //chords
  //   [90, 88, 67, 86], // drums
  //   [65, 83, 68, 70] // vox
  // ]
  const rowOneArray = [[81, "Q", "G#"], [87, "W", "A#"], [69, "E", "B"], [82, "R", "C#"], [84, "T", "D#(i)"], [89, "Y", "F"], [85, "U", "F#"], [73, "I", "G#"]];
  const rowTwoArray = [[65, "A", "VOX 1"], [83, "S", "VOX 2"], [68, "D", "VOX 3"], [70, "F", "VOX 4"], [71, "G", "Bmaj(VI)"], [72, "H", "C#maj(VII)"], [74, "J", "D#m(i)"], [75, "K", "Bbm(v)"]];
  const rowThreeArray = [[90, "Z", "INTRO DRUMS"], [88, "X", "VERSE DRUMS"], [67, "C", "BUILD DRUMS"], [86, "V", "DROP DRUMS"], [66, "B", "Bmajor(VI)"], [78, "N", "C#major(VII)"], [77, "M", "D#m(i)"], [188, "<", "Bbm(v)"]];
  const spaceBar = [[32, "spacebar", "All Sounds Off"]];
  res.render('index', { rowOneArray, rowTwoArray, rowThreeArray, spaceBar });
});




app.listen(process.env.PORT, process.env.IP, function() {
  console.log(`This server is cookin!`);
});