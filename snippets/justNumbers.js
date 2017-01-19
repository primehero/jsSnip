/**
 * Copy paste the following script into a script tag and add the class 
 * 'num-only' on every single input that strictly needs to be a digit.
 */

let a=document.getElementsByClassName("num-only");Array.prototype.forEach.call(a,function(a){a.addEventListener("keydown",function(a){a.which>=48&&a.which<=57||8===a.which||13===a.which||9===a.which||a.preventDefault()})});