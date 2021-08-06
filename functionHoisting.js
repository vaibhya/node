// var outputValue = 'first string'; 
// (function() { 
//   console.log(outputValue);
//   var outputValue = 'local string'; 
// })();

// hoistFunc(); // "Functions hoist too!"
// function hoistFunc() {
//     console.log("Functions hoist too!");
// }

// TypeError: Undefined
nonHoistedFunc();

var nonHoistedFunc = function () {
    console.log("This will not work!");
};