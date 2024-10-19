// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

class task{
    static id=0;
    constructor(description){
        this.description=description;
        this.id=++task.id;
        this.isCompleted=false;
    }
}
const tasks=[];
function addTask(description){
    tasks.push(new task(description));
}
function viewTasks(){
    if(tasks.length!=0){
        tasks.forEach(Task=>console.log(`${Task.id} ${Task.description} ,is the task completed? ${Task.isCompleted}`));
    }else{
        console.log("No tasks found. ");
    }
}
function toggleTaskCompletion(id){
    const index=tasks.findIndex( ob=> ob.id === id );
    if(index!=-1){
        tasks[index].isCompleted=!tasks[index].isCompleted;
    }
    else{
        console.log("Task not found.");
    }
}
function deleteTask(id){
    const index=tasks.findIndex( ob=> ob.id === id );
    if(index!=-1){
        tasks.splice(index, 1);
    }
    else{
        console.log("Task not found.");
    }
}
function updateTask(id,desc){
    const index=tasks.findIndex( ob=> ob.id === id );
    if(index!=-1){
        tasks[index].description=desc;
    }
    else{
        console.log("Task not found.");
    }
}
function viewTaskByName(name){
    const element = tasks.find(el=>el.description===name);
    if(element != undefined){
        console.log(`${element.id} ${element.description} ,is the task completed? ${element.isCompleted}`)
    }
    else{
        console.log("Task not found.");
    }
}
addTask("Make food");
addTask("solve js project");
addTask("study");
addTask("dance");
deleteTask(2)
viewTasks();
updateTask(3,"meow");
toggleTaskCompletion(3)
console.log("");
viewTasks();
viewTaskByName("Make foo");

