import { toDo } from "./todo-creator.js";
// import { todoEditor } from "./todo-editor";


const test = new toDo.TaskGen("test", "test", "test")
toDo.toDoList.push(test)
// test.editTitle("redoTest")
console.log(test)
// console.log(toDo.toDoList)
