 function init_scene_4() {

     var tl = new TimelineLite();
     tl.add(scene3Up(), "stage1")
         .add(appearObjects(), "stage2")
         .add(gettingBatteryLow(), "stage3");
     // .add(appearTags(), "stage4");
     // .add(kid(), "stage4");

     $("#scene4").css({ top: parseInt($("#scene1").outerHeight() + $("#scene2").outerHeight() + $("#scene3").outerHeight()) + "px" });
     
     // $(".tag").css({ top: "-"+parseInt($("#scene1").outerHeight()/4+165)+"px" });

     // build scene
     var scene = new ScrollMagic.Scene({ triggerElement: document.getElementById("trigg"), duration: 17000, offset: $("#scene1").outerHeight() + $("#scene2").outerHeight() + $("#scene3").outerHeight() + 900 });
     scene.setTween(tl);
     scene.addIndicators({ name: "scene 3" }); // add indicators (requires plugin)  
     //scene.addTween(tl);
     scene.addTo(window.Scrollcontroller);

     function scene3Up() {
         var staggerTimeline = new TimelineLite();
         return staggerTimeline.to($("#scene4"), 5, { top: '0px' }, "+=50")

     }

     function appearObjects() {
         var staggerTimeline = new TimelineLite();
         var textBubble = $("#g5096");
         var tag = $("#g4172");
         var battery = $("#g4214");
         var phone = $("#g5089");

         return staggerTimeline //.from($("#scene2"), 3, { top: $("#scene1").outerHeight()+"px" })
             .from(tag, 3, { x: "-190px" })
             .from(battery, 3, { y: "400px" })
             .from(textBubble, 3, { scale: 0, autoAlpha: 0 })
             .from(phone, 3, { y: "400px" }, "-=3");

     }

     function gettingBatteryLow() {
         var staggerTimeline = new TimelineLite();

         var battStopClr1 = $("#battFill stop:eq(0)");
         var battStopClr2 = $("#battFill stop:eq(1)");


         return staggerTimeline.from(battStopClr1, 2, { attr: { offset: "0%" }, onUpdate: onBatteryLow })
             .from(battStopClr2, 2, { attr: { offset: "0%" } }, "-=2")
             .from([], 4.7, { scale: 0, autoAlpha: 0 });

     }

     var notif = true;

     function onBatteryLow() {
         var battStopClr1 = $("#battFill stop:eq(0)");
         var battStopClr2 = $("#battFill stop:eq(1)");

         var offset = parseInt(battStopClr1.attr("offset"));
         if (offset <= 70) {
             battStopClr2.css({
                 'stop-color': 'rgba(0,255,0,1)'
             });
             $("#g4172 circle").css({
                 'fill': 'rgba(0,255,0,1)'
             });

             if (!notif)
                 notif = !notif;

            $("#g5800").attr('class',"");
             

         } else {
             battStopClr2.css({
                 'stop-color': 'rgba(255,0,0,1)'
             });
             $("#g4172 circle").css({
                 'fill': 'rgba(255,0,0,1)'
             });
             if (notif) {
                 notif = !notif;
                 getNotification();

             }

         }
     }

     function getNotification() {
         // var staggerTimeline = new TimelineLite();

         var notification_tile = $("#g5800");

         notification_tile.attr('class',"notif");

        
         window.beep.play();

         // staggerTimeline.from(notification_tile,1,{y:-50,autoAlpha:0,height:0});

         // staggerTimeline.play();

     }


 }
