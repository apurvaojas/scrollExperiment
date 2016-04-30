 function init_scene_3() {

     var tl = new TimelineLite();
     tl.add(scene3Up(), "stage1")
         .add(appearPersons(), "stage2")
         .add(appearTags(), "stage3")
         .add(drawReverseLines(), "stage4");
     // .add(kid(), "stage4");

     $("#scene3").css({ top: parseInt($("#scene1").outerHeight() + $("#scene2").outerHeight()) + "px" });
     // $(".tag").css({ top: "-"+parseInt($("#scene1").outerHeight()/4+165)+"px" });

     // build scene
     var scene = new ScrollMagic.Scene({ triggerElement: document.getElementById("trigg"), duration: 14000, offset: $("#scene1").outerHeight() + $("#scene2").outerHeight() + 500 });
     scene.setTween(tl);
     scene.addIndicators({ name: "scene 3" }); // add indicators (requires plugin)  
     //scene.addTween(tl);
     scene.addTo(window.Scrollcontroller);

     function scene3Up() {
         var staggerTimeline = new TimelineLite();
         return staggerTimeline.to($("#scene3"), 5, { top: '0px' }, "+=90")

     }

     function appearPersons() {
         var staggerTimeline = new TimelineLite();
         var persons = [$("#g5721"), $("#g6009"), $("#g16442")];
         return staggerTimeline //.from($("#scene2"), 3, { top: $("#scene1").outerHeight()+"px" })
             .staggerFrom(persons, 3, { y: "300px" });

     }



     function appearTags() {
         var staggerTimeline = new TimelineLite();
         // var kid = $("#g9533");

         var SharingTagText = $("#SharingTagText");

             var tag1 = $("#g6557");
             var firstLine = [$("#path7837"), $("#path7849"), $("#path7855"), $("#path7847"), $("#path7853"), $("#path7801"), $("#path7811"), $("#path7807"), $("#path7803"), $("#path7815"), $("#path7805"), $("#path7809"), $("#path7821"), $("#path7827"), $("#path7825"), $("#path7829"), $("#path7817"), $("#path7819"), $("#path7883"), $("#path7881"), $("#path7777"), $("#path7773"), $("#path7785"), $("#path7775"), $("#path7795"), $("#path7793"), $("#path7813"), $("#path7797"), $("#path7851"), $("#path7845"), $("#path7857"), $("#path7789"), $("#path7761"), $("#path7843"), $("#path7823"), $("#path7757"), $("#path7763"), $("#path7747"), $("#path7769"), $("#path7767"), $("#path7759"), $("#path7799"), $("#path7839"), $("#path7841"), $("#path7833"), $("#path7835"), $("#path7787"), $("#path7789"), $("#path7791"), $("#path7779"), $("#path7751"), $("#path7749"), $("#path7753"), $("#path7771"), $("#path7745"), $("#path7765")];


             var tag2 = $("#g6572");
             var tag3 = $("#g6584");
             var sixthLine = [$("#path6801"), $("#path6817"), $("#path6819"), $("#path6877"), $("#path6873"), $("#path6867"), $("#path6871"), $("#path6875"), $("#path6885"), $("#path6887"), $("#path6881"), $("#path6883"), $("#path6879"), $("#path6865"), $("#path6853"), $("#path6855"), $("#path6841"), $("#path6837"), $("#path6839"), $("#path6815"), $("#path6869"), $("#path6803"), $("#path6805"), $("#path6813"), $("#path6821"), $("#path6827"), $("#path6807"), $("#path6809"), $("#path6811"), $("#path6825"), $("#path6843"), $("#path6851"), $("#path6847"), $("#path6861"), $("#path6857"), $("#path6859"), $("#path6845"), $("#path6863"), $("#path6829"), $("#path6829-0"), $("#path6823"), $("#path6835"), $("#path6849")];
             var seventhLine = [$("#path7627"), $("#path7629"), $("#path7625"), $("#path7633"), $("#path7641"), $("#path7635"), $("#path7637"), $("#path7639"), $("#path7643"), $("#path7613"), $("#path7615"), $("#path7617"), $("#path7609"), $("#path7611"), $("#path7623"), $("#path7621"), $("#path7619"), $("#path7623-5"), $("#path7621-7")];


             var smallTag = $("#g5743");
             var fourthLine = [$("#path7719"), $("#path7725"), $("#path7723"), $("#path7727"), $("#path7729")];

             return staggerTimeline.staggerFrom(firstLine, 1.5, { scale: 0, autoAlpha: 0 }, 0.1, "stagger")
                 .staggerFrom(tag1, 1.5, { scale: 0, autoAlpha: 0 })
                 .staggerFrom(sixthLine, 1.5, { scale: 0, autoAlpha: 0 }, 0.1, "stagger")
                 .staggerFrom(tag2, 1.5, { scale: 0, autoAlpha: 0 })
                 .staggerFrom(seventhLine, 1.5, { scale: 0, autoAlpha: 0 }, 0.1, "stagger")
                 .staggerFrom(tag3, 1.5, { scale: 0, autoAlpha: 0 })
                 .staggerFrom(fourthLine, 1.5, { scale: 0, autoAlpha: 0 }, 0.1, "stagger")
                 .staggerFrom(smallTag, 1.5, { scale: 0, autoAlpha: 0 })
                 .staggerFrom(SharingTagText, 1.5, { scale: 0, autoAlpha: 0 })
                 .from([], 4.7, { scale: 0, autoAlpha: 0 });
                



     
     }

     function drawReverseLines() {
         var staggerTimeline = new TimelineLite();

         var secondLine = [$("#path7653-8"), $("#path7655-3"), $("#path7659-0"), $("#path7661-0"), $("#path7665-3"), $("#path7689-6"), $("#path7691-9"), $("#path7687-6"), $("#path7675-69"), $("#path7695-11-4"), $("#path7695-11"), $("#path7679-6"), $("#path7695-11-8"), $("#path7677-6"), $("#path7685-2"), $("#path7675-6-1"), $("#path7697-4-9"), $("#path7695-8-1"), $("#path7679-7-4"), $("#path7681-3-5"), $("#path7677-9-9"), $("#path7685-7-0"), $("#path7675-1-1"), $("#path7675-1-1-29"), $("#path7695-1-8"), $("#path7679-1-8"), $("#path7681-1-2"), $("#path7681-3-5-3"), $("#path7677-9-9-9"), $("#path7685-7-0-9"), $("#path7675-1-1-2"), $("#path7693-9-6-9"), $("#path7695-1-8-7"), $("#path7679-1-8-5"), $("#path7679-1-8-5-6")];
         var thirdLine = [$("#path7667"), $("#path7663"), $("#path7673"), $("#path7669"), $("#path7671"), $("#path7657"), $("#path7653"), $("#path7655"), $("#path7659"), $("#path7661"), $("#path7665"), $("#path7689"), $("#path7691"), $("#path7687"), $("#path7675"), $("#path7693"), $("#path7695"), $("#path7679"), $("#path7681"), $("#path7677"), $("#path7685"), $("#path7675-6"), $("#path7693-4"), $("#path7695-8"), $("#path7679-7"), $("#path7681-3"), $("#path7677-9"), $("#path7685-7"), $("#path7675-1"), $("#path7693-9"), $("#path7695-1"), $("#path7679-1"), $("#path7681-1")];
         var fifthLine = [$("#path7715"), $("#path7717"), $("#path7711")];

         return staggerTimeline.staggerFrom(secondLine.reverse(), 0.2, { scale: 0, autoAlpha: 0 }, 0.1, "stagger")
             .staggerFrom(thirdLine.reverse(), 0.2, { scale: 0, autoAlpha: 0 }, 0.1, "stagger")
             .staggerFrom(fifthLine.reverse(), 0.2, { scale: 0, autoAlpha: 0 }, 0.1, "stagger")
              .from([], 8.7, { scale: 0, autoAlpha: 0 });

     }

     init_scene_4();


 }
