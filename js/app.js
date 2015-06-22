//Problem: User interaction doesn't provide desired rseults
//Solution: Add interactivity so user can manage daily tasks

var taskInput = document.getElementById("new-task"); //new task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete tasks
var completedTasksHolder = document.getElementById("completed-tasks"); //completed tasks

//New Task list item
var createNewTaskElement = function(taskString){
  //Create list item
  var listItem = document.createElement("li");
  
  //input (checkbox)
  var checkBox = document.createElement("input"); // checkbox
  //label
  var label = document.createElement("label"); // checkbox
  //input (text)
  var editInput = document.createElement("input"); // checkbox
  //button.edit
  var editButton = document.createElement("button"); // checkbox
  //button.delete
  var deleteButton = document.createElement("button"); // checkbox
  //each element needs modified 
  checkBox.type = "checkbox";
  editInput.type = "text";

  editButton.innerText = "Edit";
  editButton.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete" 
  label.innerText = taskString;

  //each element needs appending
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  return listItem;
}

//Add a new task
var addTask = function(taskString) {
  console.log("add task...");
  //create new list item with the text from #new-task:
  var listItem = createNewTaskElement(taskInput.value);

  //Append listItem to incompleteTasksHolder
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);

  taskInput.value = ""; 
}
//Edit existing task
var editTask = function() {
  console.log("edit task");
  
  var listItem = this.parentNode;

  var editInput = listItem.querySelector("input[type=text");
  var label = listItem.querySelector("label");

  var containsClassList = listItem.classList.contains("editMode");
    //if class of parent(li) is .editMode
    if (containsClassList) {
      //switch from .editMode
      //label text become the input's value
      label.innerText = editInput.value;
    } else {
      //switch to .editMode  
      //input value becomes label's text
      editInput.value = label.innerText;
    }
    
  //toggle .editMode on listItem
  listItem.classList.toggle("editMode");
}

//Delete existing task
var deleteTask = function() {
  console.log("delete task");
  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  
  //remove parent <li> from <ul>
  ul.removeChild(listItem);
}

//Mark task as complete
var taskCompleted = function() {
  console.log("complete task");
  //append the task <li> to #completed-tasks
  var listItem = this.parentNode;
  completedTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete);
}

//Mark task as incomplete
var taskIncomplete = function() {
  console.log("task incomplete");
  //append the task <li> to #incomplete-tasks
  var listItem = this.parentNode;
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  console.log("bind list item events");
  //select taskListItems children
  var checkBox = taskListItem.querySelector("input[type=checkbox");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");
  //bind editTask to edit button
  editButton.onclick = editTask;  
  //bind deleteTask to delete button
  deleteButton.onclick = deleteTask; 
  //bind checkbox event handler
  checkBox.onchange = checkBoxEventHandler;
}

var ajaxRequest = function() {
  console.log("AJAX request")
}

//Set the click handler to the addTask function
addButton.addEventListener("click", addTask);
addButton.addEventListener("click", ajaxRequest);


//cycle over incompleteTasksHolder ul list items
for (var i = 0; i < incompleteTasksHolder.children.length; i++) {
  //bind events to list items children(taskCompleted)
  bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}
    

//cycle over completeTasks ul list items
  for (var i = 0; i < completedTasksHolder.children.length; i++) {
  //bind events to list items children(taskCompleted)
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}
    //bind events to list items children(taskIncomplete)






















