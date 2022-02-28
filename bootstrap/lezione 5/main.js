
    let progressBars = $('.progress-bar');

    let percentage = 0;
    

    let interval = setInterval(function(){
        percentage ++;

        if(percentage<=100){

      progressBars.css('width', percentage +' %');
      progressBars.txt(percentage + '%');
    } else {
    clearInterval(interval);

    }

    }, 100);


