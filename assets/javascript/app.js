
var animals = ["dog", "cat", "rabit", "goldfish", "bird", "chicken"];
var input = $("#giphy-input");
var submit = $("#add-image");
var apiKey = "7wvH2s5AVnzCW2IrWSg3D3SUhgmnGBXq";
var imgBody = $(".img-body");
var btnDisplayDiv = $("#buttons-view");

function displayAnimalImage() {
  var animal = $(this).attr("data");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q= " + animal + "&api_key=" +apiKey +"&limit=10";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {

    //Creating the div for animals pic display
    //var results = $(".results");
    var animalDiv = $("<div class='animal'>");
    //var resultdIV = results.append(animalDiv);
    //var imageBox = $(".img-box");
    //var imageDiv = resultdIV.append(imageBox);
    
    //storing the rating of animal pic
    var animalPic = response.data;
    //   console.log("Animaldata" + animalPic);

    animalPic.forEach(function (animal) {
      var rating = animal.rating;
      var imgURL = animal.images.downsized.url;
      // var pRating = $("<p>").text(`Rating: ${rating}`);
      // imgBody.append(pRating);
     // var image = $("<img>").attr("src", imgURL);
      //imageDiv.append(image);
      createBox(imgURL);
    })
    // $("#images-view").prepend(animalDiv);
  });


}

function renderButton() {
  btnDisplayDiv.empty();
  for (var i = 0; i < animals.length; i++) {
    var dButton = $("<button>");
    dButton.addClass("animal-btn");
    dButton.attr("data", animals[i]);
    dButton.text(animals[i]);
    btnDisplayDiv.append(dButton);
  }

}

btnDisplayDiv.on("click", function(event){
  event.preventDefault();
  imgBody.empty();
})


submit.on("click", function (event) {
  event.preventDefault();
  //imgBody.empty();
  var inputVal = input.val().trim();
  animals.push(inputVal);
  imgBody.empty();
  renderButton();
  
})



function createBox(imgUrl){

  var newImg = $("<img>");
  newImg.attr("src", imgUrl);
  newImg.addClass("img-box");
  imgBody.append(newImg);
}

function createPageBox(rating){
  
}

$(document).on("click", ".animal-btn", displayAnimalImage);
renderButton();
imgBody.empty();
// displayAnimalImage();

