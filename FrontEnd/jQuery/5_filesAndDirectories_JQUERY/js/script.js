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
        else if ((cad == "jpg") || (cad == "png") || (cad == "png")){
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

$(document).ready(function() {

    $(document).on('click','.add-item',function() {     // Calling an event this way will be present in old and new elements
        $(this).hide();
        if ($(this).closest('.icons-box').find('div:first').hasClass('adding-form')) {
            console.log('Insert form already exists');
        }
        else {
            $(this).closest('.icons-box').prepend(`<div class="adding-form"><input type="text" class="new-item-name" autofocus><button class="add-new-item">Add</button><button class="cancel-new-item">Cancel</button></div>`)
            $('.cancel-new-item').click(function() {
                $(this).closest('.icons-box').find('.add-item').show();
                $(this).closest('.adding-form').remove();
            })
            $('.add-new-item').click(function() {
                let name = $(this).closest('.adding-form').find('.new-item-name').prop('value');
                let itemType = checkType(name);
                switch (itemType) {
                    case 0:
                        console.log('This is a folder');
                        $(this).closest('.folder').find('.folder-content').append(`<div class="folder">
                                <div class="folder-name">
                                    <div>
                                        <label class="custom-checkbox">
                                            <input type="checkbox" checked/>
                                            <i class="fas fa-folder unchecked"></i>
                                            <i class="fas fa-folder-open checked"></i>
                                            <span class="folder-real-name">${name}</span>
                                        </label>
                                    </div>
                                    <div class="icons-box">
                                        <div class="add-item"><i class="fas fa-plus-circle add-btn"></i></div>
                                        <div class="remove-item"><i class="fas fa-trash"></i></div>
                                    </div>
                                </div>
                                <div class="folder-content">
                                </div>
                            </div>`);
                        $('#folder-created').fadeIn();
                        setTimeout(function() {$('#folder-created').fadeOut();}, 2000);
                        break;
                    
                    case 1:
                        console.log('This is a PDF');
                        $(this).closest('.folder').find('.folder-content').append(`<div class="file">
                                        <div class="icon"><i class="fas fa-file-pdf"></i><span class="file-name">${name}</span></div>
                                        <div class="remove-item"><i class="fas fa-trash"></i></div>
                                    </div>`);
                        $('#file-created').fadeIn();
                        setTimeout(function() {$('#file-created').fadeOut();}, 2000);
                        break;
                         
                    case 2:
                        console.log('This is a image');
                        $(this).closest('.folder').find('.folder-content').append(`<div class="file">
                                        <div class="icon"><i class="fas fa-image"></i><span class="file-name">${name}</span></div>
                                        <div class="remove-item"><i class="fas fa-trash"></i></div>
                                    </div>`);
                        $('#file-created').fadeIn();
                        setTimeout(function() {$('#file-created').fadeOut();}, 2000);
                        break;

                    case 3:
                        console.log('This is other files');
                        $(this).closest('.folder').find('.folder-content').append(`<div class="file">
                                        <div class="icon"><i class="fas fa-file-alt"></i><span class="file-name">${name}</span></div>
                                        <div class="remove-item"><i class="fas fa-trash"></i></div>
                                    </div>`);
                        $('#file-created').fadeIn();
                        setTimeout(function() {$('#file-created').fadeOut();}, 2000);
                        break;
                }
                // After the item is created, the form is deleted and add icon is shown
                $(this).closest('.icons-box').find('.add-item').show();
                $(this).closest('.adding-form').remove();
            })
        }
    })

    $(document).on('click', '.remove-item', function() {
        console.log($(this).parent().attr('class'));
        switch ($(this).parent().attr('class')) {
            case 'file':
                $(this).closest('.file').fadeOut(function() {$(this).closest('.file').remove();});      // Deletes the item with a fade out animation
                $('#file-deleted').fadeIn();
                setTimeout(function() {$('#file-deleted').fadeOut();}, 2000);
                break;

            case 'icons-box':
                if ($(this).closest('.folder').find('.folder-content').children().length) {
                    $('#folder-not-empty').fadeIn();
                    setTimeout(function() {$('#folder-not-empty').fadeOut();}, 2000);
                }
                else {
                    $(this).closest('.folder').fadeOut(function() {$(this).closest('.folder').remove();});      // Deletes the item with a fade out animation
                    $('#folder-deleted').fadeIn();
                    setTimeout(function() {$('#folder-deleted').fadeOut();}, 2000);
                }

        }
    })

    $(document).on('change', '.custom-checkbox input' ,function() {
        console.log($(this).prop('checked'))
        console.log($(this).closest('.folder').find('.folder-content').slideToggle());
    })
})

// Code to implement search function if I have time
// jquery
// $('.contact-name').hide();
// $('#search').click(function(){
//     $('.contact-name').hide();
//     var txt = $('#search-criteria').val();
//     $('.contact-name').each(function(){
//        if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
//            $(this).show();
//        }
//     });
// });
// html
{/* <input type="text" id="search-criteria"/>
<input type="button" id="search" value="search"/>
<div class="contact-name"><h3><a href="##">Charles Smith</a></h3></div>
<div class="contact-name"><h3><a href="##">raj kumar</a></h3></div>
<div class="contact-name"><h3><a href="##">Charles Smith</a></h3></div> */}
// end