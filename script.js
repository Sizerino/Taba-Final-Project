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

// email checker by input name email
function checkEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}