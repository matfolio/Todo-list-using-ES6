"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// This sample app creates Todo tasks and provides
// the possibility to perform the basic CRUD operation 
// on Mock todo data. The app started off with a 
// default todo object saved into the class instance.
// several logic was implemented to work with any of the saved 
// hard-coded coded data in the Todo component.

/* creates a boxed component for a Todo app. */
var Todo = function () {
	/* Initialized the this which holds the props of the instance at a point */
	function Todo(id, action, status) {
		_classCallCheck(this, Todo);

		this.offset = 0;
		this.id = id;
		this.action = action;
		this.status = status;
		this.todos = this.pushDefault(this);
	}
	/* getter 'accessed like: this.getTodoSize or instance.getTodoSize'  */


	_createClass(Todo, [{
		key: "pushDefault",

		/* push default data to our Todo class [Not necessary,depends on ur implementation]  */
		value: function pushDefault(defaultObject) {
			var dummyTodo = [];
			dummyTodo.push(defaultObject);
			return dummyTodo;
		}
		/* Create to Todo item*/

	}, {
		key: "addTodo",
		value: function addTodo(todo) {
			if (this.todos.length < this.limit) {
				this.todos.push(todo);
			}
		}
		/*show todo list */

	}, {
		key: "showTodo",
		value: function showTodo() {
			this.todos.forEach(function (todo) {
				console.log(todo.action);
			});
		}
		/* Making modification to any specified todo item */

	}, {
		key: "updateTodo",
		value: function updateTodo(data) {
			this.todos.map(function (todo, index, array) {
				if (data.id == todo.id) {
					todo.status = data.status;
				}
			});
			console.info("the todo with the index " + "\'" + todo.id + "\'" + " has been modified");
		}
		/* Removing a todo item*/

	}, {
		key: "removeTodo",
		value: function removeTodo(id) {
			var _this = this;

			this.todos.forEach(function (todo, index) {
				if (id == todo.id) {
					var res = _this.todos.splice(index, 1);
				}
			});
			console.log("Removed item with ID: " + id);
		}
		/* step into our data  */

	}, {
		key: "next",
		value: function next() {
			if (this.offset < this.getTodoSize) this.offset++;

			var res = this.todos[this.offset - 1];
			console.log("Next todo Action in the list: " + res.action);
		}
		/* step into our data  */

	}, {
		key: "previous",
		value: function previous() {
			if (this.offset > 0) this.offset--;

			if (this.offset >= 1) {
				var res = this.todos[this.offset - 1];
				console.log("Previous todo Action in the list: " + res.action);
			}
			if (this.offset < 1) console.log("No previous todo Action in the list!");
		}
	}, {
		key: "getTodoSize",
		get: function get() {
			return this.todos.length;
		}
		/* setter 'accessed lik: this.setLimit = value or instance.setLimit = value '*/

	}, {
		key: "setLimit",
		set: function set(limit) {
			this.limit = limit;
		}
	}]);

	return Todo;
}();

var todo = new Todo(1, "go shopping", "undone");
//set limit to todo item that could be added to the list.
todo.setLimit = 10;

// create todo items and push them into the list.
todo.addTodo({ id: 2, action: "needs to be at home soon", status: "undone" });
todo.addTodo({ id: 3, action: "watched a movie lastnight", status: "done" });
todo.addTodo({ id: 4, action: "Meeting is scheduled for 8:00 this morning", status: "undone" });
todo.addTodo({ id: 5, action: "Have a class now", status: "in progress" });
todo.addTodo({ id: 6, action: "The task is undergoing a test", status: "testing" });
//Display the list.
todo.showTodo();

//Remove an item from todo list
todo.removeTodo(Math.ceil(Math.random() * todo.getTodoSize));
//todo.showTodo();

// making an update on the todo instance.
todo.updateTodo({ id: 2, action: "needs to be at home soon", status: "done" });
// Display the changed todo list;
//todo.showTodo();

//Step into the list, traverse forward through the list.
todo.next();
todo.next();
todo.next();
todo.next();

// Traverse backward through the list.
todo.previous();