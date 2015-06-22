//Problem: User interaction doesn't provide desired rseults
//Solution: Add interactivity so user can manage daily tasks

var taskInput = document.getElementById("new-task"); //new task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTaskHolder = document.getElementById("incomplete-tasks"); //incomplete tasks
var completedTaskHolder = document.getElementById("completed-tasks"); //completed tasks

//Add a new task
var addTask = function() {
  console.log("add task...");
  //when button is pressed
    //create new list item with the text from #new-task:
      //input checkbox
      //label
      //input (text)
      //button.edit
      //button.delete
      //each elements, need modified and appended
}
//Edit existing task
var editTask = function() {
  console.log("edit task");
  //When edit button is pressed
    //if class of parent(li) is .edit
      //switch from .editMode
      //label text become the input's value
    //else
      //switch to .editMode  
      //input value becomes label's text

    //toggle .editMode on parent
}

//Delete existing task
var deleteTask = function() {
  console.log("delete task");
  //When delete button is pressed
    //remove parent <li> from <ul>
}

//Mark task as complete
var taskCompleted = function() {
  console.log("complete task");
  //When the checkbox is checked
    //append the task <li> to #completed-tasks
}

//Mark task as incomplete
var taskIncomplete = function() {
  console.log("task incomplete");
  //When the checkbox is unchecked
  //append the task <li> to #incomplete-tasks
}


//Set the click handler to the addTask function
addButton.onclick = addTask;























