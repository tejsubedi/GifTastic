var animals = ["dog", "cat", "rabit", "goldfish", "bird", "chicken"];
var apiKey = "7wvH2s5AVnzCW2IrWSg3D3SUhgmnGBXq";
var input = $("#animal-input");
var submit = $("#add-image");
var imageView = $("#images-view");
var btnDisplayDiv = $("#buttons-view");


function displayAnimals(e) {
  var animal = e.target.innerText;
  var queryURL = "https://api.giphy.com/v1/gifs/search?q= " + animal + "&api_key=" + apiKey + "&limit=10";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(response => {

    var animalPic = response.data;
    animalPic.forEach(function (animal) {
      imageView.prepend(`<div class="card bg-dark m-2 animated flip"><div class="card-header h6 ">Rating:
           ${animal.rating}</div>
          <img class="img-thumbnail " src=
          ${animal.images.fixed_height_still.url}
          data-still= ${animal.images.fixed_height_still.url}
          data-animate= ${animal.images.fixed_height.url
          } data-state="still" ></div>`);

    });

  });

};

function renderButton(){
  btnDisplayDiv.empty();
  animals.forEach(function (animal) {
    btnDisplayDiv.append(`<button data-animal=${animal}
     type="button" class="animal-btn btn btn-outline-light p-2 m-2">${animal}</button>`);

  });
};


submit.on("click", function (event) {
  event.preventDefault();
  var inpuVal = input.val().trim();
  animals.push(inpuVal);
  renderButton();

})


function animateImage() {
  var state = $(this).attr("data-state");
  if (state === "still") {
    console.log($(this).attr("src", $(this).attr("data-animate")));
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }
}

btnDisplayDiv.on("click", function(event){
  event.preventDefault();
  imageView.empty();
})

renderButton();
 $(document).on("click", ".animal-btn", displayAnimals);
 $(document).on("click", ".img-thumbnail", animateImage);
 
 
 
