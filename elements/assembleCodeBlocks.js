function assembleCodeBlocks() {
  for (var i = 0; i < 12; i++) {
    createMenu();
    createMonth(i);
    createCopyrightNote();
    createCopyrightNote2();
  }
}

export default assembleCodeBlocks;

