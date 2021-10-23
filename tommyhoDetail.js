let captions = [];
let descriptions = [];

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

document.addEventListener("DOMContentLoaded", function () {
  // BACK BUTTON
  document.querySelector("#btn-back").onclick = () => {
    let prevUrl = "tommyho.html";
    window.location.href = prevUrl;
  };

  // get current href
  let url = window.location.href;
  // console.log("url: " + url);

  let urlParameters = breakUpURLParameters(url);
  // console.log(urlParameters);
  // console.log(urlParameters.search);
  // console.log(urlParameters.search.img);

  // render specific image src from querystring
  document.querySelector("#img-detail").src = urlParameters.search.img;

  let imgNo = getImageNo(url);
  loadCaption(imgNo);
  loadDescription(imgNo);
});

// ********** FUNCTIONS **********
function getImageNo(url) {
  let imgAddress = url.split("/").pop(); // #.jpg
  let imgNo = imgAddress[0]; // #
  return +imgNo; // parseInt() probably works for casting too
}

function loadCaption(imageNo) {
  for (let i = 0; i < captions.length; i++) {
    let captionNumber = i + 1; // account for arrays being 0-indexed
    let caption = "#caption-detail"; // caption ID
    let imgCaption = captions[i]; // current caption

    if (captionNumber === imageNo) {
      document.querySelector(caption).textContent = imgCaption;
      break;
    }
  }
}

function loadDescription(imageNo) {
  for (let i = 0; i < descriptions.length; i++) {
    let descriptionNumber = i + 1; // account for arrays being 0-indexed
    let description = "#description-detail"; // image ID
    let imgDescription = descriptions[i]; // current image address

    if (descriptionNumber === imageNo) {
      document.querySelector(description).textContent = imgDescription;
      break;
    }
  }
}

// ********** PROVIDED FUNCTIONS **********
function breakUpURLParameters(url) {
  // analyze and output the url parameters as a useful array to caller
  // create a link in the DOM and set its href
  var link = document.createElement("a");
  link.setAttribute("href", url);
  console.log("path variable is " + url);

  //  return an easy-to-use object that breaks apart the path
  return {
    host: link.hostname, //  'example.com'
    port: link.port, //  12345
    search: mapMaker(link.search), //  {startIndex: 1, pageSize: 10}
    path: link.pathname, //  '/blog/foo/bar'
    protocol: link.protocol, //  'http:'
  };
}

function mapMaker(search, preserveDuplicates) {
  // responsible for obtaining all url params, representing them into an array
  // option to preserve duplicate keys (e.g. 'sort=name&sort=age')
  preserveDuplicates = preserveDuplicates || false; //  disabled by default

  var outputNoDupes = {};
  var returnableArray = []; //  optional output array to preserve duplicate keys

  // sanity check
  if (!search)
    throw new Error("mapMaker: your search input param is misformed?");

  // remove ? character from your url (?foo=1&bar=2 -> 'foo=1&bar=2')
  search = search.split("?")[1];

  // split apart your keys into a useful array of key/value pairs ('foo=1&bar=2' -> ['foo=1', 'bar=2'])
  search = search.split("&");

  // separate keys from values (['foo=1', 'bar=2'] -> [{foo:1}, {bar:2}])
  // then package as an array for your caller to use as variables
  returnableArray = search.map(function (keyval) {
    var out = {};
    keyval = keyval.split("=");
    out[keyval[0]] = keyval[1];
    // might as well do the no-dupe work too while we're in the loop
    outputNoDupes[keyval[0]] = keyval[1];
    return out;
  });
  return preserveDuplicates ? returnableArray : outputNoDupes;
}
