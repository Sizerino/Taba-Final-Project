$('.eff1').waypoint(function(direction) {
  if (direction === 'down') {
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
    $(this.element).addClass('FadeInOut_WP1');   
  }
  else {
    $(this.element).removeClass('FadeInOut_WP1');
  }
}, {
  offset: '-100%'
});

$('.eff2').waypoint(function(direction) {
  if (direction === 'down') {
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
        $(this.element).addClass('FadeInOut_WP2');   
    }
    else {
        $(this.element).removeClass('FadeInOut_WP2');
    }
}, {
    offset: '-100%'
});

BackToTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
}

// rememberButton = (btn) => {
//     if ($(".vote").hasClass("btn-success")) {
//         console.log('reached if');
    
//         localStorage.setItem('clickedButton', btn);
//         $(btn).removeClass("btn-success");
//         $(btn).addClass("btn-warning");
//     }
//     else if ($(".vote").hasClass("btn-warning")) {
//         console.log('reached else if');

//         localStorage.setItem("clickedButton", btn);
//         $(btn).removeClass("btn-warning");
//         $(btn).addClass("btn-success");
//     }
// }

// rememberButton = (btn) => {
//     console.log("reached start")
//     $(btn).click(function() {
//         console.log("reached mid")
//         if ($(btn).hasClass("btn-success")) {
//             console.log('reached if');
        
//             localStorage.removeItem('clickedButton', btn);
//             $(this).removeClass("btn-success");
//             $(this).addClass("btn-warning");
//         }
//         else if ($(btn).hasClass("btn-warning")) {
//             console.log('reached else if');
    
//             localStorage.setItem("clickedButton", btn);
//             $(this).removeClass("btn-warning");
//             $(this).addClass("btn-success");
//         }
//     });
// }

$(document).ready(function() {
    $("button").click(function() {
        if ($(".vote").hasClass("btn-success")) {
            console.log('reached if');

            localStorage.removeItem('clicked', 'yes');
            localStorage.removeItem('select', $(this).attr('id'));
            $(this).removeClass("btn-success");
            $(this).addClass("btn-warning");
        }
        else if ($(".vote").hasClass("btn-warning")) {
            console.log('reached else if');

            localStorage.setItem('clicked', 'yes');
            localStorage.setItem('select', $(this).attr('id'));
            $(this).removeClass("btn-warning");
            $(this).addClass("btn-success");
        }
    });
    if (localStorage.getItem('clicked') === 'yes') {
        console.log('reached localstorage');

        var x = localStorage.getItem('select');
        $('#' + x).removeClass("btn-warning");
        $('#' + x).addClass("btn-success");
    } else {
        
    }  
});