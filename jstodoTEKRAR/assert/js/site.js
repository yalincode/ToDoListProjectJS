var todoList = [];

class TodoItem {
    constructor(pIsCompleted,pTodoText)
    {
        this.isCompleted = pIsCompleted;
        this.todoText = pTodoText;

        this.listItem = document.createElement("li");
        this.checkInput = document.createElement("input");
        this.listItemSpan = document.createElement("span");

    }
    
    getHtml = () => {
        if (this.isCompleted)
        {
            this.listItem.className = "todo-complete";
        }
        else {
            this.listItem.className = "";
        }

        this.checkInput.type = "checkbox";
        this.checkInput.value = this.isCompleted;
        debugger;
        this.checkInput.onchange = () => {
            this.isCompleted = this.checkInput.checked;
            //refresh lazım!
            refreshList();
        }
        this.listItem.appendChild(this.checkInput);

        this.listItemSpan.innerHTML = this.todoText;
        this.listItem.appendChild(this.listItemSpan);

        return this.listItem;

    }
}

document.addEventListener("DOMContentLoaded", function (event) {

    var todoInput = document.getElementById("txtTodo");
    var addButton = document.getElementById("btnAdd");

    addButton.onclick = function () {
        var todo = new TodoItem(false, todoInput.value);
        todoList.push(todo);
        //refresh
        refreshList();
    }

});

function refreshList() {
    var todoUL = document.getElementById("todoUL");
    var completeUL = document.getElementById("completeUL");

    todoList.forEach((item, index) => {
        if (item.isCompleted)
        {
            completeUL.appendChild(item.getHtml());
        }
        else {
            todoUL.appendChild(item.getHtml());
        }

    });
}