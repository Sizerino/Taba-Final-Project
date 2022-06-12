$('.eff1').waypoint(function(direction) {
  if (direction === 'down') {
    console.log('down')
    $(this.element).addClass('FadeInOut_WP1');
  }
  else {
    $(this.element).removeClass('FadeInOut_WP1');
  }
}, {
  offset: '100%'
});
  
$('.eff1').waypoint(function(direction) {
  if (direction === 'up') {
    console.log('up')
    $(this.element).addClass('FadeInOut_WP1');   
  }
  else {
    $(this.element).removeClass('FadeInOut_WP1');
  }
}, {
  offset: '-50%'
});

$('.eff2').waypoint(function(direction) {
  if (direction === 'down') {
    console.log('down')
    $(this.element).addClass('FadeInOut_WP2');
  }
  else {
    $(this.element).removeClass('FadeInOut_WP2');
  }
}, {
  offset: '100%'
});
  
$('.eff2').waypoint(function(direction) {
    if (direction === 'up') {
        console.log('up')
        $(this.element).addClass('FadeInOut_WP2');   
    }
    else {
        $(this.element).removeClass('FadeInOut_WP2');
    }
}, {
    offset: '-50%'
});

BackToTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
}

$("button").click(function () {
    if ($(".vote").hasClass("btn-success")) {
        $(this).removeClass("btn-success");
        $(this).addClass("btn-warning");
    }
    else if ($(".vote").hasClass("btn-warning")) {
        $(this).removeClass("btn-warning");
        $(this).addClass("btn-success");
    }
  });