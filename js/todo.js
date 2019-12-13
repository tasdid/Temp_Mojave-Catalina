// Details - https://code-maven.com/todo-in-html-and-javascript
// localStorage - https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

function get_todos() {
  var todos = new Array();
  var todos_str = localStorage.getItem("todo");
  if (todos_str !== null) {
    //   Parse the data with JSON.parse(), and the data becomes a JavaScript object.
    todos = JSON.parse(todos_str);
  }
  return todos;
}

function show() {
    var todos = get_todos();
  
    var html = "<ul>";
    for (var i = 0; i < todos.length; i++) {
      html += "<li>" + todos[i] + '<button class="remove" id="' + i + '">x</button></li>'; //'+ "\u00D7" +' // `${i}`
    }
    html += "</ul>";
  
    document.getElementById("todos").innerHTML = html;
  
    var buttons = document.getElementsByClassName("remove");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", remove);
    }
  }

function add() {
  var task = document.getElementById("task").value;

  var todos = get_todos();
  todos.push(task);
  localStorage.setItem("todo", JSON.stringify(todos));
  show();
  return false;
}

function remove() {
  var id = this.getAttribute("id");
  var todos = get_todos();
  todos.splice(id, 1);
  localStorage.setItem("todo", JSON.stringify(todos));
  show();
  return false;
}

document.getElementById("add").addEventListener("click", add);
show();

/*
---JSON.parse---
//   Parse the data with JSON.parse(), and the data becomes a JavaScript object.

var json = '{"result":true, "count":42}'; //Make sure the text is written in JSON format,or you will get a syntax error.
var obj = JSON.parse(json);

console.log(obj);
// expected output: Object { result: true, count: 42 }

console.log(obj.count);
// expected output: 42

console.log(obj.result);
// expected output: true
*/


/*
---JSON.stringify---
// Convert a JavaScript object into a JSON string with JSON.stringify().
// The result will be a string, and ready to be sent to a server.

var obj = { name: "John", age: 30, city: "New York" };
var json = JSON.stringify(obj);

console.log(json);
// expected output: "{"name":"John","age":30,"city":"New York"}"

console.log(JSON.stringify({ x: 5, y: 6 }));
// expected output: "{"x":5,"y":6}"

console.log(JSON.stringify([new Number(3), new String('false'), new Boolean(false)]));
// expected output: "[3,"false",false]"
*/

/*
---localStorage---
localStorage is similar to sessionStorage, except that while data stored in localStorage has no expiration time, data stored in sessionStorage gets cleared when the page session ends — that is, when the page is closed. The keys and the values are always strings.

localStorage.setItem('myCat', 'Tom');
//Create a localStorage name/value pair with name="myCat" and value="Tom"

var cat = localStorage.getItem('myCat');
console.log(cat)
// expected output: "Tom"

localStorage.removeItem('myCat');

// Clear all items
localStorage.clear();
*/