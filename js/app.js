$(document).foundation()


// Get the .gif images from the "data-alt".
    var getGif = function() {
        var gif = [];
        $('img').each(function() {
            var data = $(this).data('alt');
            gif.push(data);
        });
        return gif;
    }

    var gif = getGif();

    // Change the image to .gif when clicked and vice versa.
    $('figure').on('click', function() {
        var $this   = $(this),
                
                $img    = $this.children('img'),
                $imgSrc = $img.attr('src'),
                $imgAlt = $img.attr('data-alt'),
                $imgExt = $imgAlt.split('.');


        if ($imgExt[2] === 'gif') {
            console.log('here it is')
            console.log('is gif')
            $img.attr('src', $imgAlt).attr('data-alt', $imgSrc);
        }

        setTimeout(function() { 
            $(".intro-animation").fadeOut("slow");
        }, 5000);

        setTimeout(function() { 
            $(".logo-div").fadeIn("slow");
        }, 6000);
    });

    // $(window).scroll(function(){
    //     $(".intro-animation").css("opacity", 1 - $(window).scrollTop() / 250);
    //     $(".logo-div").css("opacity", $(window).scrollTop() / 250);
    //   });