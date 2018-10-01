// const axios = require('axios');
// const getPixels = require('get-pixels');
const url = 'https://media2.giphy.com/media/l3vRfhFD8hJCiP0uQ/giphy.gif';
const localURL = '../../assets/gifs/excitedDoggo.gif';

var gifFrames = require('gif-frames');
var fs = require('fs');

gifFrames({ url: url, frames: 'all', outputType: 'png' })
  .then(function (frameData) {
    console.log(frameData[0].getImage());
    // frameData[0].getImage().pipe(fs.createWriteStream('firstframe.jpg'));
  });




// fetch(url)
//   .then(res => res.blob()) // Gets the response and returns it as a blob
//   .then(blob => {
//     // Here's where you get access to the blob
//     // And you can use it for whatever you want
//     // Like calling ref().put(blob)

//     // Here, I use it to make an image appear on the page
//     let objectURL = URL.createObjectURL(blob);
//     let myImage = new Image();
//     myImage.src = objectURL;
//     myImage.src
//     // document.getElementById('myImg').appendChild(myImage)
//   });