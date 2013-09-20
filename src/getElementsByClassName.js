// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
    function walkTheDOM (node) {
        debugger;
        var node = node.firstChild;
        while (node) {
            walkTheDOM(node);
            node = node.nextSibling;
        }
    }
    walkTheDOM(document.body);
};
