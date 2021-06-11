// nested container = index - 1; thus, no two arrays are vertically adjacent!!!
// let arr = [
//   'one',
//   'two',
//   'three',
//   ['nestedFour',
//     ['nestedNestedOne', 'nestedNestedTwo',
//       ['nestedNestedNestedOne',
//         [
//           'nestedNestedNestedNestedOne',
//           ['nestedNestedNestedNestedNestedOne'],
//           'nestedNestedNestedNestedTwo',
//           'nestedNestedNestedNestedThree'
//         ]
//       ]
//     ], 'nestedFive'],
//   'six',
//   ['nestedSeven', 'nestedEight']
// ];


// function assembleElements(arr, container) {
//   arr.forEach(function (el, index) {
//     if (typeof el == 'object') {
//       let name = arr[index - 1] || container;
//       let nestedContainer = document.getElementById(name);
//       let nestedArr = el;
//       console.log(nestedArr);
//       assembleElements(nestedArr, nestedContainer);
//     } else {
//       let div = document.createElement('div');
//       div.id = el
//       optional_borderify(div);
//       optional_textMark(div, el);
//       container.appendChild(div);
//     }
//   });
// }
// function optional_borderify(el) {
//   el.style.border = '1px solid black';
//   el.style.background = 'grey';
//   // el.style.height = '1rem';
//   // el.style.width = '1rem';
// }
// function optional_textMark(el, text) {
//   let span = document.createElement('span');
//   span.style.position = 'absolute';
//   span.style.top = '1rem';
//   span.style.left = '1rem';
//   span.innerText = text;
//   span.style.color = 'blue';
//   span.style.letterSpacing = '1px';
//   span.style.fontSize = '2.5rem';

//   el.style.position = 'relative';
//   el.appendChild(span);
// }
// assembleElements(containersArr, main);

