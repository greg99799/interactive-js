//Problem: User interaction doesn't provide desired rseults
//Solution: Add interactivity so user can manage daily tasks

//Add a new task
var addTask = function() {
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
  //When edit button is pressed
    //if class of parent(li) is .edit
      //switch from .editMode
      //label text become the input's value
    //else
      //switch to .editMode  
      //input value becomes label's text

    //toggle .editMode on parent


//Delete existing task
  //When delete button is pressed
    //remove parent <li> from <ul>

//Mark task as complete
  //When the checkbox is checked
    //append the task <li> to #completed-tasks


//Mark task as incomplete
  //When the checkbox is unchecked
  //append the task <li> to #incomplete-tasks