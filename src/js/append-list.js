function appendList(ul, text) {
  let li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}

export { appendList }
