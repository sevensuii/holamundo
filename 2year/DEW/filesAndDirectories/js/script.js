//Declaration of global variables
var fileIcon = '<i class="fas fa-file-alt"></i>';
var closedFolder = '<i class="fas fa-folder"></i>';
var openedFolder = '<i class="fas fa-folder-open"></i>';
var addItem = '<i class="fas fa-plus-circle"></i>';
var removeItem = '<i class="fas fa-trash"></i>';
var imageIcon = '<i class="fas fa-image"></i>';
var pdfIcon = '<i class="fas fa-file-pdf"></i>';

var folderCheckbox = '<div class="folder"><label class="custom-checkbox"><input type="checkbox" /><i class="fas fa-folder unchecked"></i><i class="fas fa-folder-open checked"></i><span class="text"></span></label><div class="fodler-content"><div class="folder"><label class="custom-checkbox"><input type="checkbox" /><i class="fas fa-folder unchecked"></i><i class="fas fa-folder-open checked"></i><span class="text">Descargas</span></label></div></div>';
//End ---------------------------

//document.querySelector(".icon").innerHTML = openedFolder;

function addingFolder() {
    console.log("sad");
}

//function removeItem(parent1, thisChild1) {
//    //console.log(e.target.parentElement.parentElement.style.display = "none");
//    //let parent = e.target.parentElement.parentElement.parentElement;
//    //let thisChild = e.target.parentElement.parentElement;
//    //let empty = false;
//    let parent = parent1;
//    let thisChild = thisChild1;
//    console.log(thisChild.childNodes);
//    if (thisChild.className == "folder") {
//        for (let h = 0; h < thisChild.childNodes[7].childNodes.length; h++) {
//            if (thisChild.childNodes[7].childNodes[h].nodeName == "#text") {
//                empty = true;
//            }
//            else {
//                empty = false;
//            }
//        }
//        if (empty) {
//            parent.removeChild(thisChild);
//            
//        }
//        console.log("This folder is empty");
//        
//    }
//    else if (thisChild.className == "file" || thisChild.className == "image" || thisChild.className == "pdf"){
//        console.log("This is a file")
//        parent.removeChild(thisChild);
//    }
//    //console.log(parent);
//    //console.log(parent.childNodes);
//}

var lista = document.querySelectorAll(".removeItem");

//for (let i = 0; i < lista.length; i++) {
//    lista[i].addEventListener("click", function(e) {
//        let parent = e.target.parentElement.parentElement.parentElement;
//        let thisChild = e.target.parentElement.parentElement;
//        removeItem(parent, thisChild);
//    });
//}
for (let i = 0; i < lista.length; i++) {
    lista[i].addEventListener("click", function(e) {
        //console.log(e.target.parentElement.parentElement.style.display = "none");
        let parent = e.target.parentElement.parentElement.parentElement;
        let thisChild = e.target.parentElement.parentElement;
        let empty = false;
        console.log(thisChild.childNodes);
        if (thisChild.className == "folder") {
            for (let h = 0; h < thisChild.childNodes[7].childNodes.length - 1; h++) {
                if (thisChild.childNodes[7].childNodes[h].nodeName == "#text") {
                    empty = true;
			let noti = document.querySelector("notification");
			noti.innerHTML = "The folder has been deleted";
			noti.style.display = "block";
			setTimeout(function () {noti.style.display = "none";}, 1500)
                }
                else {
                    empty = false;
                    break;
                }
            }
            console.log(empty);
            if (empty) {
                parent.removeChild(thisChild);
                
            }
            else {
                console.log("This folder is not empty");
            }
            
        }
        else if (thisChild.className == "file" || thisChild.className == "image" || thisChild.className == "pdf"){
            console.log("This is a file")
            parent.removeChild(thisChild);
            empty = false;
        }
        //console.log(parent);
        //console.log(parent.childNodes);
    })
}

//list.addEventListener('click', function(e) {
  //  console.log(e);
    //if(e.target.className == 'delete'){
    //  const li = e.target.parentElement;
    //  li.parentNode.removeChild(li); //removes the element
     //li.setAttribute ('style', 'display: none');//Hides the element 
    // li.style.display="none"; 
      //https://www.w3schools.com/jsref/prop_style_display.asp
  //  }
  //}
 // );




var items = document.querySelectorAll(".addItem");
for (let i = 0; i < items.length; i++) {
    items[i].innerHTML = addItem;
}
items = document.querySelectorAll(".removeItem");
for (let i = 0; i < items.length; i++) {
    items[i].innerHTML = removeItem;
}
/*items = document.querySelectorAll(".icon");
for (let i; i < items.length; i++) {
    items[i].innerHTML = fileIcon;
}*/
