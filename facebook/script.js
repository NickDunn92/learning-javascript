var database = [
  {
    username: "nick",
    password: "supersecret"
  },
  {
    username: "hannah",
    password: "1234"
  },
  {
    username: "simon",
    password: "5678"
  },

  {
    username: "laura",
    password: "password"
  },
];

var newsFeed = [
  {
    username: "Bobby",
    timeilne: "So tired"
  },
  {
    username: "Sally",
    tiemeline: "Javascript is sick"
  }
];

function isUserValid(username, password) {
  for (var i=0; i < database.length; i++) {
    if (
      database[i].username === username &&
      database[i].password === password
    ) {
      return true;
    } 
  }
  return false;
}

function signIn(username, password) {
  if (
    isUserValid(username, password)
  ) {
    console.log(newsFeed);
  } else {
    alert("Sorry, wrong username and password!");
  } 
}

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

signIn(userNamePrompt, passwordPrompt);

function addUser(username, password) {
  database.push(newUser);
}

var newUser = 
  {
    username: prompt("Enter username"), 
    password: prompt("Enter password")
  };

addUser(newUsername,newPassword);