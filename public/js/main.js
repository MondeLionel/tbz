(function(jquery){
  // console.log("in js")

  $('.book-1').on('mouseover', function(){
    $(this).css('background-blend-mode','difference');
  })


  $('.book-1').on('click', function(){
    // $('body').toggleClass('read--summary');
  })

  $('._jsMenu').on('click', function () {
    $('body').toggleClass('menu--open')
  })

  $('._jsCloseMenu').on('click', function(){
     $('body').removeClass('menu--open');
  })



// [Element, duration, animation-proerties]
// TweenMax.from(".book--title",1.5,{x:-100,ease: Expo.easeInOut})
TweenMax.from(".book--title h3",1,{x:-100,ease:Expo.easeInOut})
TweenMax.from(".book--title h1",1.2,{x:-100,ease:Expo.easeInOut})
TweenMax.from(".book--title p",1.3,{x:-100,ease:Expo.easeInOut})


$(".speech--btn").on("click", function(){
	// $('body').addClass("sound-modal")
	console.log("Reader on")
})



var storySwiper = new Swiper('.swiper-container', {
	 autoHeight:true,
   keyboard:{
     enabled:true
   },
   slidesPerView: 2,
   spaceBetween: 20,
   breakpoints:{
     780: {
       slidesPerView: 1
     },
     375: {
       slidesPerView:1
     }
   }
})

// let paras = $('.content p');
// console.log(paras)




})($)




