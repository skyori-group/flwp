(function () {
  var header = document.querySelector("header");
  var button = header.querySelector('button[aria-controls="mobile-nav"]');
  var nav = document.getElementById("mobile-nav");
  var solid = ["border-b", "bg-background/90", "backdrop-blur-md"];
  var menuIcon = button.innerHTML;
  var closeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-6" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>';
  var open = false;

  function render() {
    var isSolid = open || window.scrollY > 24;
    solid.forEach(function (c) { header.classList.toggle(c, isSolid); });
    header.classList.toggle("bg-transparent", !isSolid);
    nav.hidden = !open;
    button.setAttribute("aria-expanded", String(open));
    button.setAttribute("aria-label", open ? "Закрыть меню" : "Открыть меню");
    button.innerHTML = open ? closeIcon : menuIcon;
  }

  button.addEventListener("click", function () { open = !open; render(); });
  nav.addEventListener("click", function (e) {
    if (e.target.closest("a")) { open = false; render(); }
  });
  window.addEventListener("scroll", render, { passive: true });
  render();
})();
