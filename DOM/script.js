// I have used the below methods to return each of the elements and assign them to a variable  

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.querySelectorAll("li");

// the below function adds an event listener that toggle's a line through an item once done and adds a delete button next to the item, once created.  

function setupListItem(item) {
	item.addEventListener("click", toggleItem);

	const deleteButton = document.createElement('button');
	deleteButton.innerText = 'X';
	deleteButton.addEventListener("click", function (i) {
		i.target.parentElement.remove();
	});

	item.appendChild(deleteButton);
}

// the below function toggles a line through the item to say it has been done

function toggleItem(item) {
	item.target.classList.toggle("done");
}

function inputLength() {
	return input.value.length;
}

// creates a new item, appends a textNode to it, adds the functionality from setUpListItem function to the item and then appends the new item to the unordered list.

function createListElement() {
	var newListItem = document.createElement("li");
	newListItem.appendChild(document.createTextNode(input.value));

	setupListItem(newListItem);

	ul.appendChild(newListItem);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// for loop that loops through the listItems array

for (var i = 0; i < listItems.length; i++) {
	setupListItem(listItems[i]);
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
