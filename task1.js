Array.prototype.findMin = function() {
  let minVal = this[0];
  for (let i = 1; i < this.length; i++) {
    if (this[i] < minVal) {
      minVal = this[i];
    }
  }
  return minVal;
}

let arr = [1, 2, 3, 4, 5];
let minVal = arr.findMin();
console.log(minVal); // Output: 1