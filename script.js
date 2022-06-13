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


window.onload = () => {
    $("button").click(function () {
        if ($(".vote").hasClass("btn-success")) {
            console.log('reached if');

            localStorage.setItem('clicked', 'no');
            $(this).removeClass("btn-success");
            $(this).addClass("btn-warning");
        }
        else if ($(".vote").hasClass("btn-warning")) {
            console.log('reached else if');

            localStorage.setItem('clicked', 'yes');
            $(this).removeClass("btn-warning");
            $(this).addClass("btn-success");
        }
    });
    if (localStorage.getItem('clicked') === 'yes') {
        console.log('reached localstorage 1');

        $(".ss").removeClass("btn-warning");
        $(".ss").addClass("btn-success");
    } else {
        alert("error");
    }
}
