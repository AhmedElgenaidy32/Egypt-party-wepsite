///<reference types="../@types/jquery"/>
$('aside a').on('click', function(e){
  let links = e.target.getAttribute('href')
  let secOffset = $(links).offset().top
  $('body, html').animate({scrollTop: secOffset}, 2000)
})
$('#about #heading1').on('click', function(){
    $('#about #para3').slideUp(1000)
    $('#about #para2').slideUp(1000)
    $('#about #para4').slideUp(1000)
    $('#para1').slideToggle(500)
})
$('#about #heading2').on('click', function(){
    $('#about #para3').slideUp(1000)
    $('#about #para1').slideUp(1000)
    $('#about #para4').slideUp(1000)
    $('#para2').slideToggle(500)
})
$('#about #heading3').on('click', function(){
    $('#about #para2').slideUp(1000)
    $('#about #para1').slideUp(1000)
    $('#about #para4').slideUp(1000)
    $('#para3').slideToggle(500)
})
$('#about #heading4').on('click', function(){
    $('#about #para3').slideUp(1000)
    $('#about #para1').slideUp(1000)
    $('#about #para2').slideUp(1000)
    $('#para4').slideToggle(500)
})

$('#open').on('click', function(){
    $('#open').animate({marginLeft: '255'}, 1000)
    $('aside').animate({width: '250' , marginLeft:'0'}, 1000)
})
$('#closeBtn').on('click', function(){
    $('aside').animate({ marginLeft:'-300px'}, 1000)
    $('#open').animate({marginLeft: '0'}, 1000)
    $('#open').fadeIn(300)
})

$(function(){
    $('.loader').fadeOut(2000, function(){
      
            $('body').css('overflow', 'auto')
            $('.loading').remove()
    })
})
$(function() {
    var countDownDate = new Date();
    countDownDate.setDate(countDownDate.getDate() + 99);
    countDownDate = countDownDate.getTime();
    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        $("#days").text(`${days} Day`);
        $("#hours").text(`${hours} Hour`)(`${hours} Hour`);
        $("#minutes").text(`${minutes} Minute`);
        $("#seconds").text(`${seconds} Second`);
        if (distance < 0) {
            clearInterval(x);
            $(".countdown").html("EXPIRED");
        }
    }, 1000);
});
$('textarea').on('input', function(){
    let text = $(this).val()
    let wordCount = text.length
    let warning = $('#warning')
    let instructions = $('#instructions')
    if(wordCount > 100){
        warning.show()
        instructions.hide()
    }  
    else{
 warning.hide()
        instructions.show()
    }    
})
