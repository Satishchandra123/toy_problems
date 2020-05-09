var tasks = []
var done = []

function display() {
    for(let i = 0; i < tasks.length; i++) {
        task = document.createElement("li")
        task.innerHTML = tasks[i]
        if(done[i]) {
            console.log("color")
            task.style.color = "green"
        }
        document.querySelector("#list").appendChild(task)
    }
}