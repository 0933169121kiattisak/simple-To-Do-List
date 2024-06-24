

const btnAdd = document.getElementById('btn-todo').addEventListener('click', function() {
    const inputList = document.getElementById('write-todo');
    const valueInput = inputList.value.trim();

    if(valueInput !== ''){
        let newTag = document.createElement('li');
        let TodoList = document.getElementById('todolist')

        newTag.innerHTML = valueInput
        
        TodoList.appendChild(newTag);
        inputList.value = '';

        

        
    }
    
})

