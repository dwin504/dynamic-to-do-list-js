document.addEventListener('DOMContentLoaded',function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    //functiom to add a new task to the list
    function addTask() {
        //get the value from the input field and remove extra spaces
        const taskText = taskInput.value.trim();

        //if the input is empty, alert the user and stop the function
        if(taskText === ''){
            alert('Please enter a task.');
        return;

        }
      
       //create a new <li> element and set its text to the task.
       const listItem = document.createElement('li');
       listItem.textContent = taskText;
       
       //create a "Remove button"

       const removeButton = document.createElement('button');
       removeButton.classList.add('remove-btn');

       // When the "Remove" button is clicked, delete the task
       removeButton.onclick = function() {
        taskList.removeChild(listItem);
       };

       //add the remove button to the task <li>
       listItem.appendChild(removeButton);

       //add the <li> to the task list
       taskList.appendChild(listItem)

       //clear the input field
       taskInput.value = '';
       }
       addButton.addEventListener('click', addTask);

       taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        
       }
    });
});
