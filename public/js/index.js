if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
  init();
} else {
  document.addEventListener("DOMContentLoaded", init);
}

function init() {
  bindEvents();
}

function bindEvents() {
  var $codeIcon = document.querySelectorAll('.code-img');
  $codeIcon.forEach(function(icon){
    icon.addEventListener('click', toggleMarkup);
  });

  var helpLink = document.querySelector('.search-form__help');
  helpLink.addEventListener('click', toggleInstrux);

  var closeLink = document.querySelector('.instructions__close');
  closeLink.addEventListener('click', toggleInstrux);

  $(window).scroll(getScrollPos);

  $('.toaster-link').on('click', showToaster);
}

function toggleMarkup(event){
  event.preventDefault();

  $(this).next().next('pre').toggleClass('show');
}

function toggleInstrux(event) {
  event.preventDefault();

  var $instrux = document.querySelector('.instructions');
  $instrux.classList.toggle('show');
}

function getScrollPos(event){
  event.preventDefault();

  var scrollPos = $(window).scrollTop();

  if(scrollPos < 50) {
    $('.sidebar').css('top', 50 - scrollPos);
    $('.sidebar__term--top').fadeOut(250);
  } else {
    $('.sidebar').css('top', '0');
    $('.sidebar__term--top').fadeIn(250);
  }
}

function showToaster() {
  var type = $(this).data('toast');

  if(type === 'DONE'){
    new Toast("Updated!", Toast.TYPE_DONE, 3000);
  } else if(type === "ERROR") {
    new Toast("Something went wrong.", Toast.TYPE_ERROR, 3000);
  } else if(type === "MESSAGE") {
    new Toast("Message displayed here.", Toast.TYPE_MESSAGE, 3000);
  }
}
