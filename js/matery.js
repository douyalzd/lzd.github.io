$(function(){!function(){let t="animated pulse";$("article .article").hover(function(){$(this).addClass(t)},function(){$(this).removeClass(t)})}(),$(".button-collapse").sideNav();function t(t,e){let n=$("#"+t);if(0!==n.length){let t=n.width();450<=t?t+=21:350<=t&&t<450?t+=18:300<=t&&t<350?t+=16:t+=14,$("#"+e).width(t)}}function e(){t("navContainer","articles"),t("artDetail","prenext-posts"),$(".content").css("min-height",window.innerHeight-165)}e(),$(window).resize(function(){e()}),$("#articles").masonry({itemSelector:".article"}),AOS.init({easing:"ease-in-out-sine",duration:700,delay:100});!function(){$("#articleContent a").attr("target","_blank"),$("#articleContent img").each(function(){var t=$(this).attr("src");$(this).wrap('<div class="img-item" data-src="'+t+'" data-sub-html=".caption"></div>'),$(this).addClass("img-shadow img-margin");var e=$(this).attr("alt"),t=$(this).attr("title");let n="";if(void 0===e||""===e?void 0!==t&&""!==t&&(n=t):n=e,""!==n){let t=document.createElement("div");t.className="caption";let e=document.createElement("b");e.className="center-caption",e.innerText=n,t.appendChild(e),this.insertAdjacentElement("afterend",t)}}),$("#articleContent, #myGallery").lightGallery({selector:".img-item",subHtmlSelectorRelative:!0});const n=window.document.querySelector(".progress-bar");n&&new ScrollProgress((t,e)=>{n.style.width=100*e+"%"})}(),$("#toggleSearch").click(function(){$("#searchModal").openModal()}),$("#backTop").click(function(){return $("body,html").animate({scrollTop:0},400),!1});let n=$("#headNav"),i=$(".top-scroll");$(window).scroll(function(){$(window).scrollTop()<100?(n.addClass("nav-transparent"),i.slideUp(300)):(n.removeClass("nav-transparent"),i.slideDown(300))}),$(".nav-menu>li").hover(function(){$(this).children("ul").stop(!0,!0).show(),$(this).addClass("nav-show").siblings("li").removeClass("nav-show")},function(){$(this).children("ul").stop(!0,!0).hide(),$(".nav-item.nav-show").removeClass("nav-show")}),$(".m-nav-item>a").on("click",function(){"none"==$(this).next("ul").css("display")?($(".m-nav-item").children("ul").slideUp(300),$(this).next("ul").slideDown(300),$(this).parent("li").addClass("m-nav-show").siblings("li").removeClass("m-nav-show")):($(this).next("ul").slideUp(300),$(".m-nav-item.m-nav-show").removeClass("m-nav-show"))})});