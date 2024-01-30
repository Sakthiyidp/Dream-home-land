

/*------------------------------------------------------------------------------*/
/* header_search
/*------------------------------------------------------------------------------*/
            
    
$(".header_search").each(function(){  
    $(".search_btn", this).on("click", function(e){

        e.preventDefault();
        e.stopPropagation();

        $(".header_search_content").toggleClass("on");

        if ($('.header_search a').hasClass('open')) {

            $( ".header_search a i" ).removeClass('ti-close').addClass('ti-search');
            
            $(this).removeClass('open').addClass('sclose');    

        } 

        else {
            $(".header_search a").removeClass('sclose').addClass('open');

            $( ".header_search a i" ).removeClass('ti-search').addClass('ti-close');  
            
        }
    });

});
/*------------------------------------------------------------------------------*/
/* header_logo / Nav
/*------------------------------------------------------------------------------*/

$(document).ready(function() {

    if ( matchMedia( 'only screen and (min-width: 1200px)' ).matches ) 
        {
            $('.header.logo-change').find('img').attr({src:'./images/logo-light.svg'});
        }

});

jQuery(window).resize(function() {

    var retina = window.devicePixelRatio > 1 ? true : false;

    if ( matchMedia( 'only screen and (max-width: 1200px)' ).matches ) {
       
        $('.header.logo-change .site-branding').find('img').attr({src:'./images/logo-img.svg'});  
    }

    else {

       $('.header.logo-change .site-branding').find('img').attr({src:'./images/logo-light.svg'}); 
    }

});
/*------------------------------------------------------------------------------*/
/* Fixed-header
/*------------------------------------------------------------------------------*/

$(window).scroll(function(){
    

    if ( matchMedia( 'only screen and (min-width: 1200px)' ).matches ) 
    {
        if ($(window).scrollTop() >= 50 ) {

            $('.ttm-stickable-header').addClass('fixed-header');
            $('.header.logo-change .ttm-stickable-header').addClass('fixed-header').find('img').attr({src:'./images/logo-img.svg'});;

        }
        else {

            $('.ttm-stickable-header').removeClass('fixed-header');
            $('.header.logo-change .ttm-stickable-header').removeClass('fixed-header').find('img').attr({src:'./images/logo-light.svg'});;

        }
    }
});




/*------------------------------------------------------------------------------*/
/* Menu
/*------------------------------------------------------------------------------*/
    
 var menu = {
    initialize: function() {
        this.Menuhover();
    },

    Menuhover : function(){
        var getNav = $("nav.main-menu"),
            getWindow = $(window).width(),
            getHeight = $(window).height(),
            getIn = getNav.find("ul.menu").data("in"),
            getOut = getNav.find("ul.menu").data("out");
        
        if ( matchMedia( 'only screen and (max-width: 1200px)' ).matches ) {
                                                 
            // Enable click event
            $("nav.main-menu ul.menu").each(function(){
                
                // Dropdown Fade Toggle
                $("a.mega-menu-link", this).on('click', function (e) {
                    e.preventDefault();
                    var t = $(this);
                    t.toggleClass('active').next('ul').toggleClass('active');
                });   

                // Megamenu style
                $(".megamenu-fw", this).each(function(){
                    $(".col-menu", this).each(function(){
                        $(".title", this).off("click");
                        $(".title", this).on("click", function(){
                            $(this).closest(".col-menu").find(".content").stop().toggleClass('active');
                            $(this).closest(".col-menu").toggleClass("active");
                            return false;
                            e.preventDefault();
                            
                        });

                    });
                });  
                
            }); 
        }
    },
};


$('.btn-show-menu-mobile').on('click', function(e){
    $(this).toggleClass('is-active'); 
    $('.menu-mobile').toggleClass('show'); 
    return false;
});

// Initialize
$(document).ready(function(){
    menu.initialize();

});


/*------------------------------------------------------------------------------*/
/* Slick_slider
/*------------------------------------------------------------------------------*/

