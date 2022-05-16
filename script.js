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