// creating an array of type string and leaving it blank
let tasks: Array<string> = [];

// creating a function called addTask
function addTask(task: string): number{
    
    let count: number;
    tasks.push(task)
    console.log("New task " +task+" added")
    count = tasks.length;

    return count;
}

// creating a function called listAllTasks
function listAllTasks(){
tasks.forEach(function(task){
    console.log(task)
})
}

function deleteTasks(task : string): number{
let key: string = task;

let index: number = tasks.indexOf(key, 0);
if(index > -1)
{
    tasks.splice(index, 1);
}
return tasks.length;
}

// for adding and deleting any of the tasks
addTask("1");
addTask("2");
addTask("3");
addTask("4");
deleteTasks("");
listAllTasks();