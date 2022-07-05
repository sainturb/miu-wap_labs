let name = 'John Doe';
// exports = {
//   foo: function() {
//     console.log('foo');
//   },
//   bar: function() {
//     console.log('bar');
//   }
// }
// module.exports = {
//   baz: function() {
//     console.log('baz');
//   }
// }
module.exports.baz = function() {
  console.log('baz');
}
exports.foo = function() {
  console.log('foo');
};
// exports.bar = function() {
//   console.log('bar');
// };