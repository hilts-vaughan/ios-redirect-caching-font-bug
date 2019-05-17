document.addEventListener('DOMContentLoaded', () => {  
  if (!/other\.html$/.test(window.location.pathname)) {
    // OK, now we're going to do a page reload and start loading fonts
    window.location.assign(`other.html`);
  };

  // While we're doing that, however, let's go ahead and something to the DOM
  const $item = document.createElement("div");
  $item.classList.add("something-font")
  $item.textContent = "g g g !!!";
  document.body.append($item);
});