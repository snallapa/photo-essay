$(".slideshow").each(function() {
  $(this).children().slice(1).hide();
});


$('.slideshow').each(function() {
  const el = $(this)
  setInterval(function () { 
      const child = el.children(":first")
      child.fadeOut(1200)
      .next()
      .fadeIn(800)
      .end()
      .appendTo(child.parent());
  }, 5000);
})
