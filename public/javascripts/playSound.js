const codeGroupsArray = [
  [81, 87, 69, 82, 84, 89, 85, 73], //melody
  [66, 78, 77, 188, 71, 72, 74, 75], //chords
  [90, 88, 67, 86], // drums
  [65, 83, 68, 70] // vox
]


function playSound(e, keyCodeArray) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return; 
  if(!keyCodeArray.includes(e.keyCode)) return;
  
  audio.currentTime = 0; 
  audio.play();
  
  const index = keyCodeArray.indexOf(e.keyCode);
  keyCodeArray.splice(index, 1);
  
  keyCodeArray.forEach(function(code) {
    // pauses each keyCode in the chordCodes array
    document.querySelector(`audio[data-key="${code}"]`).pause();
  }); 
  
  key.classList.add('playing');
  
  console.log(keyCodeArray);
  keyCodeArray.push(e.keyCode);
};



function removeTransition(e) {
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));



codeGroupsArray.forEach(function(codeGroup){
  window.addEventListener('keydown', function(){
    playSound(event, codeGroup);
  });
});

  
