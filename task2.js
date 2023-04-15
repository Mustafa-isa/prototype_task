Array.prototype.filternum = function (callback) {
  const filtered = [];
  this.forEach(value => {
      if (callback(value)) {
          filtered.push(value);
      }
  })
  return filtered;

}

console.log(arr.filternum( value => {
  return value % 2 === 0;
}));

