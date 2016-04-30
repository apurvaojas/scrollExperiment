 function init_scene_1() {

     var tl = new TimelineLite();
     tl.add(moveTag(), "stage1")
       .add(initiatePlane(), "stage2");

       $("#scene2").css({ top: $("#scene1").outerHeight()+"px" });
       
       $(".tag").css({ top: "-"+parseInt($("#scene1").outerHeight()/4+165)+"px" });

     // build scene
     var scene = new ScrollMagic.Scene({ triggerElement: document.getElementById("trigg"),  duration: 5000, offset: 0 });
     scene.setTween(tl);
     scene.addIndicators({ name: "scene 1" }); // add indicators (requires plugin)  
     //scene.addTween(tl);
     scene.addTo(window.Scrollcontroller);

     function moveTag() {
         var staggerTimeline = new TimelineLite();
         return staggerTimeline//.from($("#scene2"), 3, { top: $("#scene1").outerHeight()+"px" })
                                .to($("#forBriefcase"), 3, { rotation: "70deg", scale:"0.3", x: '50px', y:"130px", top: "250px", transformOrigin: "center" })
                                .to($("#forGranny"), 3, { rotation: "70deg", scale:"0.3",y:'50px', top: "250px", transformOrigin: "center" },'-=3')
                                .to($("#forKid"), 3, { rotation: "70deg", scale:"0.3", top: "250px", x: '-50px', y:"75px", transformOrigin: "center" },'-=3')
                                .to($("#scene2"), 3, { top: '0px' },'-=3')
                                .to($("#forBriefcase"), 0.5, {alpha: 0  });
     }

     function initiatePlane() {
        // var staggerTimeline = new TimelineLite();        
        return TweenMax.to($("#g5090"), 10, { x: (-1 * $(".svg-content").width()), y: (-1 * $(".svg-content").height() + 100), onUpdate: function() {
                 return null; }, onStart: function() {
                 return null; }, onComplete: function() {
                 return null; } });
     }
     init_scene_2();
 }
