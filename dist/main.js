/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/fibonacci.js":
/*!**************************!*\
  !*** ./src/fibonacci.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fibsIteration: () => (/* binding */ fibsIteration),
/* harmony export */   fibsRec: () => (/* binding */ fibsRec)
/* harmony export */ });
function fibsIteration(n) {
  let arr = [0, 1];
  for (let i = 0; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
    // if (i === 0 || i === 1) {
    //     arr.push(i);
    // } else {
    //     arr.push(arr[i - 1] + arr[i - 2]);
    // }
  }

  return arr;
}

function fibsRec(n) {
  if (n <= 2) {
    return [0, 1]
  } else {
    let previousArr = fibsRec(n-1);
    previousArr.push(previousArr[previousArr.length-1] + previousArr[previousArr.length-2]);
    return previousArr;
  }
}






/***/ }),

/***/ "./src/mergesort.js":
/*!**************************!*\
  !*** ./src/mergesort.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mergesort: () => (/* binding */ mergesort)
/* harmony export */ });
function mergesort(arr) {
    ///EX [2,1,6,3,5,4,8,7]
    //[2,1,6,3] [5,4,8,7]
    //[2,1] [6,3] [5,4] [8,7]
    //sort the left half of the array (assuming n > 1)
    //sort the right half of the array (assuming n > 1)
    //merge the two halves together
    let left = arr.slice(0, arr.length/2);
    let right = arr.slice(arr.length/2);

    //Base case:
    //If one element exists it's already sorted
    if (arr.length === 1) {
        return arr;
    } 

    
    
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fibonacci__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fibonacci */ "./src/fibonacci.js");
/* harmony import */ var _mergesort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mergesort */ "./src/mergesort.js");



// console.log(fibsIteration(7));

console.log((0,_fibonacci__WEBPACK_IMPORTED_MODULE_0__.fibsRec)(6))

console.log((0,_mergesort__WEBPACK_IMPORTED_MODULE_1__.mergesort)([44,6,33,4,87,3,9,124]));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNrQztBQUNsQztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ25CQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05zRDtBQUNkO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLFlBQVksbURBQU87QUFDbkI7QUFDQSxZQUFZLHFEQUFTLDBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS8uL3NyYy9maWJvbmFjY2kuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS8uL3NyYy9tZXJnZXNvcnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZmlic0l0ZXJhdGlvbihuKSB7XHJcbiAgbGV0IGFyciA9IFswLCAxXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8PSBuOyBpKyspIHtcclxuICAgIGFyci5wdXNoKGFycltpIC0gMV0gKyBhcnJbaSAtIDJdKTtcclxuICAgIC8vIGlmIChpID09PSAwIHx8IGkgPT09IDEpIHtcclxuICAgIC8vICAgICBhcnIucHVzaChpKTtcclxuICAgIC8vIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgYXJyLnB1c2goYXJyW2kgLSAxXSArIGFycltpIC0gMl0pO1xyXG4gICAgLy8gfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGFycjtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlic1JlYyhuKSB7XHJcbiAgaWYgKG4gPD0gMikge1xyXG4gICAgcmV0dXJuIFswLCAxXVxyXG4gIH0gZWxzZSB7XHJcbiAgICBsZXQgcHJldmlvdXNBcnIgPSBmaWJzUmVjKG4tMSk7XHJcbiAgICBwcmV2aW91c0Fyci5wdXNoKHByZXZpb3VzQXJyW3ByZXZpb3VzQXJyLmxlbmd0aC0xXSArIHByZXZpb3VzQXJyW3ByZXZpb3VzQXJyLmxlbmd0aC0yXSk7XHJcbiAgICByZXR1cm4gcHJldmlvdXNBcnI7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBmaWJzSXRlcmF0aW9uLCBmaWJzUmVjIH07XHJcblxyXG5cclxuIiwiZnVuY3Rpb24gbWVyZ2Vzb3J0KGFycikge1xyXG4gICAgLy8vRVggWzIsMSw2LDMsNSw0LDgsN11cclxuICAgIC8vWzIsMSw2LDNdIFs1LDQsOCw3XVxyXG4gICAgLy9bMiwxXSBbNiwzXSBbNSw0XSBbOCw3XVxyXG4gICAgLy9zb3J0IHRoZSBsZWZ0IGhhbGYgb2YgdGhlIGFycmF5IChhc3N1bWluZyBuID4gMSlcclxuICAgIC8vc29ydCB0aGUgcmlnaHQgaGFsZiBvZiB0aGUgYXJyYXkgKGFzc3VtaW5nIG4gPiAxKVxyXG4gICAgLy9tZXJnZSB0aGUgdHdvIGhhbHZlcyB0b2dldGhlclxyXG4gICAgbGV0IGxlZnQgPSBhcnIuc2xpY2UoMCwgYXJyLmxlbmd0aC8yKTtcclxuICAgIGxldCByaWdodCA9IGFyci5zbGljZShhcnIubGVuZ3RoLzIpO1xyXG5cclxuICAgIC8vQmFzZSBjYXNlOlxyXG4gICAgLy9JZiBvbmUgZWxlbWVudCBleGlzdHMgaXQncyBhbHJlYWR5IHNvcnRlZFxyXG4gICAgaWYgKGFyci5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICByZXR1cm4gYXJyO1xyXG4gICAgfSBcclxuXHJcbiAgICBcclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgeyBtZXJnZXNvcnQgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZmlic0l0ZXJhdGlvbiwgZmlic1JlYyAgfSBmcm9tIFwiLi9maWJvbmFjY2lcIjtcclxuaW1wb3J0IHsgbWVyZ2Vzb3J0IH0gZnJvbSBcIi4vbWVyZ2Vzb3J0XCI7XHJcblxyXG4vLyBjb25zb2xlLmxvZyhmaWJzSXRlcmF0aW9uKDcpKTtcclxuXHJcbmNvbnNvbGUubG9nKGZpYnNSZWMoNikpXHJcblxyXG5jb25zb2xlLmxvZyhtZXJnZXNvcnQoWzQ0LDYsMzMsNCw4NywzLDksMTI0XSkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==