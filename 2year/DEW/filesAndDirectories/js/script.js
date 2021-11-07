//Declaration of global variables
var fileIcon = '<i class="fas fa-file-alt"></i>';
var closedFolder = '<i class="fas fa-folder"></i>';
var openedFolder = '<i class="fas fa-folder-open"></i>';
var addItem = '<i class="fas fa-plus-circle"></i>';
var removeItem = '<i class="fas fa-trash"></i>';
var imageIcon = '<i class="fas fa-image"></i>';
var pdfIcon = '<i class="fas fa-file-pdf"></i>';

var folderCheckbox = '<div class="folder"><label class="custom-checkbox"><input type="checkbox" /><i class="fas fa-folder unchecked"></i><i class="fas fa-folder-open checked"></i><span class="text"></span></label><div class="fodler-content"><div class="folder"><label class="custom-checkbox"><input type="checkbox" /><i class="fas fa-folder unchecked"></i><i class="fas fa-folder-open checked"></i><span class="text">Descargas</span></label></div></div>';

var noti = document.querySelector("#notification");
//End ---------------------------

//document.querySelector(".icon").innerHTML = openedFolder;

function addingFolder() {
    console.log("sad");
}

var lista = document.querySelectorAll(".removeItem");

for (let i = 0; i < lista.length; i++) {
    lista[i].addEventListener("click", function(e) {
        let parent = e.target.parentElement.parentElement.parentElement;
        let thisChild = e.target.parentElement.parentElement;
        console.log(thisChild.childNodes);
        if (thisChild.className == "folder" && thisChild.childNodes[7].childElementCount == 0) {
            parent.removeChild(thisChild);
            sendNotification(thisChild.className, 1);
        }
        else if (thisChild.className == "file" || thisChild.className == "image" || thisChild.className == "pdf"){
            console.log("This file has been removed")
            parent.removeChild(thisChild);
            sendNotification(thisChild.className, 1);
    }

        else {
            console.log("This folder is not empty");
            sendNotification(thisChild.className, 0);
        }
    })
}

 function sendNotification(tipe, option) {
     if (option) {
	    noti.innerText = "This " + tipe + " has been deleted!";
        noti.style.backgroundColor = "lightgreen";
        noti.style.display="block";
        setTimeout(function () {noti.style.display = "none";}, 1500)
     }
     else {
        noti.innerText = "This " + tipe + " is not empty!";
        noti.style.backgroundColor = "lightcoral";
        noti.style.display = "block";
        setTimeout(function () {noti.style.display = "none";}, 1500)
     }
 }

function loadEverything() {


    
}






var items = document.querySelectorAll(".addItem");
for (let i = 0; i < items.length; i++) {
    items[i].innerHTML = addItem;
}
items = document.querySelectorAll(".removeItem");
for (let i = 0; i < items.length; i++) {
    items[i].innerHTML = removeItem;
}
var myCheckBox = document.querySelectorAll("div label input");
console.log(myCheckBox);
for (let i = 0; i < myCheckBox.length; i++) {
    myCheckBox[i].addEventListener('change', function(e) {
        if (myCheckBox[i].checked) {
            e.target.parentElement.parentElement.childNodes[7].style.display = "block";
        }
        else {
            e.target.parentElement.parentElement.childNodes[7].style.display = "none";
        }
    })
}
//myCheckBox[i].parentElement.childNodes[7].style.display = 'none';