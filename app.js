var txt__button = document.querySelector("#translate__button");
var txt__box = document.querySelector("#txt__translate");
var output = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/dothraki.json";

function urlConstructor(text) {
  return serverURL + "?text=" + text;
}

urlConstructor("parth");

function doFetch(text) {
  fetch(urlConstructor(text))
    .then((response) => response.json())
    .then((json) => (output.innerText = json.contents.translated))
    .catch((error) => {
      console.log("An Error Occured: " + error);
      alert("Some error occured, please try after some time");
    });
}

txt__button.addEventListener("click", function clickEventHandler() {
  doFetch(txt__box.value);
});
