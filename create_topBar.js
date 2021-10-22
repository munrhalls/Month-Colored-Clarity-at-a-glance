const create_topBar = function () {
  // C O N T E N T
  getEl_loopF("title", content_title);
  getEl_loopF("about", content_about);
  function content_title(el) {
    let letters = "Project Time Blocks In Calendar".split("");
    for (let i = 0; i < letters.length; i++) {
      let letter = document.createElement("letter");
      letter.className = "colorLetter";
      letter.innerText = letters[i];
      letter.style.userSelect = "none";
      letter.style.color = colors[i % 7];
      letter.style.letterSpacing = "1px";
      el.appendChild(letter);
    }
  }
  function content_about(el) {
    el.innerText = "ABOUT";
    el.style.userSelect = "none";
  }

  // S T Y L E
  let title_height = "3rem";
  let title_bgColor = "#000000";
  let title_color = "#ffffff";
  let title_padding = "0.5rem";
  getEl_loopF("topBar", style_topbar);
  getEl_loopF("title", style_title);
  getEl_loopF("about", style_about);

  function style_topbar(el) {
    el.style.display = "flex";
    // el.style.background = title_bgColor;
    el.style.background = "blue";
    el.style.height = "100%";
    el.style.borderBottom = "1px solid #ffffff";
  }
  function style_title(el) {
    el.style.display = "flex";
    el.style.alignItems = "center";
    el.style.paddingLeft = "0.25rem";
    el.style.background = title_bgColor;
    el.style.height = title_height;
    el.style.color = "#ffffff";
    el.style.fontSize = "1rem";
    el.style.borderRight = "1px solid #ffffff";
    el.style.letterSpacing = _letterSpacing + "rem";
    const colorLetters = el.getElementsByClassName("colorLetter");
    for (let i = 0; i < colorLetters.length; i++) {
      colorLetters[i].style.paddingLeft = _letterSpacing + "rem";
    }
    colorLetters[colorLetters.length - 1].style.marginRight = "0.5rem";
  }
  function style_about(el) {
    el.style.color = title_color;
    el.style.padding = "0.25rem";
    el.style.display = "flex";
    el.style.alignItems = "center";
    el.style.textAlign = "center";
    el.style.justifyContent = "center";
    el.style.paddingLeft = "0.25rem";
    el.style.background = title_bgColor;
    el.style.height = title_height;
    el.style.color = "#ffffff";
    el.style.fontSize = "1rem";
    el.style.borderRight = "1px solid #ffffff";
    el.style.letterSpacing = _letterSpacing + "rem";
  }
};

export default create_topBar;
