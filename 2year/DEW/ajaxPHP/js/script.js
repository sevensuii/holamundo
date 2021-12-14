

/*
document.write("one ");
document.write("PAUSE ");
document.write("two ");
document.write("three ");
document.write("four ");
document.write("five ");
document.write("one ");
setTimeout(function (){document.write("PAUSE ");}, 6000);
document.write("two ");
document.write("three ");
document.write("four ");
document.write("five ");
 */
//http://www.filltext.com/
//https://www.w3schools.com/js/js_ajax_intro.asp
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://raw.githubusercontent.com/etielprofe/dew/main/animals.json');
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {//https://www.w3schools.com/tags/ref_httpmessages.asp
      var ourData = JSON.parse(ourRequest.responseText);
      console.log(ourRequest.responseText);
      animalContainer.innerText+=ourData[0].species;
      animalContainer.innerText+=ourData[1].species;
      animalContainer.innerText+=ourData[2].species;
    } else {
      console.log("We connected to the server, but it returned an error.");
    }
    
  };

  ourRequest.onerror = function() {
    console.log("Connection error");
  };

  ourRequest.send();
});
/*DATA AT SERVER
[
  {
    "name": "Meowsy",
    "species" : "cat",
    "foods": {
      "likes": ["tuna", "catnip"],
      "dislikes": ["ham", "zucchini"]
    }
  },
  {
    "name": "Barky",
    "species" : "dog",
    "foods": {
      "likes": ["bones", "carrots"],
      "dislikes": ["tuna"]
    }
  },
  {
    "name": "Purrpaws",
    "species" : "cat",
    "foods": {
      "likes": ["mice"],
      "dislikes": ["cookies"]
    }
  }
]
*/