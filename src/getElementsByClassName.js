// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
    function walkTheDOM (node) {
        nextNode = node.firstChild;
        while (nextNode) {
            walkTheDOM(nextNode);
            nextNode = nextNode.nextSibling;
        }
    }
    walkTheDOM(document.body);
};
