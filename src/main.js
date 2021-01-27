const todos = [];
const render = () =>{     
    const todolist = document.getElementById('todo-list'); //The list of elements is obtained
    const todosTemplate = todos.map(t => '<li>' + t + '</li>'); //Elements are operated within * todos *
    todolist.innerHTML = todosTemplate.join(''); //Items are added within the list
    const elementos = document.querySelectorAll('#todo-list li'); //All items within the list are selected
    elementos.forEach((elementos, i) => {
        elementos.addEventListener('click', () =>{
            elementos.parentNode.removeChild(elementos); //The selected item is removed
            console.log(elementos, i);
            todos.splice(i, 1); //The element is removed within the array
            render();
        })
    })
}
window.onload = () =>{ //Wait for the whole page to be loaded
    const form = document.getElementById("todo-form");
    form.onsubmit = (e) =>{ //an event occurs each time send is pressed
        e.preventDefault(); //Prevents the page from loading every time a data is sent
        const todo = document.getElementById("todo"); 
        const todoTexto = todo.value;
        todo.value = ''; //Leave the input empty again
        todos.push(todoTexto); //It adds data to the whole array
        render(); //The render function is called
    }
}