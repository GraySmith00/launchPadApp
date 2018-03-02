// function playSound(e) 
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//     if(!audio) return; // stops the function from running
//     audio.currentTime = 0; //rewind to the start
//     audio.play();
//     key.classList.add('playing');
// };



  
  
  // array that will contain the keycodes of what is playing
  const isPlaying = [];

  
  function playChordSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // stops the function from running
    const chordCodes = [66, 78, 77, 188, 71, 72, 74, 75];
    if(!chordCodes.includes(e.keyCode)) return;
    audio.currentTime = 0; //rewind to the start
    audio.play();
    //make the chords exclusive
    
    makeExclusive(chordCodes, e);
    // const drumCodes = [90, 88, 67,86];
    // makeExclusive(drumCodes, e);
    
    
    // push the keycode into the isPlaying array
    isPlaying.push(e.keyCode);
    key.classList.add('playing');
    audio.onended = function() {
      const index = isPlaying.indexOf(e.keyCode)
      isPlaying.splice(index, 1)
    }
  };
  
  function playDrumSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // stops the function from running
    const drumCodes = [90, 88, 67,86];
    if(!drumCodes.includes(e.keyCode)) return;
    audio.currentTime = 0; //rewind to the start
    audio.play();
    
    //make the chords exclusive
    makeExclusive(drumCodes, e);
   
    // push the keycode into the isPlaying array
    isPlaying.push(e.keyCode);
    key.classList.add('playing');
    audio.onended = function() {
      const index = isPlaying.indexOf(e.keyCode)
      isPlaying.splice(index, 1)
    }
  };
  
  function playVoxSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // stops the function from running
    const voxCodes = [65, 83, 68, 70];
    if(!voxCodes.includes(e.keyCode)) return;
    audio.currentTime = 0; //rewind to the start
    audio.play();
    //make the chords exclusive
    
    makeExclusive(voxCodes, e);
    
    // makeExclusive(drumCodes, e);
    
    
    // push the keycode into the isPlaying array
    isPlaying.push(e.keyCode);
    key.classList.add('playing');
    audio.onended = function() {
      const index = isPlaying.indexOf(e.keyCode)
      isPlaying.splice(index, 1)
    }
  };
  
  function playMelodySound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // stops the function from running
    const melodyCodes = [81, 87, 69, 82, 84, 89, 85, 73, 79, 80];
    if(!melodyCodes.includes(e.keyCode)) return;
    audio.currentTime = 0; //rewind to the start
    audio.play();
    
    // // make exclusive
    // makeExclusive(melodyCodes, e);
    
    // push the keycode into the isPlaying array
    isPlaying.push(e.keyCode);
    key.classList.add('playing');
    audio.onended = function() {
      const index = isPlaying.indexOf(e.keyCode)
      isPlaying.splice(index, 1)
    }
  };
  

  // function to see if an element is in isPlaying array
  function isInIsPlaying(e) {
    for (let i = 0; i < isPlaying.length; i++) {
      if (isPlaying[i] === e.keyCode) {
        return true;
      }
    }
    return false;
  };
  

  // make exclusive function
  function makeExclusive(codeArray, e) {
    if (codeArray.includes(e.keyCode)) {
      const index = codeArray.indexOf(e.keyCode);
      codeArray.splice(index, 1);
    } 

    console.log(codeArray);
    codeArray.forEach(function(code) {
      document.querySelector(`audio[data-key="${code}"]`).pause();
      if (isInIsPlaying(code)) {
          const codeIndex = isPlaying.indexOf(code);
          isPlaying.splice(codeIndex, 1);
      }
    }); 
  };


  

  function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
  }

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  
  
  


  window.addEventListener('keydown', playChordSound);
  window.addEventListener('keydown', playDrumSound);
  window.addEventListener('keydown', playVoxSound);
  window.addEventListener('keydown', playMelodySound);
  
