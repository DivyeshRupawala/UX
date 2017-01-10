// JavaScript Document
$(document).ready(function () {

    //JS for scrollbar set as per device height 
    //$('#leftScroll-inner .content').css('height', ($(window).height() - 310)+'px');


    //Side Menu JS
    var menuLeft = document.getElementById('cbp-spmenu-s1'),
				//menuRight = document.getElementById( 'cbp-spmenu-s2' ),
			    //showRight = document.getElementById( 'showRight' ),
				showLeftPush = document.getElementById('showLeftPush'),

				body = $("#sideMenu")[0];


    if (showLeftPush!= null && showLeftPush!= "")
    {
        showLeftPush.onclick = function () {
            classie.toggle(this, 'active');
            classie.toggle(body, 'cbp-spmenu-push-toright');
            classie.toggle(menuLeft, 'cbp-spmenu-open');

        }
        if ($(this).hasClass('active')){
            $('.navmenu-nav > li.active').css('left', '-100px');
        }else{
            $('.navmenu-nav > li.active').css('left', '10px');
        }
    };

    /* Added by Digvijay : Side Menu is pushed back when clicked on body i.e #wrap */
    // on doc ready hide side menu and overlay
    if ($('body').find('.cbp-spmenu-push-toright').length >= 1) {
        setTimeout(function () {
            $('#wrap').trigger('click');
        }, 10);
    }

    //$('#wrap, .newOverlay').click(function () {
    //    if ($('body').find('.cbp-spmenu-push-toright').length >= 1) {
    //        classie.toggle(this, 'active');
    //        classie.toggle(body, 'cbp-spmenu-push-toright');
    //        classie.toggle(menuLeft, 'cbp-spmenu-open');
    //    }
    //});

    
   

    //$("#scroll .scrollBar").mCustomScrollbar({
    //    //setHeight:200,
    //    theme: "minimal",
    //    alwaysShowScrollbar: 0,
    //    autoDraggerLength: true,
    //    advanced: {
    //        updateOnContentResize: true,
    //        updateOnImageLoad: true
    //    }
    //});

   

    //$(".scrollDiv .scrollBar").mCustomScrollbar({
    //    //setHeight:200,
    //    theme: "minimal",
    //    alwaysShowScrollbar: 0,
    //    autoDraggerLength: true,
    //    advanced: {
    //        updateOnContentResize: true,
    //        updateOnImageLoad: true
    //    }
    //});
	
	

    // JS code for runtime count info panel height
    function setHeight() {
        windowHeight = $(window).innerHeight();
        $('#scroll .scrollBar').css('height', (windowHeight - 80));
        //$('.scrollDiv .scrollBar').css('height', (windowHeight - 180));

        //var iframeScrollDivHeight;
        //iframeScrollDivHeight = $('.iframeScrollDiv .scrollBar').innerHeight();
        //$('.iframeScrollDiv .scrollBar').css('height', iframeScrollDivHeight - 280);

    };
	// function setHeight() {
//        windowHeight = $(window).innerHeight();
//                $('.scrollDiv .scrollBar').css('height', '400');
//
//    };
    setHeight();

    $(window).resize(function () {
        setHeight();
    });

    // for accordion panels
    $('.collapse').on('show.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-faq');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="zmdi zmdi-minus"></i>');
    });
    $('.collapse').on('hide.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-faq');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="zmdi zmdi-plus"></i>');
    });

    $('select').material_select();


	// JS code for date time picker
	$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year
    format: 'dd-mm-yyyy',
    onStart: function () {
            $('.picker').appendTo('body');
    }
	});


    //Added by Amol
	    $("a.viewAll").parent("div").css("text-align", "right");

	    $("input.datepicker").parent("td").css("position", "relative");
	    $("input.datepicker").after('<span class="assignIcon"><i class="fa fa-calendar assignIconPosition"></i></span>');

	    $(".assignIcon").bind("click", (function () {
	        var date1 = $(this);
	        setTimeout(function () {
	            date1.prev('input.datepicker').trigger("click");
	        }, 200);
	    }));

	    
	    


	if ($('.clrPicker').length >= 1) {
	    $('.clrPicker').colorpicker();
	}

    /*Added By Digvijay
      Set Height To #sideMenu to set footer at bottom, irrespective of content   
    */
	//function setFooterToBottom() {
	//    var winHeightOnly = document.body.clientHeight;
	//    var winHeight = (document.body.clientHeight) - (148);
	//    var contentHeight = ($('#wrap').height());

	//    //if ($('body').hasClass('loginPage')) {
	//    //    contentHeight = ($('#wrap').height()) - (25);
	//    //}

	//    if (contentHeight > winHeight) {
	//        $('#wrap').css('min-height', contentHeight + 'px');
	//    }
	//    else {

	//        if ($('body').hasClass('loginPage')) {
	//            $('#wrap').css('min-height', ((winHeightOnly) - 80) + 'px');
	//        }
	//        else {
	//            $('#wrap').css('min-height', winHeight + 'px');
	//        }

	        
	//    }
	//}
	//setFooterToBottom();

	//$("#wrap").bind("DOMSubtreeModified", HandleDOM_ChangeWithDelay);	

	//var zGbl_DOM_ChangeTimer = null;

	//function HandleDOM_ChangeWithDelay(zEvent) {
	//    if (typeof zGbl_DOM_ChangeTimer == "number") {
	//        clearTimeout(zGbl_DOM_ChangeTimer);
	//        zGbl_DOM_ChangeTimer = '';
	//    }
	//    zGbl_DOM_ChangeTimer = setTimeout(HandleDOM_Change, 01);
	//}

	//function HandleDOM_Change() {	    
	//    $(document).on('DOMSubtreeModified', function (e) {
	//        setFooterToBottom();
	//    });
	//}


});
        


    
    
    
   // send email popup - select dropdown : on scrollbar click hide dropdown solved  
   $(function () {
       $(".select-dropdown li").on('click', function (e) {
           var aaa = $(this).parent('ul');
           if (aaa.hasClass('active')) {
               aaa.removeClass("active");
               aaa.css("display", "none");
           }
       });

       function closeDropdown() {
           if ($('.dropdown-content.select-dropdown').hasClass('active')) {
               $('.dropdown-content.select-dropdown').removeClass('active').css("display", "none");
           }
       }       

       $(window).click(function () {
           closeDropdown();
       });

       $('body').on('change', 'select', function () { closeDropdown(); });

       $('.modalPopup .select-dropdown').on('mousewheel', function (e) {
           if (e.originalEvent.wheelDelta > 0) {
               var event = e.originalEvent,
               d = event.wheelDelta || -event.detail;

               this.scrollTop += (d < 0 ? 1 : -1) * 30;
           }
           else {
               var event = e.originalEvent,
               d = event.wheelDelta || -event.detail;

               this.scrollTop += (d < 0 ? 1 : -1) * 30;               
           }
           e.preventDefault();
       });
   });



   // slide alert form
   $('body').on('click', '.infoIcon', function () {
       if ($(this).hasClass('sideInfoHidden')) {
           $('#sideInfo').animate({ right: '0px' }, 1000, stopFn(this));
           $(this).removeClass('sideInfoHidden');
       }
       else {
           $('#sideInfo').animate({ right: '-255px' }, 1000, stopFn(this));
           $(this).addClass('sideInfoHidden');
       }
   });
   var rgtVal = false;
   function stopFn(_this) {
       $(_this).stop();
   }