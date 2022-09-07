$('.eff1').waypoint(function(direction) {
    if (direction === 'down') {
        $(this.element).addClass('FadeInOut_WP1');
    } else {
        $(this.element).removeClass('FadeInOut_WP1');
    }
}, {
    offset: '100%'
});
  
$('.eff1').waypoint(function(direction) {
    if (direction === 'up') {
        $(this.element).addClass('FadeInOut_WP1');   
    } else {
        $(this.element).removeClass('FadeInOut_WP1');
    }
}, {
    offset: '-100%'
});

$('.eff2').waypoint(function(direction) {
    if (direction === 'down') {
        $(this.element).addClass('FadeInOut_WP2');
    } else {
        $(this.element).removeClass('FadeInOut_WP2');
    }
}, {
    offset: '100%'
});
  
$('.eff2').waypoint(function(direction) {
    if (direction === 'up') {
        $(this.element).addClass('FadeInOut_WP2');   
    } else {
        $(this.element).removeClass('FadeInOut_WP2');
    }
}, {
    offset: '-100%'
});

BackToTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
}

$(document).ready(function() {
    $(".vote").click(function() {
        if ($(".vote").hasClass("btn-success")) {
            localStorage.removeItem('clicked', 'yes');
            localStorage.removeItem('select', $(this).attr('id'));
            $(this).removeClass("btn-success");
            $(this).addClass("btn-warning");
        }
        else if ($(".vote").hasClass("btn-warning")) {
            localStorage.setItem('clicked', 'yes');
            localStorage.setItem('select', $(this).attr('id'));
            $(this).removeClass("btn-warning");
            $(this).addClass("btn-success");
        }
    });
    if (localStorage.getItem('clicked') === 'yes') {
        var x = localStorage.getItem('select');
        $('#' + x).removeClass("btn-warning");
        $('#' + x).addClass("btn-success");
    } else {
        
    }  
});