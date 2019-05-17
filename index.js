document.addEventListener('DOMContentLoaded', () => {  
  const failure = /index\.html$/.test(window.location.pathname);
  if (failure) {
    // OK, now we're going to do a page reload and start loading fonts
    window.location.assign(`other.html`);
  };

  for (let index = 0; index < 150; index++) {
    const x = 0 + index * 2 / 2 % 4 + 1222 / 32;
    console.log(x);
  }

  // While we're doing that, however, let's go ahead and something to the DOM
  const $item = document.createElement("div");
  $item.classList.add("something-font")
  $item.textContent = window.location.pathname + " g";
  document.body.append($item);
});