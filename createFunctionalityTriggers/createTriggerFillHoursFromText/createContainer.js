function createContainer() {
  const container = document.createElement('div');
  container.style.height = "100%";
  container.style.width = "18rem";
  container.style.position = 'relative';

  container.style.color = "#fff";
  container.style.borderRight = '1px solid grey';
  container.style.fontWeight = "bold";
  return container;
}

  export default createContainer;