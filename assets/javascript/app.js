 


 // Comment 1: function will trigger the AJAX call
    $('#catButton').on('click', function() {


        // Comment 2: Variable queryURL for giphy. query data along with the API Key
        var queryURL = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cats";

        // Comment 3:  ajax call to the API along with comment 4
        $.ajax({url: queryURL, method: 'GET'})

            // Comment 4:  receive information from giphy
            .done(function(response) {

                // Comment 5:  returns the reponse from the url/website
                var imageUrl = response.data.image_original_url;

                // Comment 6:  images of cats - an easier way to get an image link to display from an AJAX response
                var catImage = $("<img>");
                
                // Comment 7:  takes the cat images and adds attr src and image url
                catImage.attr('src', imageUrl);
                catImage.attr('alt', 'cat image');

                // Comment 8: Prepends and puts the images in the beginning of the selected elements
                $('#images').prepend(catImage);
                console.log("madeit");
            });
        });