// start
// design goal
// - simple, clear, concise code blocks
// - simple, easy to read, trace and understand domino effect 
//   (whole app and each assembly of code blocks)
// - code blocks are easy to move around; take out; insert; re-assemble; no side effects; 
//   (threads not intertwined)
// - whole app, eacy assembly of code blocks, each code block - easy to scale, expand, build upon
// end

import assembleCodeBlocks from './elements/assembleCodeBlocks.js';

window.addEventListener('load', function () {
  console.log('This function is executed once the page is fully loaded');
  assembleCodeBlocks();
});

