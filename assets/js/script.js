var userInput = document.getElementById("userInput");
var userButton = document.getElementById("userButton");
var ul = document.querySelector("ul");

function inputLength() {
    return userInput.value.length;
}

function checkListLength() {
    return document.getElementsByTagName("li").length;
}

function createListElement() {
    /* Create List Item */
    var li = document.createElement("li");
    li.classList.add("list-group-item", "done");
    li.classList.toggle("done");
    li.appendChild(document.createTextNode(userInput.value));
    li.addEventListener("click", doneListElement);
    ul.appendChild(li);
    userInput.value = "";
    /* Create User Delete Button */
    var userDeleteButton = document.createElement("button");
    var deleteElementBackspace = document.createElement("span");
    deleteElementBackspace.innerText = "backspace";
    deleteElementBackspace.classList.add("material-icons");
    userDeleteButton.classList.add("btn");
    userDeleteButton.appendChild(deleteElementBackspace);
    userDeleteButton.addEventListener("click", deleteItem);
    li.append(userDeleteButton);
}

function deleteItemAction() {
    userDeleteButton.addEventListener("click", deleteItem);
}

function deleteItem() {
    this.parentElement.remove();
}


function doneListElement(done) {
    this.classList.toggle("done");
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterEnter(event) {
    if (userInput.value.length > 0 && event.keyCode === 13) {
        createListElement();
    }
}

userButton.addEventListener("click", addListAfterClick);
userInput.addEventListener("keypress", addListAfterEnter);