var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.querySelectorAll("li");

function setupListItem(item) {
	item.addEventListener("click", toggleItem);

	const deleteButton = document.createElement('button');
	deleteButton.innerText = 'X';
	deleteButton.addEventListener("click", function (i) {
		i.target.parentElement.remove();
	});

	item.appendChild(deleteButton);
}

function toggleItem(item) {
	item.target.classList.toggle("done");
}

function inputLength() {
	return input.value.length;
}

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

for (var i = 0; i < listItems.length; i++) {
	setupListItem(listItems[i]);
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
