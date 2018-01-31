/**
 * Stef.js
 * v 1.0
 *
 * @author Stefanus Prasetyo Nugroho 
 * stefanusnugroho585@gmail.com
 */

 function _st(target)
 {
  return $(target);
 }

 function _a(a)
 {
  alert(a);
 }

 function _menulis(writes)
 {
  document.write(writes);
 }

 function _getTag(vartag)
 {
  return document.getElementsByTagName(vartag);
 }

 function redirect(to)
 {
  return window.location.assign(to);
 }

function _el(el)
{
  return document.createElement(el);
}
function _node(nod)
{
  return document.createTextNode(nod);
}
function _append(ab)
{
  return append(ab);
}

/*
  jQuery StefCode with Sweet Alert Plugin
*/
+function($){
 
  $.fn.stefcode = function(options){
    var element = this;
    var codex = $.extend({
       "code": 67,
       "ctrlcode":83,
       "ctrlshift":73,
       "alt" : 9,
       swal  : false,
       alert : false,
       ModalBootstrap : false,
       AddAppend : false,
       Audio : false,
       Iframe : false,
       Video : false,
       VideoFile:'coba1.mp4',
       IframeFile:'index.html',
       TargetModal:'#mymodal',
       AudioFile: 'horse.ogg',
       TextAppend :'<p>hello world',
       Target:'#modal',
       textAlert:'Ditekan Keyboard',
       url   : false,
       link  : 'https://www.google.com/',
       title :'!Oops',
      description:'Detect Ctrl+c',
      type:'success',
     

        },options);
    
    

    //kode plugin kita, tugasnya untuk menambahkan teks
   $(element).bind('contextmenu cut ', function(e) {
        e.preventDefault();
       swal('Oops!', 'Sorry Gan Klik Kanan nya Gak Bisa hehe!.', 'error'); setTimeout(1000);
        return false;
    });
return this.each(function() {
   $(element).bind('keydown', function(e) {

        if (e.keyCode==codex.code ) { // fungsi shortcut
          if(codex.swal) {
            swal(codex.title,codex.description,codex.type);setTimeout(1000);
            return false;
          }
          if(codex.url){
            var link = codex.link;
            window.location = link;
            
          }
          if(codex.alert){
            alert(codex.textAlert);
            return false;
          }
          if(codex.ModalBootstrap) {
            var el = codex.TargetModal;
            $(el).modal();
          }
         if (codex.AddAppend) {
          var el1 = codex.Target;
          $(el1).append(codex.TextAppend);
         }
         if(codex.Audio){
          var el2 = codex.Target;
          var x = document.createElement("AUDIO");

          if (x.canPlayType("audio/mpeg")) {
              x.setAttribute("src",codex.AudioFile);
          } else {
              x.setAttribute("src","horse.ogg");
          }

          x.setAttribute("controls", "autoplay");
          $(el2).html(x); 
         }

         if(codex.Iframe){
          var el3 = codex.Target;
          var file = codex.IframeFile;
          $(el3).html('<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="' + file + '" allowfullscreen></iframe></div>')
         }

         if(codex.Video){
          var el4 = codex.Target;
          var a = codex.VideoFile;
          $(el4).html('<video width="320" height="240" autoplay><source src="' + a + '"  type="video/mp4"><source src="movie.ogg" type="video/ogg">Your browser does not support the video tag.</video>');
         return false;
         }
          
           }       
           

            if(e.ctrlKey&&(e.which==codex.ctrlcode)) { // fungsi shortcut
           if(codex.swal) {
            swal(codex.title,codex.description,codex.type);setTimeout(1000);
            return false;
          }
          if(codex.url){
            var link = codex.link;
            window.location = link;
            return false;
          }
          if(codex.alert){
            alert(codex.textAlert);
            return false;
          }
          if(codex.ModalBootstrap) {
            var el = codex.TargetModal;
            $(el).modal();
            return false;
          }
         if (codex.AddAppend) {
          var el1 = codex.Target;
          $(el1).append(codex.TextAppend);
          return false;
         }

         if(codex.Audio){
          var el2 = codex.Target;
          var x = document.createElement("AUDIO");

          if (x.canPlayType("audio/mpeg")) {
              x.setAttribute("src",codex.AudioFile);
          } else {
              x.setAttribute("src","horse.ogg");
          }

          x.setAttribute("controls", "autoplay");
          $(el2).html(x); 
          return false;
         }

         if(codex.Iframe){
          var el3 = codex.Target;
          var file = codex.IframeFile;
          $(el3).html('<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="' + file + '" ></iframe></div>')
          return false;
         }

         if(codex.Video){
          var el4 = codex.Target;
          var a = codex.VideoFile;
          $(el4).html('<video width="320" height="240" controls><source src="' + a + '"  type="video/mp4"><source src="movie.ogg" type="video/ogg">Your browser does not support the video tag.</video>');
         return false;
         }
        }

   });
 });
  };
 
}(jQuery);

/*
  jQuery Countdown Redirect Plugin
*/
+function($){
 
  $.fn.stefRedirect = function(options){
    var element = this;
    var setting = $.extend({
       url: 'https://www.google.com/',
       "count":10,
       target:'#app',
       message:'sukses',
        },options);

 var pesan= setting.message;
 var el = setting.target;

function counter(message, url,time){
  var interval = setInterval(function(){
    
    _st(el).html(setting.message  + url + ' dalam ' + time + ' detik.');
        time = time - 1;

    if(time == 0){
      clearInterval(interval);

      window.location = url;
    }
  }, 1000);
}

_st(document).ready(function(){
  
  counter(pesan, setting.url,setting.count);
});
  };
 
}(jQuery);

