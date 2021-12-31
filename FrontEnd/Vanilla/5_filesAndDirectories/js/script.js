//Declaration of global variables
var fileIcon = '<i class="fas fa-file-alt"></i>';
var closedFolder = '<i class="fas fa-folder"></i>';
var openedFolder = '<i class="fas fa-folder-open"></i>';
var addItem = '<i class="fas fa-plus-circle add-btn"></i>';
var removeItem = '<i class="fas fa-trash"></i>';
var imageIcon = '<i class="fas fa-image"></i>';
var pdfIcon = '<i class="fas fa-file-pdf"></i>';

var folderCheckbox = '<div class="folder"><label class="custom-checkbox"><input type="checkbox" /><i class="fas fa-folder unchecked"></i><i class="fas fa-folder-open checked"></i><span class="text"></span></label><div class="fodler-content"><div class="folder"><label class="custom-checkbox"><input type="checkbox" /><i class="fas fa-folder unchecked"></i><i class="fas fa-folder-open checked"></i><span class="text">Descargas</span></label></div></div>';

var noti = document.querySelector("#notification");

var parent, thisChild, items, myCheckBox;
var lista;
//End ---------------------------

//document.querySelector(".icon").innerHTML = openedFolder;

function addingFolder() {
    console.log("sad");
}

function addRemoveAction() {    //Adds the remove action for the trash icon so items can be deleted
    lista = document.querySelectorAll(".removeItem");
    for (let i = 0; i < lista.length; i++) {
        lista[i].addEventListener("click", function(e) {
            parent = e.target.parentElement.parentElement.parentElement;
            thisChild = e.target.parentElement.parentElement;
            console.log(thisChild.children);
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

}

function checkType(arr) {   //Returns 0->Folder, 1->PDF, 2->IMG, 3->Other files
    if (arr.length == 0) {
        return 404;
    }
    let pos = arr.indexOf(".");
    let cad = "";
    if (pos != -1) {
        for (let i = pos + 1; i < arr.length; i++) {
            cad += arr[i];
        }
        cad = cad.toLocaleLowerCase();
        if (cad == "pdf") {
            return 1;
        }
        else if ((cad == "jpg") || (cad == "png")) {
            return 2;
        }
        else {
            return 3;
        }
    }
    else {
        return 0;
    }
}

function addAppendAction() {    //Adds actions so you can add items like folders or diferente types of files
    items = document.querySelectorAll(".add-btn");
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', function(e) {
            e.target.style.display = 'none';
            console.log(e.target.parentElement.parentElement.children[0]);
            let res = e.target.parentElement.parentElement.children[0];
            res.style.width = "56.5%";
            e.target.parentElement.innerHTML += '<div id="floating-add"></div><input type="text"><input id="add-this-item" type="button" value="Add"><input id="cancel-action" type="button" value="Cancel"></div>';
            let btn = document.querySelector("#add-this-item");
            let btn2 = document.querySelector("#cancel-action");
            btn2.addEventListener('click', function() { //Reset add form to a icon
                addIcons();
                addAppendAction();
            })
            btn.addEventListener('click', function(e) {
                let val = checkType(e.target.previousSibling.value)
                template = document.createElement("div");
                if (val == 404) {
                    sendNotification("Name can't be empty", 2);
                }
                else if (val == 1) {
                    template.classList.add("pdf");
                    template.innerHTML = `<span class="icon"><i class="fas fa-file-pdf"></i></span><span class="file-name"> ${e.target.previousSibling.value} </span><div class="removeItem"></div>`;
                }
                else if (val == 2) {
                    template.classList.add("image");
                    template.innerHTML = `<span class="icon"><i class="fas fa-image"></i></span><span class="file-name"> ${e.target.previousSibling.value} </span><div class="removeItem"></div>`;
                }
                else if (val == 3) {
                    template.classList.add("file");
                    template.innerHTML = `<span class="icon"><i class="fas fa-file-alt"></i></span><span class="file-name"> ${e.target.previousSibling.value} </span><div class="removeItem"></div>`;
                }
                else if (val == 0) {
                    template.classList.add('folder');
                    template.innerHTML = `<label class="custom-checkbox">
                                            <input type="checkbox" /> 
                                            <i class="fas fa-folder unchecked"></i>
                                            <i class="fas fa-folder-open checked"></i>
                                            <span class="text">${e.target.previousSibling.value}</span>
                                        </label>
                                        <div class="addItem"></div>
                                        <div class="removeItem"></div>
                                        <div class="folder-content" style="display: none;">
                                        </div>`;
                }
                console.log(e.target.parentElement.parentElement.children)
                e.target.parentElement.parentElement.children[3].appendChild(template);
                console.log(e.target.parentElement.parentElement.children)
                addIcons();
                addRemoveAction();
                addAppendAction();
                addHideShowAction();
            })
            res.style.width = "85%";
        })
    }
}
/*
<div class="folder">
                            <label class="custom-checkbox">
                                    <input type="checkbox" />
                                    <i class="fas fa-folder unchecked"></i>
                                    <i class="fas fa-folder-open checked"></i>
                                    <span class="text">Imágenes</span>
                            </label>
                            <div class="addItem"></div>
                            <div class="removeItem"></div>
                            <div class="folder-content" style="display: none;">
                                <div class="image"><span class="icon"><i class="fas fa-image"></i></span><span class="file-name">foto1.png</span><div class="removeItem"></div></div>
                                <div class="image"><span class="icon"><i class="fas fa-image"></i></span><span class="file-name">foto3.png</span><div class="removeItem"></div></div>
                                <div class="image"><span class="icon"><i class="fas fa-image"></i></span><span class="file-name">carro.jpg</span><div class="removeItem"></div></div>
                            </div>
                        </div>
*/

function sendNotification(tipe, option) {   //Sends a notification for a specific case
     if (option == 1) {
	    noti.innerText = "This " + tipe + " has been deleted!";
        noti.style.backgroundColor = "lightgreen";
        noti.style.display="block";
        setTimeout(function () {noti.style.display = "none";}, 1500)
     }
     else if (option == 0) {
        noti.innerText = "This " + tipe + " is not empty!";
        noti.style.backgroundColor = "lightcoral";
        noti.style.display = "block";
        setTimeout(function () {noti.style.display = "none";}, 1500)
     }
     else if (option == 2) {
         noti.innerText = tipe;
         noti.style.backgroundColor = "lightcoral";
         noti.style.display = "block";
         setTimeout(function () {noti.style.display = "none";}, 1500)

     }
 }

function addIcons() {   //Adds icons that are not loaded in html
    items = document.querySelectorAll(".addItem");
    for (let i = 0; i < items.length; i++) {
        items[i].innerHTML = addItem;
    }
    items = document.querySelectorAll(".removeItem");
    for (let i = 0; i < items.length; i++) {
        items[i].innerHTML = removeItem;
    }

}

function addHideShowAction() {  //Adds show and hide function to the folders
    myCheckBox = document.querySelectorAll("div label input");
    //console.log(myCheckBox);
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
}

function loadEverything() { //Loads essential stuff when the page is fully loaded

    addIcons();
    addRemoveAction();
    addAppendAction();
    addHideShowAction();
    
}






//myCheckBox[i].parentElement.childNodes[7].style.display = 'none';