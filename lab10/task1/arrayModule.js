Array.prototype.odd = function() { return this.filter(item => item % 2 !== 0);};
Array.prototype.even = function() { return this.filter(item => item % 2 === 0);};
module.exports = Array;