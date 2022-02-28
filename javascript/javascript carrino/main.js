

/*$('#title').css('background-color','limegreen');

$('h3').css('color','red');

$('.test').css('border','2px dashed blue');

$('') */



//Eventi Listener
//un evento che rimane in ascolto
// 'nome evento che deve ascoltare' e 'funzione da eseguire quando accade'
//funzione on( con on attacchi un listener)




$('#btn').on('click',function(){
    
    $('#title').addClass('bg-green');


    $('h3').addClass('color-red');


    $('.test').addClass('dashed-blue');
});


$('#btnrem').on('click',function(){
    $('#title').removeClass('bg-green');


    $('h3').removeClass('color-red');


    $('.test').removeClass('dashed-blue');
});


$('#overme').on('mouseover',function(){
                    $('p').css('background','yellow');
                    $('p.prova').css('background','orange'); });

$('#overme').on('mouseout',function(){
                    $('p').css('background','');
                    $('p.prova').css('background',''); });



$('#changecolor').on('click', function(){

        let color = $('input#color').val();
        
        $('#title').css('background-color', color);
});


$('#changetext').on('click',function(){
        
        let text = $('input#text').val();

        $('h3').html(text);

})


$('#prependChild').on('click', function(){
    let text = $('input#text').val();
    $('h2').prepend(text);

})

$('#appendChild').on('click', function(){
    let text = $('input#text').val();
    $('h2').append(text);
})



$('#btn3').on('click', function(){
        $('p').remove();

})