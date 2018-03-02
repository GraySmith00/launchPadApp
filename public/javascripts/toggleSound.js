  // function playSound(e) {
  //   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  //   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  //   if(!audio) return; // stops the function from running
  //   const chordCodes = [66, 78, 77, 188, 71, 72, 74, 75];
  //   if(!chordCodes.includes(e.keyCode)) return;
  //   audio.currentTime = 0; //rewind to the start
  //   audio.play();
  //   //make the chords exclusive
    
    
  //   // takes e.keyCode out of the chordCodes array
  //   if (chordCodes.includes(e.keyCode)) {
  //       const index = chordCodes.indexOf(e.keyCode);
  //       chordCodes.splice(index, 1);
  //   } 
  
    
  //   chordCodes.forEach(function(code) {
  //     // pauses each keyCode in the chordCodes array
  //     document.querySelector(`audio[data-key="${code}"]`).pause();
  //     // takes each keycode that has been paused out of the isPlaying Array
  //     if (isInIsPlaying(code)) {
  //         const codeIndex = isPlaying.indexOf(code);
  //         isPlaying.splice(codeIndex, 1);
  //     }
  //   }); 
    
  //   // push the keycode into the isPlaying array
  //   isPlaying.push(e.keyCode);
    
  //   key.classList.add('playing');
    
  //   audio.onended = function() {
  //     const index = isPlaying.indexOf(e.keyCode)
  //     isPlaying.splice(index, 1)
  //   }
  // }; 
  
  
  // function toggleSound(e) {
  //   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  //   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
  //   if(!audio) return; // stops the function from running
  //   if (isInIsPlaying(e)) {
  //     audio.pause();
  //     const index = isPlaying.indexOf(e.keyCode);
  //     isPlaying.splice(index, 1);
  //   } else {
  //     audio.currentTime = 0; //rewind to the start
  //     audio.play();
      
  //     //make the chords exclusive
  //     const chordCodes = [66, 78, 77, 188];
  //     makeExclusive(chordCodes, e);
      
  //     // push the keycode into the isPlaying array
  //     isPlaying.push(e.keyCode);
  //     key.classList.add('playing');
  //   }
  //   //console.log(isPlaying);
  // };