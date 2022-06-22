
$(document).ready(function () {
     
    $("#slogan").fadeOut(1000).fadeIn(300).fadeOut(10).fadeIn(300).fadeOut(10).fadeIn(300)
    $("#logo").fadeOut(100).fadeIn(300).fadeOut(100).fadeIn(300)
    $("#person1").dblclick(function(){
            alert('Para faz cócegas :C')
    });

     $("#person1, #person2, #person3, #person4").mouseenter(function(){
            $(this).fadeOut(100).fadeIn(300).fadeOut(200).fadeIn(1000)
    });

    $("#footerzin").mouseenter(function(){
        $(this).fadeOut(200).fadeIn(500).fadeOut(200).fadeIn(3000)
    });

 });


 