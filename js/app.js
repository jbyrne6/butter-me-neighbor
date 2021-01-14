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

    // Change the image to .gif when clicked and vice versa.
    $('figure').on('click', function() {
        var $this   = $(this),
                
                $img    = $this.children('img'),
                $imgSrc = $img.attr('src'),
                $imgAlt = $img.attr('data-alt'),
                $imgExt = $imgAlt.split('.');


        if ($imgExt[2] === 'gif') {
            $img.attr('src', $imgAlt).attr('data-alt', $imgSrc);
        }

        // fade out for the intro animation
        setTimeout(function() { 
            $(".intro-animation").fadeOut("slow");
        }, 5000);
        // was 5000

        // fade in for the logo
        setTimeout(function() { 
            $(".fade-in-div").fadeIn("slow");
        }, 6000);
        //was 6000
    });