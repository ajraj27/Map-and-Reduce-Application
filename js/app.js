const videos=Array.from(document.querySelectorAll('[data-time]'));

const seconds=videos.map(video => video.dataset.time)
                    .map(vidSeconds => {
                      const [mins,secs]=vidSeconds.split(':').map(parseFloat);
                      return mins*60 + secs;
                    })
                    .reduce((total,secArray)=> total+secArray);

let secondsLeft=seconds;

const hours=Math.floor(secondsLeft/3600);
secondsLeft=secondsLeft%3600;

const mins=Math.floor(secondsLeft/60);
secondsLeft=secondsLeft%60;

console.log(hours , mins , secondsLeft);
