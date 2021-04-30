import $ from "jquery";
import {WOW} from "wowjs";

function WOWLib(){
    if($('.wow').length){
      var wow = new WOW(
        {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true       // act on asynchronously loaded content (default is true)
        }
      );
      wow.init();
    }
}

export function mobileMenuJS(){
    $('.mobile-nav-toggler').on('click', function() {
        $('body').addClass('mobile-menu-visible');
       });
  
      //Menu Toggle Btn
      $('.mobile-menu .menu-backdrop,.mobile-menu .close-btn, .linkClick').on('click', function() {
        $('body').removeClass('mobile-menu-visible');
      });
}

function headerStyle() {
    if($('.main-header').length){
      var windowpos = $(window).scrollTop();
      var siteHeader = $('.main-header');
      var scrollLink = $('.scroll-to-top');
      
      var HeaderHight = $('.main-header').height();
      if (windowpos >= HeaderHight) {
        siteHeader.addClass('fixed-header');
        scrollLink.fadeIn(300);
      } else {
        siteHeader.removeClass('fixed-header');
        scrollLink.fadeOut(300);
      }
    }
}

export function accordianScript(){
    if($('.accordion-box, .accordion-box-two').length){
        $(".accordion-box, .accordion-box-two").on('click', '.acc-btn', function() {
          
          var outerBox = $(this).parents('.accordion-box, .accordion-box-two');
          var target = $(this).parents('.accordion');
          
          if($(this).hasClass('active')!==true){
            $(outerBox).find('.accordion .acc-btn').removeClass('active');
          }
          
          if ($(this).next('.acc-content').is(':visible')){
            return false;
          }else{
            $(this).addClass('active');
            $(outerBox).children('.accordion').removeClass('active-block');
            $(outerBox).find('.accordion').children('.acc-content').slideUp(300);
            target.addClass('active-block');
            $(this).next('.acc-content').slideDown(300);	
          }
        });	
      }
}

export function homepageScripts(){
      headerStyle();
      $(window).on('scroll', function() {
        headerStyle();
      });
      WOWLib();
      mobileMenuJS();
}

export function demopageScripts(){
      mobileMenuJS();
}

export function faqpageScripts(){
        accordianScript();
        mobileMenuJS();
}

export function pricingScript(){
  if($('.tabs-box').length){
    $('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
      e.preventDefault();
      var target = $($(this).attr('data-tab'));
      
      if ($(target).is(':visible')){
        return false;
      }else{
        target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
        $(this).addClass('active-btn');
        target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
        target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
        $(target).fadeIn(300);
        $(target).addClass('active-tab');
      }
    });
  }
}


export const getCookies = () => {
  let cookies = document.cookie.split(';').map(cookie => cookie.split('=')).reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {});
  return cookies
}

export const setCookie = (cookie) => {
  document.cookie = cookie
}