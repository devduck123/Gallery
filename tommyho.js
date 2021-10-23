// define variables
let images = [];
let captions = [];
let descriptions = [];

// assign values
images.push("assets/1.jpg");
images.push("assets/2.jpg");
images.push("assets/3.jpg");
images.push("assets/4.jpg");
images.push("assets/5.jpg");
images.push("assets/6.jpg");

captions.push("Pikachu");
captions.push("Duck");
captions.push("Mario");
captions.push("Minion");
captions.push("Ice and Glass");
captions.push("Pretty Drink");

descriptions.push(
  "This is a picture of a Pikachu in the streets. Pikachu is a yellow pokemon."
);
descriptions.push(
  "This is a picture of a small duck. I've always loved ducks. Sometimes, I'll explain algorithms and problem-solving processes to an imaginary duck."
);
descriptions.push(
  "This is a picture of Mario. I am a big fan of Tanooki Mario in Mario Kart."
);
descriptions.push(
  "This is a picture of a Minion. I thought that Despicable Me was a decent movie series."
);
descriptions.push(
  "This is just a nice picture of some ice and glass that I found online."
);
descriptions.push(
  "This is a beautiful picture of a drink. I love purchasing tasty drinks. I would rather drink than eat, but I need to do both..."
);

loadImages(images);
loadCaptions(captions);
// loadDescriptions(descriptions)

// functions
function loadImages(images) {
  for (let i = 0; i < images.length; i++) {
    let imageNumber = i + 1; // account for arrays being 0-indexed
    let currImage = "#img" + imageNumber.toString(); // current image ID
    let currContainer = "#container" + imageNumber.toString();
    let imgAddress = images[i]; // current image address

    // this is where images are hosted, the src to render the initial images
    let srcUrl =
      "https://cis3110tommyho.s3.us-west-1.amazonaws.com/team_assignment2/" +
      imgAddress;
    // assign the corresponding src to the image
    document.querySelector(currImage).src = srcUrl;
    // this is the querystring to link to the corresponding detail page
    let hrefUrl = "tommyhoDetail.html?" + "img=" + srcUrl;
    // create an <a> element
    let link = document.createElement("a");
    // link the <a> element to the detail page
    link.href = hrefUrl;
    // append the <a> element to the container
    document.querySelector(currContainer).append(link);
    // append the image to the <a> element
    link.append(document.querySelector(currImage));
  }
}

function loadCaptions(captions) {
  for (let i = 0; i < captions.length; i++) {
    let captionNumber = i + 1; // account for arrays being 0-indexed
    let currCaption = "#caption" + captionNumber.toString(); // current caption ID
    let imgCaption = captions[i]; // current caption

    document.querySelector(currCaption).textContent = imgCaption;
  }
}

function loadDescriptions(descriptions) {
  for (let i = 0; i < images.length; i++) {
    let descriptionNumber = i + 1; // account for arrays being 0-indexed
    let currDescription = "#description" + descriptionNumber.toString(); // current image ID
    let imgDescription = descriptions[i]; // current image address

    document.querySelector(currDescription).textContent = imgDescription;
  }
}
