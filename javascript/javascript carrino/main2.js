let changeJoke = function(){

$.get('https://api.chucknorris.io/jokes/random',function(response){
console.log(response);

    $('#icon').attr('src',response.icon_url)

    $('#joke').text(response.value)

});
};

//api (url che mi restituisce un serve con dati)

changeJoke();
$('#changeJoke').on('click',changeJoke);