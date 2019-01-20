//scripts.js
/*$(function(){}); is a shorthand function call to document.ready event which looks like
$(document).ready(function(){
    //code goes here
});

General syntax of jQuery is:
$(selector).member_to_be_accessed!
*/

$(function(){
//    alert("Hello world");
    $(".top-bar").fadeIn(500);
//    $("#box").hide();
    $(".thing").fadeOut(1000);
    $("h1").css("color","blue");
//    $("button").click(function(){
//        $("#box").fadeOut(1000);
//    });
    $("#hideMe").click(function(){
        $(".top-bar").fadeOut(1000);
    });
    
    
//    selectors.html*********

    /***********************************************
                jQuery selectors
    ***********************************************/
    
//    Grouing selectors
//    $("h2, h3, h4").css("border", "solid 1px red");
    
//    Id selector
//    $("div#container").css("border", "solid 1px red");
    
//    class selector
//    $("p.lead").css("border","solid 1px red");
    
//    Pseudo element selector that selects first element
//    $("li:first").css("border", "solid 1px red");
    
//    pseudo element selector that selects all even para
//    $("p:even").css("border","solid 1px red");
    
//    Descendant Selector
//    $("div em").css("border", "solid 1px red");
    
//    child selector
//    $("div>p").css("border","solid 1px red");
    
//    jQuery Header selector ,which selects all the header together
//    $(":header").css.("border","solid 1px red");
    
//    jQuery cintains selector
//    $("div:contains('love')").css("border","solid 1px red");
    
    
    
    /****************************************
            jQuery EVENTS
    *****************************************/
    $("#box").click(function(){
        alert("you just clicked me!")
    });
    
    $("input[type='text']").blur(function(){
        if($(this).val() == ""){
            $(this).css("border","solid 1px red");
            $("#box").text('Forgot to add something');
        }
    });
    
    $("input[type='text']").keydown(function(){
        if($(this).val() !== ""){
            $(this).css("border","solid 1px green");
            $("#box").text('Thanks for this!');
        }
    });
    
    $("#box").hover(function(){
        $(this).text("your hovered In!");
    },function(){
       $(this).text("your hovered out!"); 
    });
    
    
    
    
    
    /************************************
            jQuery chaining
    ************************************/
    
    $(".notification-bar").delay(2000).slideDown().delay(3000).slideUp(500);
    
    
    /************************************
            jQuery hide-show
    ************************************/
    
//    $("h1").hide();
//    $(".hidden").show();
    
    $(".hidden").fadeIn(8000);
    $("#box1").click(function(){
        $(this).fadeTo(1000, 0.25, function(){
            $(this).slideUp();
        });
    });
    
    $("div.hidden").slideDown();
    
    $("button").click(function(){
        $("#box1").slideToggle();
    });
    
    
    
    /************************************
            jQuery Animate
//    ************************************/              /*javascript me {} as a obj b treat hota*/
    
     $("#left").click(function(){
        $(".box").animate({
            left: "-=40px",
            fontSize: "+=2px"
        });
    });
    $("#right").click(function(){                                      /*williamstonis cache coherency mesc protocol*/
            $(".box").animate({
                left: "+=40px",
                fontSize: "-=2px"
        });
    });

    $("#up").click(function(){
        $(".box").animate({
            top: "-=40px",
            opacity: "+=0.1"                            /*aaabbccddd*/
        });
    });
    $("#down").click(function(){
        $(".box").animate({
            top: "+=40px",
            opacity: "-=0.1"
        });
    });


    
    
    
    /************************************
            CSS.html*/

    
    $("#circle2").css({
        'background': '#8a8',
        'color': 'white',
        'width': '150px',
        'height': '150px',
        'text-align': 'center',
        'line-height': '150px',
        'margin': '40px',
        'display': 'inline-block'
    }).addClass('circleShape');
    
    
    
    
    $("#name").blur(function(){
        if($(this).val() == ""){
            $(this).addClass("danger");
            $(this).addClass("success");
        }
        else{
            $(this).addClass("success");
            $(this).addClass("danger");
        }
    });
    
    
    
    
    /************************************
            car race
    *************************************/
    

    
    
    $("#go").click(function(){
        function checkIfComplete(){
            if(isComplete==false){
                isComplete=true;
            }else{
                place="second";
            }
        }
        
        
        var isComplete = false;

        var place = "first";

        var car1Time= Math.floor(1+Math.random()*5000);
        var car2Time= Math.floor(1+Math.random()*5000);

        var car1Width=$("#car1").width();
        var car2Width=$("#car2").width();

        
        var raceTrackWidth1=$(window).width()-car1Width;
        var raceTrackWidth2=$(window).width()-car2Width;
        
    
        $("#car1").animate({
            left: raceTrackWidth1
        },car1Time,function(){
            checkIfComplete();
            $("#raceInfo1 span").text("Finished in "+place+" place and clocked in "+car1Time+" milliseconds");
        });
    
        $("#car2").animate({
            left: raceTrackWidth2
        },car2Time,function(){
            checkIfComplete();
            $("#raceInfo2 span").text("Finished in "+place+" place and clocked in "+car2Time+" milliseconds");
        });
    });
    
    $("#reset").click(function(){
        $('.car').css("left","0");
        $(".raceInfo span").text("");
    });
    
    


    
    
    
    
    
    
    
    
    
});