
var animals = ["dog", "cat","rabit", "goldfish","bird","chicken"];

function displayAnimalImage(){
    var animal = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9";

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);

        //Creating the div for animals pic display
      var animalDiv = $("<div class='movie'>");
      //storing the rating of animal pic
      var rating = response.data[0].rating;
      var pRating = $("<p>").text(`Rating: ${rating}`);
      animalDiv.append(pRating);
      var imgURL = response.data[0].images.downsized.url;
      var image = $("<img>").attr("src", imgURL);
      animalDiv.append(image);
      $("#images-view").prepend(animalDiv);
      });
      

}

function renderButton(){
    $("#buttons-view").empty();
    for (var i = 0; i < animals.length; i++) {
        var a = $("<button>");
        a.addClass("animal-btn");
        a.attr(animals[i]);
        a.text(animals[i]);
        $("#buttons-view").append(a);

    }




}

$("#add-image").on("click", function(event){
    event.preventDefault();
    var animal = $("#giphy-input").val().trim();
    animals.push(animal);
    renderButton();
})

$(document).on("click", ".animal-btn", displayAnimalImage);
renderButton();
// displayAnimalImage();

    