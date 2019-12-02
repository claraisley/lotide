const middle = function(array) {

  if (array.length === 1 || array.length === 2) {
    return [];
  } else if (array.length % 2 === 0) {
    let i = array.length/2;
    return [array[i -1], array[i]];
  } else {
    let i = Math.floor(array.length / 2);
    return [array[i]];
  }
};

module.exports = middle;

