const todos = [];

const showTodoList = () => {
    const list = document.getElementById("todoList");
    list.innerHTML = "";
    for(let i = 0; i < todos.length; i++){
        list.innerHTML += `<li>${todos[i]}<button onclick="deleteTodo(${i})">DELETE</button></li>`;
    }
}

const addTodo = () => {
    // 新しいタスクの取得
    const newTodo = document.getElementById("todoInput").value;
    // エラー処理
    if(!newTodo) return;
    // 新しいタスクをタスクリストに追加
    todos.push(newTodo);
    // タスクリストの表示
    showTodoList();
    // 初期化
    document.getElementById("todoInput").value = "";
}

const deleteTodo = (index) => {
    // 既存タスクの削除
    todos.splice(index, 1);
    // タスクリストの表示
    showTodoList();
}