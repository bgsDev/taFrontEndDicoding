const path = require('path');
const FFmpeg = require('fluent-ffmpeg');

const gify = new FFmpeg({
  source: path.resolve(__dirname, 'src/public/loading3.gif'),
});

gify.clone()
  .withVideoCodec('libx264')
  .withFps(25)
  .toFormat('mp4')
  .saveToFile(path.resolve(__dirname, 'src/public/ffmpeg/load.mp4'));

gify.clone()
  .withFps(25)
  .toFormat('webm')
  .saveToFile(path.resolve(__dirname, 'src/public/ffmpeg/load.webm'));
