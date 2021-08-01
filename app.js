console.log("NATIONAL DIGITAL LIBRARY");


// constructor 
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;


}

// display constructor 
function Display() {


}

// add methods to display prototypes

Display.prototype.add = function (book) {
    console.log("adding to ui");
    tableBody = document.getElementById("tableBody");
    let uiString = `<tr>
                           <td>${book.name}</td>
                           <td>${book.author}</td>
                           <td>${book.type}</td>
                    </tr> `;

    tableBody.innerHTML += uiString;

}

// implement the clear function
Display.prototype.clear = function () {

    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
}

//  implement the validate function
Display.prototype.validate = function (book) {
       if( book.name.length < 2 || book.name.author < 2)
        {
               return false
        }
        else{
             return true;
        }
//     let libraryForm = document.getElementById("libraryForm");
//     libraryForm.reset();
// }
    }

Display.prototype.show = function(type , displayMessage){
    let message = document.getElementById("message")
    message.innerHTML = `
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
  <strong>Message :</strong>${displayMessage} 
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>

    `;

    setTimeout(()=>{
       message.innerHTML = " ";
    },2000)
}




// add submit event listener to libraryForm
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);



function libraryFormSubmit(e) {

    console.log("you have submitted library form");

    let name = document.getElementById("bookName").value;
    let author = document.getElementById("author").value;
    // let type = document.getElementById("").value;

    let fiction = document.getElementById("fiction");
    let programming = document.getElementById("programming");
    let cooking = document.getElementById("cooking");

    let type;

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }
    //    e.preventDefault();
    let book = new Book(name, author, type);
    console.log(book)



    let display = new Display();

    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show("success" , "Your book has been successfully added")
    }
    else{
        // show error to te error 
        display.show("danger" , "sorry you cannot add this book");

    }

    // display.clear();
    e.preventDefault();

}