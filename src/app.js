
// This sample app creates Todo tasks and provides
// the possibility to perform the basic CRUD operation 
// on Mock todo data. The app started off with a 
// default todo object saved into the class instance.
// several logic was implemented to work with any of the saved 
// hard-coded data in the Todo component.

/* creates a boxed component for a Todo app. */
class Todo{
	/* Initialized the this which holds the props of the instance at a point */
	constructor(id,action,status){
		this.offset = 0;
		this.id = id;
		this.action = action;
		this.status = status;
		this.todos = this.pushDefault(this);
	}
	/* getter 'accessed like: this.getTodoSize or instance.getTodoSize'  */
	get getTodoSize(){
		return this.todos.length;
	}
	/* setter 'accessed lik: this.setLimit = value or instance.setLimit = value '*/
	set setLimit(limit){
		this.limit = limit;
	}
	/* push default data to our Todo class [Not necessary,depends on ur implementation]  */
	pushDefault(defaultObject){
		let dummyTodo = [];
		dummyTodo.push(defaultObject);
		return dummyTodo;
	}
	/* Create to Todo item*/
	addTodo(todo){
		if(this.todos.length < this.limit){
			this.todos.push(todo);
		}
				
	}
	/*show todo list */
	showTodo(){
		this.todos.forEach(todo => { console.log(todo.action) } );	
	}
	/* Making modification to any specified todo item */
	updateTodo(data){
		this.todos.map((todo,index,array) => { 
			if(data.id == todo.id ){
				todo.status =  data.status;
			} 
				
		});
		console.info("the todo with the index "+ "\'" + todo.id + "\'" + " has been modified");
	}
	/* Removing a todo item*/
	removeTodo(id){
		this.todos.forEach((todo,index) => { 
			if(id == todo.id ){
				const res = this.todos.splice(index,1);
			}
		});		
		console.log("Removed item with ID: " +id);
	}
	/* step into our data  */
	next(){
		if(this.offset < this.getTodoSize)
			this.offset++;

		const res = this.todos[this.offset-1];
		console.log("Next todo Action in the list: " + res.action);
		
	}
	/* step into our data  */
	previous(){
		if(this.offset > 0 )
			this.offset--;

		if(this.offset >= 1){
			const res = this.todos[this.offset-1];
			console.log("Previous todo Action in the list: " + res.action)
		}
		if(this.offset < 1)
			console.log("No previous todo Action in the list!");
		
	}
}
const todo = new Todo(1,"go shopping","undone");
//set limit to todo item that could be added to the list.
todo.setLimit = 10;

// create todo items and push them into the list.
todo.addTodo({id:2,action:"needs to be at home soon",status:"undone"});
todo.addTodo({id:3,action:"watched a movie lastnight",status:"done"});
todo.addTodo({id:4,action:"Meeting is scheduled for 8:00 this morning",status:"undone"});
todo.addTodo({id:5,action:"Have a class now",status:"in progress"});
todo.addTodo({id:6,action:"The task is undergoing a test",status:"testing"});
//Display the list.
todo.showTodo();

//Remove an item from todo list
todo.removeTodo(Math.ceil(Math.random()*todo.getTodoSize));
//todo.showTodo();

// making an update on the todo instance.
todo.updateTodo({id:2,action:"needs to be at home soon",status:"done"});
// Display the changed todo list;
//todo.showTodo();

//Step into the list, traverse forward through the list.
todo.next();
todo.next();
todo.next();
todo.next();

// Traverse backward through the list.
todo.previous();


