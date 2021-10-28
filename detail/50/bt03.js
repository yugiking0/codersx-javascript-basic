function getExtensionFilename(filename) {
  // viết code ở đây.
  var index = filename.indexOf('.');
  return filename.slice(index + 1);
}

console.log(getExtensionFilename('anime.mp4'));
