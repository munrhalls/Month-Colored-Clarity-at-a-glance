function createCopyrightNotes() {
  function note1() {
    const note1 = document.createElement('div');
    note1.classList.add('copyright');
    note1.style.letterSpacing = '0.25rem';
    note1.style.padding = '0.15rem';
    note1.innerText = 'Icons made by ';
    const link = document.createElement('a');
    link.href = 'https://icon54.com/';
    link.title = 'Pixel perfect';
    link.innerText = 'Pixel perfect';
    note1.appendChild(link);
    const betweenLinksText = document.createElement('span');
    betweenLinksText.innerText = ' from ';
    note1.appendChild(betweenLinksText);
    const linkTwo = document.createElement('a');
    linkTwo.href = 'https://www.flaticon.com/';
    linkTwo.title = 'Flaticon';
    linkTwo.innerText = 'www.flaticon.com';
    note1.appendChild(linkTwo);
    const dot = document.createElement('span');
    dot.innerText = '.';
    dot.style.color = 'blue';
    note1.appendChild(dot);
    note1.style.backgroundColor = '#000';
    note1.style.color = '#fff';
    note1.style.fontSize = '10px'
    note1.style.textAlign = 'center';
    return note1;
  }
  function note1() {
    const note1 = document.createElement('div');
    note1.classList.add('copyright');
    note1.style.letterSpacing = '0.25rem';
    note1.style.padding = '0.15rem';
    const link = document.createElement('a');
    link.href = 'https://www.iconbros.com/icons/ib-o-f-analysis/';
    link.title = 'IconBros';
    link.innerText = 'Analysis';
    link.target = '_blank';
    note1.appendChild(link);
    const betweenLinksText = document.createElement('span');
    betweenLinksText.innerText = ' icon by ';
    note1.appendChild(betweenLinksText);
    const linkTwo = document.createElement('a');
    linkTwo.href = 'https://iconbros.com';
    linkTwo.title = 'IconBros';
    linkTwo.innerText = 'IconBros';
    linkTwo.target = '_blank';
    note1.appendChild(linkTwo);
    const dot = document.createElement('span');
    dot.innerText = '.';
    dot.style.color = 'blue';
    note1.appendChild(dot);
    note1.style.backgroundColor = '#000';
    note1.style.color = '#fff';
    note1.style.fontSize = '10px'
    note1.style.textAlign = 'center';
    return note1;
  }
}