/*
jQuery Countdown
*/
+function($){
 
  $.fn.stefCountdown = function(options){
    var element = this;
    var setting = $.extend({
       date:'20 Oct,2018 00:01:01',
       message:'sukses',
       target:'#demo',
        swal  : false,
       alert : false,
       ModalBootstrap : false,
     
       Audio : false,
       Iframe : false,
       Video : false,
       VideoFile:'coba1.mp4',
       IframeFile:'index.html',
       TargetModal:'#mymodal',
       AudioFile: 'horse.ogg',
       TextAppend :'<p>hello world',
       Target:'#modal',
       textAlert:'Ditekan Keyboard',
       url   : false,
       link  : 'https://www.google.com/',
       title :'!Oops',
      description:'Detect Ctrl+c',
      type:'success',
        },options);

    var el = setting.target;
        // Set the date we're counting down to
var countDownDate = new Date(setting.date).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var week = Math.floor(distance / 60 / 60 / 24 / 7);
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    $(el).html(days + "\ndays " + hours + "\nhours "
    + minutes + "\nminutes " + seconds + "\nseconds ");
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
         $('h1').html(setting.TextAppend);
        if(setting.swal){
          var coba = swal(setting.title,setting.description,setting.type);setTimeout(1000);
          $(el).html(coba);
            return false;
        }
        if(setting.alert){
          var c = alert(setting.textAlert);
          $(window).html(c);
          return false;
        }
        if(setting.Audio){
           var xa = document.createElement("AUDIO");

          if (xa.canPlayType("audio/mpeg")) {
              xa.setAttribute("src",setting.AudioFile);
          } else {
              xa.setAttribute("src","horse.ogg");
          }

          xa.setAttribute("controls", "controls");
          $(el).html(xa); 
         
        }
        if(setting.Iframe){
          var file = setting.IframeFile;
           $(el).html('<iframe  style="width:500px; height:500px; overflow:hidden;" class="embed-responsive-item" src="' + file + '"  allowfullscreen></iframe>')
        }
        if(setting.Video){
          var a = setting.VideoFile;
          $(el).html('<video width="320" height="240" controls><source src="' + a + '"  type="video/mp4"><source src="movie.ogg" type="video/ogg">Your browser does not support the video tag.</video>');
        }
        if(setting.url){
           var link = setting.link;
            redirect(link);
        }


       
    }
}, 1000);



          };
 
}(jQuery);


/*
  jQuery Slideshow Plugin
*/

(function($){
    $.stefSlideShow = function(selector, settings){
    // settings
    var config = {
      'delay': 1000,
      'fadeSpeed': 500
    };
    if ( settings ){$.extend(config, settings);}

    // variables
    var obj = $(selector);
    var img = obj.children('img');
    var count = img.length;
    var i = 0;

    // show first image
    img.eq(0).show();

    // run slideshow
    setInterval(function(){
      img.eq(i).fadeOut(config.fadeSpeed);
      i = ( i+1 == count ) ? 0 : i+1;
      img.eq(i).fadeIn(config.fadeSpeed);
    }, config.delay);
        
    return this;
  };
})(jQuery);

//goyang plugin

$.fn.goyang = function(options){
//setting default value jika parameter tidak dilewatkan
var    defaults = {
 left:'500',
 right:'1000'
 },
 settings = $.extend({}, defaults, options);
 
 var element = this;  //"this" adalah DOM object
 var leftpost = parseInt($(element).css("left")) -  parseInt(settings.left);
 $(element).hover(function(){
 //geser kiri...
 $(element).animate({
 left:  leftpost
 },function(){
 //geser kanan...
 $(element).animate({ left: leftpost + parseInt(settings.right) });
 });
 });
};


(function ($) {
    $.extend({
        StefPlaySound: function () {
            return $(
                   '<audio class="sound-player" autoplay="autoplay" style="display:none;">'
                     + '<source src="' + arguments[0] + '" />'
                     + '<embed src="' + arguments[0] + '" hidden="true" autostart="true" loop="false"/>'
                   + '</audio>'
                 ).appendTo('body');
        },
        stopSound: function () {
            $(".sound-player").remove();
        }
    });
})(jQuery);

/* Create a new object based of the HTMLElement prototype
var XProductProto = Object.create(HTMLElement.prototype);

// Set up the element.
XProductProto.createdCallback = function() {
    // Create a Shadow Root
    var shadow = this.createShadowRoot();

    // Create a standard img element and set it's attributes.
    var img = document.createElement('img');
    img.alt = this.getAttribute('data-name');
    img.src = this.getAttribute('data-img');
    img.width = '150';
    img.height = '150';
    img.className = 'product-img';

    // Add the image to the Shadow Root.
    shadow.appendChild(img);

    // Add an event listener to the image.
    img.addEventListener('click', function(e) {
        window.location = this.getAttribute('data-url');
    });
  
    // Create a link to the product.
    var link = document.createElement('a');
    link.innerText = this.getAttribute('data-name');
    link.href = this.getAttribute('data-url');
    link.className = 'product-name';

        // Add the link to the Shadow Root.
    shadow.appendChild(link);
};

// Register the new element.
var XProduct = document.registerElement('x-product', {
    prototype: XProductProto
});
*/