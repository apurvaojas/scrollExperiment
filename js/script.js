// Start of Tawk.to Script
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/5680e5ce119b36fb12b3667c/default';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
})();
//End of Tawk.to Script


jQuery(document).ready(function($) {
	   
	   var pat = $('svg pattern'); //map pattern for globe
        
        rotateGlobe(pat);

         window.beep = new Audio('beep.wav');
        
        // Rotate SVG Globe Logic

        function rotateGlobe( el ){
         // console.log(el);
         var count = 1;
         var intervalID = setInterval(function(){
             
             el.attr('x', 2*count);
             count++;
            
         }, 50);  
      }

       // $(".svg-container").height($(".svg-content").height());
      window.Scrollcontroller = new ScrollMagic.Controller();
      init_scene_1();
});

