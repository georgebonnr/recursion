// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  var returnArr = [];
  var returnMatches = function (node) {
    if (_.contains(node.classList, className)) {
      returnArr.push(node)
    };
    var node = node.firstChild;
    while (node) {
      returnMatches(node);
      node = node.nextSibling;
    }
  }

  returnMatches(document.body)

  return returnArr;
};