 function init_scene_2() {

     var tl = new TimelineLite();
     tl.add(appearText(), "stage0","+=1")
       .add(appearWomen(), "stage1")
       .add(briefcase(), "stage2")
       .add(granny(), "stage3")
       .add(kid(), "stage4");

       // $("#scene2").css({ top: $("#scene1").outerHeight()+"px" });
       // $(".tag").css({ top: "-"+parseInt($("#scene1").outerHeight()/4+165)+"px" });

     // build scene
     var scene = new ScrollMagic.Scene({ triggerElement: document.getElementById("trigg"), duration: 10000,offset: $("#scene1").outerHeight() });
     scene.setTween(tl);
     scene.addIndicators({ name: "scene 2" }); // add indicators (requires plugin)  
     //scene.addTween(tl);
     scene.addTo(window.Scrollcontroller);

     function appearText(){
        var staggerTimeline = new TimelineLite();
         return staggerTimeline//.from($("#scene2"), 3, { top: $("#scene1").outerHeight()+"px" })
                                .from($("#scene2text"), 0.7, { scale:0, autoAlpha:0 });
     }

     function appearWomen() {
         var staggerTimeline = new TimelineLite();
         return staggerTimeline//.from($("#scene2"), 3, { top: $("#scene1").outerHeight()+"px" })
                                .from($("#g6324"), 3, { y:"300px" });
                               
     }

     function briefcase() {
        var staggerTimeline = new TimelineLite();
        var briefcase = $("#g7811");
        var pathtoBriefcase = [$("#path5923"),$("#path5919"),$("#path5921"),$("#path5917"),$("#path5925"),$("#path5933"),$("#path5927"),$("#path5929"),$("#path5931"),$("#path5935"),$("#path5905"),$("#path5907"),$("#path5909"),$("#path5901"),$("#path5903"),$("#path5915"),$("#path5913"),$("#path5911"),$("#path4541")];
        return staggerTimeline.staggerFrom(pathtoBriefcase, 0.2, {scale:0, autoAlpha:0}, 0.1, "stagger")
                                .from(briefcase,0.3,{scale:0, autoAlpha:0});
        
     }

     function granny() {
        var staggerTimeline = new TimelineLite(); 
        var granny = $("#g7822");
        var pathtoGranny = [$("#path5109"),$("#path5111"),$("#path5169"),$("#path5165"),$("#path5159"),$("#path5163"),$("#path5167"),$("#path5177"),$("#path5179"),$("#path5173"),$("#path5175"),$("#path5171"),$("#path5157"),$("#path5145"),$("#path5147"),$("#path5133"),$("#path5129"),$("#path5131"),$("#path5107"),$("#path5161"),$("#path5095"),$("#path5097"),$("#path5105"),$("#path5113"),$("#path5119"),$("#path5099"),$("#path5101"),$("#path5103"),$("#path5117"),$("#path5135"),$("#path5143"),$("#path5139"),$("#path5153"),$("#path5149"),$("#path5151"),$("#path5137"),$("#path5155"),$("#path5121"),$("#path5125"),$("#path5115"),$("#path5127"),$("#path5141"),$("#path5123")];       
        return staggerTimeline.staggerFrom(pathtoGranny, 0.2, {scale:0, autoAlpha:0}, 0.1, "stagger")
                                .from(granny,0.3,{scale:0, autoAlpha:0});
     }

     function kid() {
        var staggerTimeline = new TimelineLite();
        var kid = $("#g9533");
        var pathtoKid = [$("#path5963"),$("#path5949"),$("#path5945"),$("#path5947"),$("#path5951"),$("#path5953"),$("#path5957"),$("#path5981"),$("#path5169-2"),$("#path5969-2"),$("#path5979"),$("#path5967"),$("#path5985"),$("#path5987"),$("#path5971"),$("#path5973"),$("#path5969"),$("#path5977"),$("#path5975"),$("#path5989")];        
        return staggerTimeline.staggerFrom(pathtoKid, 0.2, {scale:0, autoAlpha:0}, 0.1, "stagger")
                                .from(kid,1.7,{scale:0, autoAlpha:0});
     }

     init_scene_3();
 }
