  // // set url
  // let url = "sounds/drums/Drums4_Drop.wav";
  
  // // setup Web Audio Context
  // //===========================================
  // const context = new AudioContext();
  // const source = context.createBufferSource();
  // source.connect(context.destination);
  
  // // load buffer
  // //===========================================
  // const request = new XMLHttpRequest();
  // request.open('GET', url, true);
  // request.responseType = 'arraybuffer';
  // request.onload = function() {
  //   context.decodeAudioData(request.response, function(response) {
  //     // play sound after buffer has loaded
  //     source.buffer = response;
  //     source.start(0);
  //     source.loop = true;
  //   }, function() {console.error('request has failed');
  //   });
  // };
  // //request.send();